import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["OB2"],
	pin2: ["ENN"],
	pin3: ["GND2"],
	pin4: ["CPO"],
	pin5: ["CPI"],
	pin6: ["VCP"],
	pin7: ["SPREAD"],
	pin8: ["5VOUT"],
	pin9: ["MS1_AD0"],
	pin10: ["MS2_AD1"],
	pin11: ["DIAG"],
	pin12: ["INDEX"],
	pin13: ["CLK"],
	pin14: ["PDN_UART"],
	pin15: ["VCC_IO"],
	pin16: ["STEP"],
	pin17: ["VREF"],
	pin18: ["GND1"],
	pin19: ["DIR"],
	pin20: ["STDBY"],
	pin21: ["OA2"],
	pin22: ["VS2"],
	pin23: ["BRA"],
	pin24: ["OA1"],
	pin25: ["UNUSED"],
	pin26: ["OB1"],
	pin27: ["BRB"],
	pin28: ["VS1"],
	pin29: ["EP"],
} as const;

export const TMC2209_LA_T = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2150710"],
			}}
			manufacturerPartNumber="TMC2209_LA_T"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin29"]}
						pcbX="-0.000127mm"
						pcbY="-0.000127mm"
						width="3.499993mm"
						height="3.499993mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin28"]}
						pcbX="-2.499995mm"
						pcbY="-1.501267mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin27"]}
						pcbX="-2.499995mm"
						pcbY="-1.000887mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin26"]}
						pcbX="-2.499995mm"
						pcbY="-0.500507mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin25"]}
						pcbX="-2.499995mm"
						pcbY="-0.000127mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin24"]}
						pcbX="-2.499995mm"
						pcbY="0.500253mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin23"]}
						pcbX="-2.499995mm"
						pcbY="1.000633mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin22"]}
						pcbX="-2.499995mm"
						pcbY="1.501013mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin21"]}
						pcbX="-1.501267mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin20"]}
						pcbX="-1.000887mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin19"]}
						pcbX="-0.500507mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin18"]}
						pcbX="-0.000127mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin17"]}
						pcbX="0.500253mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin16"]}
						pcbX="1.000633mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin15"]}
						pcbX="1.501013mm"
						pcbY="2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="2.499995mm"
						pcbY="1.501013mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="2.499995mm"
						pcbY="1.000633mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="2.499995mm"
						pcbY="0.500253mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="2.499995mm"
						pcbY="-0.000127mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="2.499995mm"
						pcbY="-0.500507mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="2.499995mm"
						pcbY="-1.000887mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="2.499995mm"
						pcbY="-1.501267mm"
						width="0.8999982mm"
						height="0.2800096mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="1.501013mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="1.000633mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="0.500253mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-0.000127mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-0.500507mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-1.000887mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.501267mm"
						pcbY="-2.499995mm"
						width="0.2800096mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -2.0001991999999973, y: -2.6500328000000053 },
							{ x: -2.6501851999999957, y: -2.6500328000000053 },
							{ x: -2.6501851999999957, y: -2.000046800000007 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.0001991999999973, y: 2.6499311999999975 },
							{ x: -2.6501851999999957, y: 2.6499311999999975 },
							{ x: -2.6501851999999957, y: 1.999945199999992 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.649778800000007, y: 1.999945199999992 },
							{ x: 2.649778800000007, y: 2.6499311999999975 },
							{ x: 1.9997927999999945, y: 2.6499311999999975 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.9997927999999945, y: -2.6500328000000053 },
							{ x: 2.649778800000007, y: -2.6500328000000053 },
							{ x: 2.649778800000007, y: -2.000046800000007 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.451303199999991, y: -2.9997908000000137 },
							{ x: -2.600044255997652, y: -2.8491487702960825 },
							{ x: -2.450033199999993, y: -2.6997713759852644 },
							{ x: -2.300022144002334, y: -2.8491487702960825 },
							{ x: -2.448763199999995, y: -2.9997908000000137 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.009271mm"
						pcbY="3.955671mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -3.2056709999999953, y: 3.2056709999999953 },
							{ x: 3.187129000000013, y: 3.2056709999999953 },
							{ x: 3.187129000000013, y: -3.5427290000000085 },
							{ x: -3.2056709999999953, y: -3.5427290000000085 },
							{ x: -3.2056709999999953, y: 3.2056709999999953 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2150710.obj?uuid=ae12e1b5ea7a411e8a6f7d8e9f5ed919",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2150710.step?uuid=ae12e1b5ea7a411e8a6f7d8e9f5ed919",
				pcbRotationOffset: 90,
				modelOriginPosition: { x: 0, y: 0, z: -0.02 },
			}}
			{...props}
		/>
	);
};
