import { expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { CircuitRunner } from "tscircuit";

type SourceElement = {
	type?: string;
	name?: string;
	source_component_id?: string;
	source_net_id?: string;
	source_port_id?: string;
	connected_source_net_ids?: string[];
	connected_source_port_ids?: string[];
};

const repoRoot = path.resolve(import.meta.dir, "..");

const loadCircuitFsMap = () => {
	const fsMap: Record<string, string> = {
		"tsconfig.json": fs.readFileSync(
			path.join(repoRoot, "tsconfig.json"),
			"utf8",
		),
	};

	for (const fileName of fs.readdirSync(repoRoot)) {
		if (fileName.endsWith(".tsx")) {
			fsMap[fileName] = fs.readFileSync(path.join(repoRoot, fileName), "utf8");
		}
	}

	const importsDir = path.join(repoRoot, "imports");
	for (const fileName of fs.readdirSync(importsDir)) {
		if (fileName.endsWith(".tsx")) {
			fsMap[`imports/${fileName}`] = fs.readFileSync(
				path.join(importsDir, fileName),
				"utf8",
			);
		}
	}

	return fsMap;
};

const addConnectivityEdge = (
	adjacency: Map<string, Set<string>>,
	left: string,
	right: string,
) => {
	if (!adjacency.has(left)) adjacency.set(left, new Set());
	if (!adjacency.has(right)) adjacency.set(right, new Set());
	adjacency.get(left)?.add(right);
	adjacency.get(right)?.add(left);
};

const areSourcePortsConnected = (
	circuitJson: SourceElement[],
	leftPortId: string,
	rightPortId: string,
) => {
	const adjacency = new Map<string, Set<string>>();

	for (const element of circuitJson) {
		if (element.type !== "source_trace") continue;

		const nodes = [
			...(element.connected_source_port_ids ?? []),
			...(element.connected_source_net_ids ?? []),
		];

		for (const left of nodes) {
			for (const right of nodes) {
				if (left !== right) addConnectivityEdge(adjacency, left, right);
			}
		}
	}

	const visited = new Set<string>([leftPortId]);
	const queue = [leftPortId];

	while (queue.length > 0) {
		const current = queue.shift();
		if (!current) break;
		if (current === rightPortId) return true;

		for (const next of adjacency.get(current) ?? []) {
			if (!visited.has(next)) {
				visited.add(next);
				queue.push(next);
			}
		}
	}

	return false;
};

const getSourcePortId = (
	circuitJson: SourceElement[],
	componentName: string,
	portName: string,
) => {
	const component = circuitJson.find(
		(element) =>
			element.type === "source_component" && element.name === componentName,
	);
	if (!component?.source_component_id) {
		throw new Error(`Missing source component: ${componentName}`);
	}

	const port = circuitJson.find(
		(element) =>
			element.type === "source_port" &&
			element.source_component_id === component.source_component_id &&
			element.name === portName,
	);
	if (!port?.source_port_id) {
		throw new Error(`Missing source port: ${componentName}.${portName}`);
	}

	return port.source_port_id;
};

test("connects the USB-C CC pins to the PD controller", async () => {
	const runner = new CircuitRunner({
		platform: {
			drcChecksDisabled: true,
			pcbDisabled: true,
			routingDisabled: true,
		},
	});
	await runner.executeWithFsMap({
		fsMap: loadCircuitFsMap(),
		mainComponentPath: "index.circuit.tsx",
	});
	await runner.renderUntilSettled();
	const circuitJson =
		(await runner.getCircuitJson()) as unknown as SourceElement[];
	await runner.kill();

	for (const pinName of ["CC1", "CC2"] as const) {
		const connectorPortId = getSourcePortId(circuitJson, "USB_C", pinName);
		const controllerPortId = getSourcePortId(circuitJson, "U3", pinName);

		expect(
			areSourcePortsConnected(circuitJson, connectorPortId, controllerPortId),
		).toBe(true);
	}
}, 60_000);
