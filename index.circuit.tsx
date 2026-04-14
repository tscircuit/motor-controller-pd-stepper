import { Converter3V3Section } from "./Converter3V3Section";
import { Esp32Section } from "./Esp32Section";
import { HallSensor } from "./HallSensor";
import { IoSection } from "./IoSection";
import { StepperDriver } from "./StepperDriver";
import { UsbCSection } from "./UsbCSection";
import { UsbPdSection } from "./UsbPdSection";

export default () => (
	<board width="70mm" height="70mm">
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
	</board>
);
