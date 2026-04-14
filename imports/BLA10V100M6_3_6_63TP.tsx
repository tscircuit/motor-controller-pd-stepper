import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const BLA10V100M6_3_6_63TP = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C165631"],
			}}
			manufacturerPartNumber="BLA10V100M6.3*6 6.3TP"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-2.35mm"
						pcbY="0mm"
						width="2.7mm"
						height="1.6mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="2.35mm"
						pcbY="0mm"
						width="2.7mm"
						height="1.6mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -2.8, y: -2.8 },
							{ x: -1.2, y: -4.2 },
							{ x: 2.8, y: -4.2 },
							{ x: 2.8, y: 4.2 },
							{ x: -1.2, y: 4.2 },
							{ x: -2.8, y: 2.8 },
							{ x: -2.8, y: -2.8 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.35, y: 1.25 },
							{ x: -2.35, y: 2.35 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.9, y: 1.8 },
							{ x: -1.8, y: 1.8 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0mm"
						pcbY="5.1mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -4.2, y: -4.6 },
							{ x: 4.2, y: -4.6 },
							{ x: 4.2, y: 4.6 },
							{ x: -4.2, y: 4.6 },
							{ x: -4.2, y: -4.6 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C165631.obj?uuid=ae12e1b5ea7a411e8a6f7d8e9f5ed919",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C165631.step?uuid=ae12e1b5ea7a411e8a6f7d8e9f5ed919",
				pcbRotationOffset: 90,
				modelOriginPosition: { x: 0, y: 0, z: -0.02 },
			}}
			{...props}
		/>
	);
};
