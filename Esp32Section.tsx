import { ESP32_S3_MINI_1_N8 } from "./imports/ESP32_S3_MINI_1_N8"

export const Esp32Section = () => (
  <group pcbX={10} pcbY={16}>
    <ESP32_S3_MINI_1_N8 name="U3" pcbX={0} pcbY={0} pcbRotation={180} schX={0} schY={0} />
    <resistor name="R7" resistance="10k" footprint="0402" pcbX={10} pcbY={3} schX={-7} schY={5} />
    <resistor name="R16" resistance="10k" footprint="0402" pcbX={-12} pcbY={7} schX={1} schY={-6} />
    <pushbutton name="SW4" footprint="pushbutton" pcbX={16} pcbY={-4} schX={-12} schY={-1} />
    <pushbutton name="SW5" footprint="pushbutton" pcbX={-12} pcbY={0} schX={-12} schY={-2} />
  </group>
)
