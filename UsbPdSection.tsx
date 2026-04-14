import { CH224K } from "./imports/CH224K";

export const UsbPdSection = () => (
	<group pcbX={24} pcbY={2} schX={18} schY={2}>
		<schematictext text="USB PD" schY={3} fontSize={0.5} />
		<CH224K name="U1" pcbX={0} pcbY={0} />
		<resistor name="R1" resistance="10k" footprint="0402" pcbX={5} pcbY={-6} />
		<resistor name="R14" resistance="1k" footprint="0402" pcbX={-3} pcbY={8} />
		<led name="LED3" color="green" footprint="0603" pcbX={7} pcbY={8} />
	</group>
);
