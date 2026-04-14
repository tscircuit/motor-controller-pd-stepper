import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12";

export const UsbCSection = () => (
	<group pcbX={0} pcbY={-27} schX={0} schY={0}>
		<schematictext text="USB C" schY={5} fontSize={0.5} />
		<TYPE_C_31_M_12
			name="J1"
			pcbX={0}
			pcbY={-4}
			connections={{
				pin1: "net.GND",
				pin2: "net.GND",
				pin3: "net.GND",
				pin4: "net.GND",
				pin15: "net.VBUS",
				pin16: "net.VBUS",
			}}
		/>
		<diode
			name="D1"
			connections={{
				pin1: "J1.DN2",
				pin2: "J1.GND2",
			}}
		/>
		<diode
			name="D2"
			connections={{
				pin1: "J1.DP2",
				pin2: "J1.GND2",
			}}
		/>
	</group>
);
