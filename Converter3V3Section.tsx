import { MPM3612GLQ_Z } from "./imports/MPM3612GLQ_Z";

export const Converter3V3Section = () => (
	<group pcbX={-12} pcbY={-18} schX={-18} schY={-8}>
		<schematictext text="3V3 Converter" schY={4} fontSize={0.5} />
		<MPM3612GLQ_Z name="U2" pcbX={0} pcbY={0} />
		<capacitor
			name="C2"
			capacitance="22uF"
			footprint="1206"
			pcbX={6}
			pcbY={0}
		/>
		<capacitor
			name="C3"
			capacitance="10uF"
			footprint="0805"
			pcbX={6}
			pcbY={4}
		/>
		<capacitor
			name="C4"
			capacitance="100nF"
			footprint="0402"
			pcbX={1}
			pcbY={5}
		/>
		<resistor name="R2" resistance="100k" footprint="0402" pcbX={-6} pcbY={4} />
		<resistor name="R15" resistance="1k" footprint="0402" pcbX={-8} pcbY={-4} />
		<led name="LED4" color="green" footprint="0603" pcbX={-4} pcbY={-4} />
	</group>
);
