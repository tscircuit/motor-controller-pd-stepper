import { S4B_PH_SM4_K_TB_LF__SN_ } from "./imports/S4B_PH_SM4_K_TB_LF__SN_"
import { TMC2209_LA_T } from "./imports/TMC2209_LA_T"

export const StepperDriver = () => (
  <group pcbX={-18} pcbY={8}>
    <TMC2209_LA_T name="U4" pcbX={0} pcbY={0} schX={11} schY={0} />
    <S4B_PH_SM4_K_TB_LF__SN_ name="J2" pcbX={-13} pcbY={-1} pcbRotation={270} schX={19} schY={1} />

    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={4} pcbY={4} schX={7} schY={4} />
    <capacitor name="C6" capacitance="22nF" footprint="0402" pcbX={3} pcbY={7} schX={7} schY={-3} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={9} pcbY={6} schX={15} schY={4} />

    <resistor name="R5" resistance="100mohm" footprint="1206" pcbX={7} pcbY={-8} schX={16} schY={-4} />
    <resistor name="R6" resistance="100mohm" footprint="1206" pcbX={7} pcbY={-4} schX={18} schY={-4} />

    <potentiometer name="RV1" maxResistance="20k" footprint="pinrow3" pcbX={-6} pcbY={11} pcbRotation={90} schX={20} schY={-8} />
  </group>
)
