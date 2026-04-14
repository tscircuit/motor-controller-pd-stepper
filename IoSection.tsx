import { SM03B_SRSS_TB_LF__SN_ } from "./imports/SM03B_SRSS_TB_LF__SN_";
import { SM04B_SRSS_TB_LF__SN_ } from "./imports/SM04B_SRSS_TB_LF__SN_";

export const IoSection = () => (
	<group pcbX={0} pcbY={0} schX={18} schY={-18}>
		<schematictext text="IO" schY={6} fontSize={0.5} />
		<SM04B_SRSS_TB_LF__SN_
			name="J5"
			pcbX={-32.5}
			pcbY={-10}
			pcbRotation={270}
			connections={{
				pin1: "net.GND",
				pin2: "net.VCC3",
				pin3: "net.SDA",
				pin4: "net.SCL",
				pin5: "net.GND",
				pin6: "net.GND",
			}}
		/>
		<SM03B_SRSS_TB_LF__SN_
			name="J6"
			pcbX={32.5}
			pcbY={-10}
			pcbRotation={90}
			connections={{
				pin1: "net.GND",
				pin2: "net.AUX1",
				pin3: "net.AUX2",
				pin4: "net.GND",
				pin5: "net.GND",
			}}
		/>

		<pushbutton
			name="SW1"
			footprint="pushbutton"
			pcbX={-15}
			pcbY={30}
			connections={{
				pin1: "net.BUT1",
				pin2: "net.GND",
			}}
		/>
		<pushbutton
			name="SW2"
			footprint="pushbutton"
			pcbX={0}
			pcbY={30}
			connections={{
				pin1: "net.BUT2",
				pin2: "net.GND",
			}}
		/>
		<pushbutton
			name="SW3"
			footprint="pushbutton"
			pcbX={18}
			pcbY={30}
			connections={{
				pin1: "net.BUT3",
				pin2: "net.GND",
			}}
		/>

		<resistor
			name="R23"
			resistance="10k"
			footprint="0402"
			pcbX={-15}
			pcbY={22}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.BUT1",
			}}
		/>
		<resistor
			name="R24"
			resistance="10k"
			footprint="0402"
			pcbX={0}
			pcbY={22}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.BUT2",
			}}
		/>
		<resistor
			name="R25"
			resistance="10k"
			footprint="0402"
			pcbX={26}
			pcbY={22}
			connections={{
				pin1: "net.VCC3",
				pin2: "net.BUT3",
			}}
		/>
		<resistor
			name="R21"
			resistance="1k"
			footprint="0402"
			pcbX={-15}
			pcbY={-24}
			connections={{
				pin1: "net.LED1",
				pin2: "LED1.pin1",
			}}
		/>
		<resistor
			name="R26"
			resistance="1k"
			footprint="0402"
			pcbX={15}
			pcbY={-24}
			connections={{
				pin1: "net.LED2",
				pin2: "LED2.pin1",
			}}
		/>

		<led
			name="LED1"
			color="blue"
			footprint="0603"
			pcbX={-18}
			pcbY={-24}
			connections={{
				pin2: "net.GND",
			}}
		/>
		<led
			name="LED2"
			color="red"
			footprint="0603"
			pcbX={18}
			pcbY={-24}
			connections={{
				pin2: "net.GND",
			}}
		/>
	</group>
);
