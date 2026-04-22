import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
	pin3: ["pin3"],
} as const;

export const Potentiometer = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C22461617"],
			}}
			manufacturerPartNumber="VGF39NCHXT_B203"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="1.7750028mm"
						pcbY="-0.999998mm"
						width="1.1999976mm"
						height="1.1999976mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-1.5750032mm"
						pcbY="0.00889mm"
						width="1.5999968mm"
						height="1.499997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="1.7750028mm"
						pcbY="0.999998mm"
						width="1.1999976mm"
						height="1.1999976mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 2.0069301999999425, y: 0.2541016000000127 },
							{ x: 2.0069301999999425, y: -0.2538983999999118 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.8030698000001166, y: -0.9722357999999076 },
							{ x: -1.8030698000001166, y: -1.5238984000000073 },
							{ x: 0.8639301999999134, y: -1.5238984000000073 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.8187689999998611, y: 1.5241015999999945 },
							{ x: -1.8030698000001166, y: 1.5241015999999945 },
							{ x: -1.8030698000001166, y: 0.9900158000000374 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.0106172mm"
						pcbY="2.59639mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -2.635517200000095, y: 1.8463900000001559 },
							{ x: 2.6142827999998417, y: 1.8463900000001559 },
							{ x: 2.6142827999998417, y: -2.4382099999999127 },
							{ x: -2.635517200000095, y: -2.4382099999999127 },
							{ x: -2.635517200000095, y: 1.8463900000001559 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C22461617.obj?uuid=e9297dc616d24881a01257e804dc42a9",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C22461617.step?uuid=e9297dc616d24881a01257e804dc42a9",
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: -0.00005060000000778331,
					y: 0.0050000000000000044,
					z: -0.28,
				},
			}}
			{...props}
		/>
	);
};
