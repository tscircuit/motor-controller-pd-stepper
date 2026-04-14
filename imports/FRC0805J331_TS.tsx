import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const FRC0805J331_TS = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2907321"],
			}}
			manufacturerPartNumber="FRC0805J331_TS"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2"]}
						pcbX="0.999998mm"
						pcbY="0mm"
						width="1.1325352mm"
						height="1.3770102mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-0.999998mm"
						pcbY="0mm"
						width="1.1325352mm"
						height="1.3770102mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 0.4761991999999964, y: -0.9170924000000014 },
							{ x: 1.7611343999999463, y: -0.9170924000000014 },
							{ x: 1.7611343999999463, y: 0.9170924000000014 },
							{ x: 0.4761991999999964, y: 0.9170924000000014 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.47619920000011007, y: -0.9170924000000014 },
							{ x: -1.7611343999999463, y: -0.9170924000000014 },
							{ x: -1.7611343999999463, y: 0.9170924000000014 },
							{ x: -0.47619920000011007, y: 0.9170924000000014 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.0127mm"
						pcbY="1.9144mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -2.0026000000000295, y: 1.1644000000000005 },
							{ x: 2.02800000000002, y: 1.1644000000000005 },
							{ x: 2.02800000000002, y: -1.1643999999998869 },
							{ x: -2.0026000000000295, y: -1.1643999999998869 },
							{ x: -2.0026000000000295, y: 1.1644000000000005 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2907321.obj?uuid=c7acac53bcbc44d68fbab8f60a747688",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2907321.step?uuid=c7acac53bcbc44d68fbab8f60a747688",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: 0 },
			}}
			{...props}
		/>
	);
};
