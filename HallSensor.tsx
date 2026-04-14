import { AS5600_ASOT } from "./imports/AS5600_ASOT"

export const HallSensor = () => (
  <group pcbX={-18} pcbY={-2}>
    <AS5600_ASOT name="U5" pcbX={0} pcbY={0} schX={0} schY={10} />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={6} pcbY={-4} schX={3} schY={12} />
    <capacitor name="C9" capacitance="10uF" footprint="0805" pcbX={0} pcbY={-8} schX={5} schY={12} />
    <resistor name="R3" resistance="4.7k" footprint="0402" pcbX={6} pcbY={-8} schX={-5} schY={11} />
    <resistor name="R4" resistance="4.7k" footprint="0402" pcbX={10} pcbY={-8} schX={-3} schY={11} />
  </group>
)
