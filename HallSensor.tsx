import { AS5600_ASOT } from "./imports/AS5600_ASOT";

export const HallSensor = () => (
	<group pcbX={10} pcbY={-2} schX={-18} schY={-2}>
		<schematictext text="Hall Sensor" schY={3} fontSize={0.5} />
		<AS5600_ASOT
			name="U_HALL"
			pcbX={0}
			pcbY={14}
			schWidth={2.4}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: ["VDD5V", "VDD3V3", "OUT", "GND"],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: ["DIR", "SCL", "SDA", "PGO"],
				},
			}}
			connections={{
				VDD5V: "net.VCC3",
				VDD3V3: "net.VCC3",
				GND: "net.GND",
				DIR: "net.GND",
				SCL: "net.SCL",
				SDA: "net.SDA",
			}}
		/>
		<capacitor
			name="C_HALL_3V3"
			capacitance="100nF"
			footprint="0402"
			pcbX={10}
			pcbY={-10}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R_HALL_SCL"
			resistance="4.7k"
			footprint="0402"
			pcbX={12}
			pcbY={-15}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.SCL",
			}}
		/>
		<resistor
			name="R_HALL_SDA"
			resistance="4.7k"
			footprint="0402"
			pcbX={16}
			pcbY={-15}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.SDA",
			}}
		/>
	</group>
);
