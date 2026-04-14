import { CH224K } from "./imports/CH224K";

export const UsbPdSection = () => (
	<group pcbX={24} pcbY={2} schX={18} schY={2}>
		<schematictext text="USB PD" schY={4} fontSize={0.5} />
		<CH224K
			name="U3"
			pcbX={0}
			pcbY={0}
			schWidth={2.6}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: ["GND", "VDD", "CFG2", "CFG3", "DP", "DM"],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: ["PG", "CFG1", "VBUS", "CC1", "CC2"],
				},
			}}
			connections={{
				GND: "net.GND",
				VDD: "net.VCC3",
				DM: "U3.DP",
				CC1: "net.CC1",
				CC2: "net.CC2",
			}}
		/>
		<capacitor
			name="C14"
			capacitance="1uF"
			footprint="0402"
			pcbX={-6}
			pcbY={-2}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R11"
			resistance="20k"
			footprint="0402"
			pcbX={11}
			pcbY={6}
			connections={{
				pin1: "net.VBUS",
				pin2: "net.VBUS_SENSE",
			}}
		/>
		<resistor
			name="R14"
			resistance="2.7k"
			footprint="0402"
			pcbX={11}
			pcbY={2}
			connections={{
				pin1: "net.VBUS_SENSE",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R15"
			resistance="10k"
			footprint="0402"
			pcbX={6}
			pcbY={-6}
			connections={{
				pin1: "net.VCC3",
				pin2: "U3.PG",
			}}
		/>
		<resistor
			name="R16"
			resistance="1k"
			footprint="0402"
			pcbX={8}
			pcbY={-2}
			connections={{
				pin1: "LED3.pin2",
				pin2: "U3.PG",
			}}
		/>
		<resistor
			name="R17"
			resistance="1k"
			footprint="0402"
			pcbX={-10}
			pcbY={-6}
			connections={{
				pin1: "net.VBUS",
				pin2: "net.VCC3",
			}}
		/>
		<resistor
			name="R18"
			resistance="NF"
			footprint="0402"
			pcbX={6}
			pcbY={2}
			connections={{
				pin1: "net.GND",
				pin2: "U3.CFG1",
			}}
		/>
		<resistor
			name="R19"
			resistance="10k"
			footprint="0402"
			pcbX={6}
			pcbY={6}
			connections={{
				pin1: "U3.VBUS",
				pin2: "net.VBUS",
			}}
		/>
		<led
			name="LED3"
			color="green"
			footprint="0603"
			pcbX={8}
			pcbY={-6}
			connections={{
				pin1: "net.VCC3",
			}}
		/>
	</group>
);
