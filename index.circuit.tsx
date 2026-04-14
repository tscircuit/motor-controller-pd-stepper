import { Converter3V3Section } from "./Converter3V3Section"
import { Esp32Section } from "./Esp32Section"
import { HallSensor } from "./HallSensor"
import { IoSection } from "./IoSection"
import { StepperDriver } from "./StepperDriver"
import { UsbCSection } from "./UsbCSection"
import { UsbPdSection } from "./UsbPdSection"

export default () => (
  <board width="70mm" height="70mm" layers={4} schematicDisabled>
    <hole name="H1" diameter="3.4mm" pcbX={-26} pcbY={-26} />
    <hole name="H2" diameter="3.4mm" pcbX={26} pcbY={-26} />
    <hole name="H3" diameter="3.4mm" pcbX={-26} pcbY={26} />
    <hole name="H4" diameter="3.4mm" pcbX={26} pcbY={26} />

    <UsbCSection />
    <StepperDriver />
    <Esp32Section />
    <HallSensor />
    <UsbPdSection />
    <Converter3V3Section />
    <IoSection />

    <trace from="J1.A4B9" to="net.VBUS" />
    <trace from="J1.B4A9" to="net.VBUS" />
    <trace from="J1.A5" to="U1.CC1" />
    <trace from="J1.B5" to="U1.CC2" />
    <trace from="J1.A6" to="U1.DP" />
    <trace from="J1.B6" to="U1.DP" />
    <trace from="J1.A7" to="U1.DM" />
    <trace from="J1.B7" to="U1.DM" />
    <trace from="J1.A1B12" to="net.GND" />
    <trace from="J1.B1A12" to="net.GND" />
    <trace from="J1.EH1" to="net.GND" />
    <trace from="J1.EH2" to="net.GND" />
    <trace from="J1.EH3" to="net.GND" />
    <trace from="J1.EH4" to="net.GND" />

    <trace from="U1.VBUS" to="net.VBUS" />
    <trace from="U1.VDD" to="net.V3_3" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.PG" to="U3.IO14" />
    <trace from="U1.CFG1" to="U3.IO15" />
    <trace from="U1.CFG2" to="U3.IO16" />
    <trace from="U1.CFG3" to="U3.IO17" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="R1.pin1" to="net.VBUS" />
    <trace from="R1.pin2" to="U1.PG" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.EN" to="R2.pin2" />
    <trace from="R2.pin1" to="net.VBUS" />
    <trace from="U2.VOUT1" to="net.V3_3" />
    <trace from="U2.VOUT2" to="net.V3_3" />
    <trace from="U2.FB" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.EP" to="net.GND" />
    <trace from="U2.PG" to="U3.IO13" />
    <trace from="U2.VCC" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.VBUS" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="U3.3V3" to="net.V3_3" />
    <trace from="U3.GND1" to="net.GND" />
    <trace from="U3.GND2" to="net.GND" />
    <trace from="U3.GND3" to="net.GND" />
    <trace from="U3.GND4" to="net.GND" />
    <trace from="U3.EN" to="R7.pin1" />
    <trace from="R7.pin2" to="net.V3_3" />
    <trace from="SW4.pin1" to="U3.EN" />
    <trace from="SW4.pin3" to="U3.EN" />
    <trace from="SW4.pin2" to="net.GND" />
    <trace from="SW4.pin4" to="net.GND" />
    <trace from="U3.IO0" to="R16.pin1" />
    <trace from="R16.pin2" to="net.V3_3" />
    <trace from="SW5.pin1" to="U3.IO0" />
    <trace from="SW5.pin3" to="U3.IO0" />
    <trace from="SW5.pin2" to="net.GND" />
    <trace from="SW5.pin4" to="net.GND" />

    <trace from="U3.IO8" to="net.I2C_SCL" />
    <trace from="U3.IO9" to="net.I2C_SDA" />
    <trace from="U3.IO35" to="net.BTN_UP" />
    <trace from="U3.IO36" to="net.BTN_DOWN" />
    <trace from="U3.IO37" to="net.BTN_MODE" />
    <trace from="U3.IO38" to="U4.STEP" />
    <trace from="U3.IO39" to="U4.DIR" />
    <trace from="U3.IO40" to="U4.ENN" />
    <trace from="U3.IO41" to="U4.DIAG" />
    <trace from="U3.IO42" to="U4.STDBY" />
    <trace from="U3.IO21" to="U4.PDN_UART" />
    <trace from="U3.IO47" to="R12.pin1" />
    <trace from="U3.IO4" to="net.TEMP_SENSE" />
    <trace from="U3.IO18" to="J4.pin2" />
    <trace from="U3.IO19" to="J4.pin3" />

    <trace from="U4.VCC_IO" to="net.V3_3" />
    <trace from="U4.VS1" to="net.VBUS" />
    <trace from="U4.VS2" to="net.VBUS" />
    <trace from="U4.GND1" to="net.GND" />
    <trace from="U4.GND2" to="net.GND" />
    <trace from="U4.EP" to="net.GND" />
    <trace from="U4.CLK" to="net.GND" />
    <trace from="U4.MS1_AD0" to="net.GND" />
    <trace from="U4.MS2_AD1" to="net.GND" />
    <trace from="U4.SPREAD" to="net.GND" />
    <trace from="U4.OA1" to="J2.pin1" />
    <trace from="U4.OB1" to="J2.pin2" />
    <trace from="U4.OA2" to="J2.pin3" />
    <trace from="U4.OB2" to="J2.pin4" />
    <trace from="U4.BRA" to="R5.pin1" />
    <trace from="R5.pin2" to="net.GND" />
    <trace from="U4.BRB" to="R6.pin1" />
    <trace from="R6.pin2" to="net.GND" />
    <trace from="U4.CPI" to="C6.pin1" />
    <trace from="U4.CPO" to="C6.pin2" />
    <trace from="U4.VCP" to="C5.pin1" />
    <trace from="C5.pin2" to="net.VBUS" />
    <trace from="U4.5VOUT" to="net.V5_TMC" />
    <trace from="C7.pin1" to="net.V5_TMC" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="U4.VREF" to="RV1.pin2" />
    <trace from="RV1.pin1" to="net.GND" />
    <trace from="RV1.pin3" to="net.V3_3" />

    <trace from="U5.VDD3V3" to="net.V3_3" />
    <trace from="U5.VDD5V" to="net.V5_TMC" />
    <trace from="U5.GND" to="net.GND" />
    <trace from="U5.SCL" to="net.I2C_SCL" />
    <trace from="U5.SDA" to="net.I2C_SDA" />
    <trace from="U5.DIR" to="net.GND" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="C9.pin1" to="net.V5_TMC" />
    <trace from="C9.pin2" to="net.GND" />

    <trace from="R3.pin1" to="net.I2C_SCL" />
    <trace from="R3.pin2" to="net.V3_3" />
    <trace from="R4.pin1" to="net.I2C_SDA" />
    <trace from="R4.pin2" to="net.V3_3" />

    <trace from="J3.pin1" to="net.GND" />
    <trace from="J3.pin2" to="net.V3_3" />
    <trace from="J3.pin3" to="net.I2C_SDA" />
    <trace from="J3.pin4" to="net.I2C_SCL" />
    <trace from="J4.pin1" to="net.GND" />

    <trace from="SW1.pin1" to="net.BTN_UP" />
    <trace from="SW1.pin3" to="net.BTN_UP" />
    <trace from="SW1.pin2" to="net.GND" />
    <trace from="SW1.pin4" to="net.GND" />
    <trace from="SW2.pin1" to="net.BTN_DOWN" />
    <trace from="SW2.pin3" to="net.BTN_DOWN" />
    <trace from="SW2.pin2" to="net.GND" />
    <trace from="SW2.pin4" to="net.GND" />
    <trace from="SW3.pin1" to="net.BTN_MODE" />
    <trace from="SW3.pin3" to="net.BTN_MODE" />
    <trace from="SW3.pin2" to="net.GND" />
    <trace from="SW3.pin4" to="net.GND" />
    <trace from="R8.pin1" to="net.BTN_UP" />
    <trace from="R8.pin2" to="net.V3_3" />
    <trace from="R9.pin1" to="net.BTN_DOWN" />
    <trace from="R9.pin2" to="net.V3_3" />
    <trace from="R10.pin1" to="net.BTN_MODE" />
    <trace from="R10.pin2" to="net.V3_3" />

    <trace from="R11.pin1" to="net.TEMP_SENSE" />
    <trace from="R11.pin2" to="net.V3_3" />
    <trace from="TH1.pin1" to="net.TEMP_SENSE" />
    <trace from="TH1.pin2" to="net.GND" />

    <trace from="R12.pin2" to="LED1.anode" />
    <trace from="LED1.cathode" to="net.GND" />
    <trace from="net.V3_3" to="R13.pin1" />
    <trace from="R13.pin2" to="LED2.anode" />
    <trace from="LED2.cathode" to="net.GND" />
    <trace from="U1.PG" to="R14.pin1" />
    <trace from="R14.pin2" to="LED3.anode" />
    <trace from="LED3.cathode" to="net.GND" />
    <trace from="net.V5_TMC" to="R15.pin1" />
    <trace from="R15.pin2" to="LED4.anode" />
    <trace from="LED4.cathode" to="net.GND" />
  </board>
)
