import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["SHIELD1"],
	pin2: ["SHIELD2"],
	pin3: ["SHIELD3"],
	pin4: ["SHIELD4"],
	pin5: ["SBU2"],
	pin6: ["CC1"],
	pin7: ["DN2"],
	pin8: ["DP1"],
	pin9: ["DN1"],
	pin10: ["DP2"],
	pin11: ["SBU1"],
	pin12: ["CC2"],
	pin13: ["GND1"],
	pin14: ["GND2"],
	pin15: ["VBUS1"],
	pin16: ["VBUS2"],
} as const;

export const TYPE_C_31_M_12 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C165948"],
			}}
			manufacturerPartNumber="TYPE_C_31_M_12"
			footprint={
				<footprint>
					<hole pcbX="-2.899918mm" pcbY="0.9055672mm" diameter="0.7500112mm" />
					<hole pcbX="2.899918mm" pcbY="0.9055672mm" diameter="0.7500112mm" />
					<platedhole
						portHints={["pin2"]}
						pcbX="4.325112mm"
						pcbY="-2.7741308mm"
						holeWidth="0.7999984mm"
						holeHeight="1.3999972mm"
						outerWidth="1.1999976mm"
						outerHeight="1.7999964mm"
						shape="pill"
					/>
					<platedhole
						portHints={["pin1"]}
						pcbX="4.325112mm"
						pcbY="1.4056932mm"
						holeWidth="0.7999984mm"
						holeHeight="1.5999968mm"
						outerWidth="1.1999976mm"
						outerHeight="1.999996mm"
						shape="pill"
					/>
					<platedhole
						portHints={["pin4"]}
						pcbX="-4.325112mm"
						pcbY="1.4056932mm"
						holeWidth="0.7999984mm"
						holeHeight="1.5999968mm"
						outerWidth="1.1999976mm"
						outerHeight="1.999996mm"
						shape="pill"
					/>
					<platedhole
						portHints={["pin3"]}
						pcbX="-4.325112mm"
						pcbY="-2.7741308mm"
						holeWidth="0.7999984mm"
						holeHeight="1.3999972mm"
						outerWidth="1.1999976mm"
						outerHeight="1.7999964mm"
						shape="pill"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="-1.75006mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-1.249934mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="-0.750062mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="-0.249936mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="0.249936mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="0.750062mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="1.24968mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="1.75006mm"
						pcbY="2.1740432mm"
						width="0.2999994mm"
						height="1.2999974mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						points={[
							{ x: "-2.8999688mm", y: "1.524108mm" },
							{ x: "-2.8999688mm", y: "2.8241308mm" },
							{ x: "-2.8999688mm", y: "2.8241308mm" },
							{ x: "-3.1999682mm", y: "2.8241308mm" },
							{ x: "-3.1999682mm", y: "2.8241308mm" },
							{ x: "-3.1999682mm", y: "2.8239784mm" },
							{ x: "-3.1999682mm", y: "2.8239784mm" },
							{ x: "-3.4999422mm", y: "2.8239784mm" },
							{ x: "-3.4999422mm", y: "2.8239784mm" },
							{ x: "-3.4999422mm", y: "1.5239556mm" },
							{ x: "-3.4999422mm", y: "1.5239556mm" },
							{ x: "-3.1999428mm", y: "1.5239556mm" },
							{ x: "-3.1999428mm", y: "1.5239556mm" },
							{ x: "-3.1999428mm", y: "1.524108mm" },
							{ x: "-3.1999428mm", y: "1.524108mm" },
							{ x: "-2.8999688mm", y: "1.524108mm" },
						]}
						shape="polygon"
					/>
					<smtpad
						portHints={["pin14"]}
						points={[
							{ x: "2.8999942mm", y: "2.8241308mm" },
							{ x: "2.8999942mm", y: "1.5241588mm" },
							{ x: "2.8999942mm", y: "1.5241588mm" },
							{ x: "3.1999936mm", y: "1.5241588mm" },
							{ x: "3.1999936mm", y: "1.5241588mm" },
							{ x: "3.200019mm", y: "1.5241588mm" },
							{ x: "3.200019mm", y: "1.5241588mm" },
							{ x: "3.5000184mm", y: "1.5241588mm" },
							{ x: "3.5000184mm", y: "1.5241588mm" },
							{ x: "3.5000184mm", y: "2.8241308mm" },
							{ x: "3.5000184mm", y: "2.8241308mm" },
							{ x: "3.200019mm", y: "2.8241308mm" },
							{ x: "3.200019mm", y: "2.8241308mm" },
							{ x: "3.1999936mm", y: "2.8241308mm" },
							{ x: "3.1999936mm", y: "2.8241308mm" },
							{ x: "2.8999942mm", y: "2.8241308mm" },
						]}
						shape="polygon"
					/>
					<smtpad
						portHints={["pin15"]}
						points={[
							{ x: "2.7001724mm", y: "1.5241588mm" },
							{ x: "2.7001724mm", y: "2.8241308mm" },
							{ x: "2.7001724mm", y: "2.8241308mm" },
							{ x: "2.400173mm", y: "2.8241308mm" },
							{ x: "2.400173mm", y: "2.8241308mm" },
							{ x: "2.4001476mm", y: "2.8241308mm" },
							{ x: "2.4001476mm", y: "2.8241308mm" },
							{ x: "2.1001482mm", y: "2.8241308mm" },
							{ x: "2.1001482mm", y: "2.8241308mm" },
							{ x: "2.1001482mm", y: "1.5241588mm" },
							{ x: "2.1001482mm", y: "1.5241588mm" },
							{ x: "2.4001476mm", y: "1.5241588mm" },
							{ x: "2.4001476mm", y: "1.5241588mm" },
							{ x: "2.400173mm", y: "1.5241588mm" },
							{ x: "2.400173mm", y: "1.5241588mm" },
							{ x: "2.7001724mm", y: "1.5241588mm" },
						]}
						shape="polygon"
					/>
					<smtpad
						portHints={["pin16"]}
						points={[
							{ x: "-2.0999704mm", y: "1.5240064mm" },
							{ x: "-2.0999704mm", y: "2.8239784mm" },
							{ x: "-2.0999704mm", y: "2.8239784mm" },
							{ x: "-2.3999952mm", y: "2.8239784mm" },
							{ x: "-2.3999952mm", y: "2.8239784mm" },
							{ x: "-2.3999952mm", y: "2.823953mm" },
							{ x: "-2.3999952mm", y: "2.823953mm" },
							{ x: "-2.6999438mm", y: "2.823953mm" },
							{ x: "-2.6999438mm", y: "2.823953mm" },
							{ x: "-2.6999438mm", y: "1.523981mm" },
							{ x: "-2.6999438mm", y: "1.523981mm" },
							{ x: "-2.399919mm", y: "1.523981mm" },
							{ x: "-2.399919mm", y: "1.523981mm" },
							{ x: "-2.399919mm", y: "1.5240064mm" },
							{ x: "-2.399919mm", y: "1.5240064mm" },
							{ x: "-2.0999704mm", y: "1.5240064mm" },
						]}
						shape="polygon"
					/>
					<silkscreenpath
						route={[
							{ x: -4.4689776000000165, y: -1.6757585999999947 },
							{ x: -4.4689776000000165, y: 0.18715359999987413 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 4.471009600000116, y: -5.394140800000059 },
							{ x: -4.4689776000000165, y: -5.394140800000059 },
							{ x: -4.4689776000000165, y: -3.91283820000001 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 4.471009600000116, y: -1.676114200000029 },
							{ x: 4.471009600000116, y: 0.18750920000002225 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 4.471009600000116, y: -5.394140800000059 },
							{ x: 4.471009600000116, y: -3.912482600000203 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.002794mm"
						pcbY="3.8286012mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -5.174805999999876, y: 3.0786011999998664 },
							{ x: 5.180394000000092, y: 3.0786011999998664 },
							{ x: 5.180394000000092, y: -5.650998800000025 },
							{ x: -5.174805999999876, y: -5.650998800000025 },
							{ x: -5.174805999999876, y: 3.0786011999998664 },
						]}
					/>
				</footprint>
			}
			schWidth={2}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: ["CC1", "DP1", "DN1", "SBU1"],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: [
						"VBUS1",
						"VBUS2",
						"SBU2",
						"DN2",
						"DP2",
						"CC2",
						"SHIELD1",
						"SHIELD2",
						"SHIELD3",
						"SHIELD4",
						"GND1",
						"GND2",
					],
				},
			}}
			schPinStyle={{
				VBUS2: {
					marginBottom: 0.2,
				},
				CC2: {
					marginBottom: 0.2,
				},
			}}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C165948.obj?uuid=617b05f9bba7410b96c001093d8189e4",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C165948.step?uuid=617b05f9bba7410b96c001093d8189e4",
				pcbRotationOffset: 180,
				modelOriginPosition: {
					x: 0,
					y: -2.4499977999999945,
					z: 0.000010999999999872223,
				},
			}}
			{...props}
		/>
	);
};
