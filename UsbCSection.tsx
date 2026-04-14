import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12";

export const UsbCSection = () => (
	<group pcbX={0} pcbY={-27} schX={0} schY={0}>
		<schematictext text="USB C" schY={5} fontSize={0.5} />
		<TYPE_C_31_M_12 name="J1" pcbX={0} pcbY={-4} />
		<capacitor
			name="C1"
			capacitance="1uF"
			footprint="0402"
			pcbX={10}
			pcbY={6}
		/>
	</group>
);
