import { CH224K } from "./imports/CH224K"

export const UsbPdSection = () => (
  <group pcbX={24} pcbY={2}>
    <CH224K name="U1" pcbX={0} pcbY={0} schX={-5} schY={-8} />
    <resistor name="R1" resistance="10k" footprint="0402" pcbX={5} pcbY={-6} schX={-1} schY={-11} />
    <resistor name="R14" resistance="1k" footprint="0402" pcbX={-3} pcbY={8} schX={-1} schY={-6} />
    <led name="LED3" color="green" footprint="0603" pcbX={7} pcbY={8} schX={2} schY={-5} />
  </group>
)
