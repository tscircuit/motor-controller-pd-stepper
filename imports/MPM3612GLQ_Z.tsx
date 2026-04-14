import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["EN"],
	pin2: ["VIN"],
	pin3: ["GND"],
	pin4: ["VOUT1"],
	pin5: ["VOUT2"],
	pin6: ["VOUT_S"],
	pin7: ["PG"],
	pin8: ["VCC"],
	pin9: ["EPAD"],
} as const;

export const MPM3612GLQ_Z = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C27860958"],
			}}
			manufacturerPartNumber="MPM3612GLQ_Z"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.113028mm"
						pcbY="0.975106mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-1.113028mm"
						pcbY="0.32512mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-1.113028mm"
						pcbY="-0.32512mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-1.113028mm"
						pcbY="-0.975106mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="1.113028mm"
						pcbY="-0.975106mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="1.113028mm"
						pcbY="-0.32512mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="1.113028mm"
						pcbY="0.32512mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="1.113028mm"
						pcbY="0.975106mm"
						width="0.6249924mm"
						height="0.3999992mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="0mm"
						pcbY="0mm"
						width="1.0999978mm"
						height="1.8999962mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -1.4999969999999934, y: 1.338859400000004 },
							{ x: -1.4999969999999934, y: 1.4999970000000218 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.4999970000000076, y: -1.3388593999999898 },
							{ x: 1.4999970000000076, y: -1.4999970000000076 },
							{ x: -1.4999969999999934, y: -1.4999970000000076 },
							{ x: -1.4999969999999934, y: -1.3388593999999898 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4999969999999934, y: 1.4999970000000218 },
							{ x: 1.4999970000000076, y: 1.4999970000000218 },
							{ x: 1.4999970000000076, y: 1.338859400000004 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.2794mm"
						pcbY="2.524mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -2.3074000000000012, y: 1.774000000000001 },
							{ x: 1.7485999999999962, y: 1.774000000000001 },
							{ x: 1.7485999999999962, y: -1.7485999999999962 },
							{ x: -2.3074000000000012, y: -1.7485999999999962 },
							{ x: -2.3074000000000012, y: 1.774000000000001 },
						]}
					/>
				</footprint>
			}
			{...props}
		/>
	);
};
