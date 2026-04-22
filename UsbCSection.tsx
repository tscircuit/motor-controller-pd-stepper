import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12";

export const UsbCSection = () => (
	<group pcbX={0} pcbY={-27} schX={0} schY={0}>
		<schematictext text="USB C" schY={2} fontSize={0.5} />
		<TYPE_C_31_M_12
			name="USB_C"
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
			pcbY={2}
			pcbX={2.5}
			footprint="sod523"
			manufacturerPartNumber="1N4148W-TP"
			connections={{
				pin1: "USB_C.DN2",
				pin2: "USB_C.GND2",
			}}
		/>
		<diode
			name="D2"
			pcbX={-3}
			pcbY={1}
			footprint="sod523"
			manufacturerPartNumber="1N4148W-TP"
			connections={{
				pin1: "USB_C.DP2",
				pin2: "USB_C.GND2",
			}}
		/>
	</group>
);
