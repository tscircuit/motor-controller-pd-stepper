import { SM03B_SRSS_TB_LF__SN_ } from "./imports/SM03B_SRSS_TB_LF__SN_";
import { SM04B_SRSS_TB_LF__SN_ } from "./imports/SM04B_SRSS_TB_LF__SN_";

export const IoSection = () => (
	<group pcbX={0} pcbY={0} schX={18} schY={-8}>
		<schematictext text="IO" schY={3} fontSize={0.5} />
		<SM04B_SRSS_TB_LF__SN_ name="J3" pcbX={-29} pcbY={-10} pcbRotation={270} />
		<SM03B_SRSS_TB_LF__SN_ name="J4" pcbX={29} pcbY={-10} pcbRotation={90} />

		<pushbutton name="SW1" footprint="pushbutton" pcbX={-15} pcbY={30} />
		<pushbutton name="SW2" footprint="pushbutton" pcbX={0} pcbY={30} />
		<pushbutton name="SW3" footprint="pushbutton" pcbX={18} pcbY={30} />

		<resistor
			name="R8"
			resistance="10k"
			footprint="0402"
			pcbX={-15}
			pcbY={22}
		/>
		<resistor name="R9" resistance="10k" footprint="0402" pcbX={0} pcbY={22} />
		<resistor
			name="R10"
			resistance="10k"
			footprint="0402"
			pcbX={26}
			pcbY={22}
		/>
		<resistor
			name="R11"
			resistance="10k"
			footprint="0402"
			pcbX={24}
			pcbY={20}
		/>
		<resistor
			name="R12"
			resistance="1k"
			footprint="0402"
			pcbX={-15}
			pcbY={-24}
		/>
		<resistor
			name="R13"
			resistance="1k"
			footprint="0402"
			pcbX={15}
			pcbY={-24}
		/>

		<led name="LED1" color="green" footprint="0603" pcbX={-18} pcbY={-24} />
		<led name="LED2" color="green" footprint="0603" pcbX={18} pcbY={-24} />

		<resistor
			name="TH1"
			resistance="10k"
			footprint="0402"
			pcbX={28}
			pcbY={18}
		/>
	</group>
);
