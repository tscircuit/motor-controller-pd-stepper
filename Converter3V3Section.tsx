import { MPM3612GLQ_Z } from "./imports/MPM3612GLQ_Z";

export const Converter3V3Section = () => (
	<group pcbX={-12} pcbY={-18} schX={-18} schY={-13}>
		<schematictext text="3V3 Converter" schY={6} fontSize={0.5} />
		<MPM3612GLQ_Z
			name="U_BUCK"
			pcbX={0}
			pcbY={0}
			schWidth={2.8}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: ["EN", "VIN", "GND", "VOUT1", "VOUT2"],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: ["EPAD", "PG", "VOUT_S"],
				},
			}}
			connections={{
				VIN: "net.VBUS",
				GND: "net.GND",
				EPAD: "net.GND",
				VOUT1: "net.VCC3",
				VOUT2: "net.VCC3",
			}}
		/>
		<capacitor
			name="C16"
			capacitance="22uF"
			footprint="1206"
			pcbX={6}
			pcbY={0}
			connections={{
				pin1: "net.VBUS",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C15"
			capacitance="100nF"
			footprint="0402"
			pcbX={3}
			pcbY={0}
			connections={{
				pin1: "net.VBUS",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C17"
			capacitance="100nF"
			footprint="0402"
			pcbX={6}
			pcbY={4}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C18"
			capacitance="22uF"
			footprint="1206"
			pcbX={10}
			pcbY={4}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R20"
			resistance="100k"
			footprint="0402"
			pcbX={-6}
			pcbY={4}
			connections={{
				pin1: "net.VBUS",
				pin2: "U_BUCK.EN",
			}}
		/>
		<resistor
			name="R22"
			resistance="100k"
			footprint="0402"
			pcbX={8}
			pcbY={-4}
			connections={{
				pin1: "U_BUCK.PG",
				pin2: "net.VCC3",
			}}
		/>
		<resistor
			name="R27"
			resistance="10k"
			footprint="0402"
			pcbX={4}
			pcbY={8}
			connections={{
				pin1: "net.VCC3",
				pin2: "U_BUCK.VOUT_S",
			}}
		/>
		<resistor
			name="R28"
			resistance="1k"
			footprint="0402"
			pcbX={-8}
			pcbY={-4}
			connections={{
				pin1: "net.VCC3",
				pin2: "LED_3V3.pin1",
			}}
		/>
		<led
			name="LED_3V3"
			color="green"
			footprint="0603"
			pcbX={-4}
			pcbY={-4}
			connections={{
				pin2: "net.GND",
			}}
		/>
	</group>
);
