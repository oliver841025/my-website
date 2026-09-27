import PhotoFigure from '@/components/PhotoFigure';
import VideoFigure from '@/components/VideoFigure';

const Week02 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 02: One wrong resistor made me question my entire life</h3>
      <p className="mt-4">
        This assignment and the experiments required some C++, which wasn&apos;t a big problem for me. I just needed to
        get used to the syntax again since I hadn&apos;t written C++ in a long time. The logic is basically the same.
      </p>
      <p className="mt-4">
        However, I ran into a problem that I couldn&apos;t figure out at first: I had connected the wrong resistor. I
        spent quite a while trying to find out what was wrong, and as a result, the signal was really unstable.
        I&apos;ll explain more about what happened below.
      </p>
      <p className="mt-4">
        During the experiments with 1/0 state switching, pressure sensors, peak detection, and potentiometers, I also
        started to have some questions about how microcontrollers work.
      </p>
      <h3 className="text-2xl font-bold mt-12">
        I didn't notice that I was using the wrong resistor—the 220Ω and 10kΩ ones got mixed up
      </h3>
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_02/problems.webp"
        alt="Wrong resistor"
        caption="Wrong resistor"
      />
      <VideoFigure className="mt-4 w-3/5 md:w-4/5" src="/pcom/week_02/problems.MOV" caption="Unstable signal" />
      <p className="mt-4">
        In the example, the resistor marked in the red box is a 10kΩ resistor connected in series with the button.
        However, I used a 220Ω resistor instead. They honestly look very similar, so I didn't notice the difference at
        first.{' '}
      </p>
      <p className="mt-4">
        Because of this, D2 was not being pulled to HIGH or LOW consistently, which caused the signals I printed to be
        different from what I expected. Using the formula to calculate the current through the two different resistors,
        I got 15mA with the 220Ω resistor and 0.33mA with the 10kΩ resistor. The difference is actually pretty
        significant.
      </p>
      <p className="mt-4">
        After replacing the resistor with the correct 10kΩ one, everything worked as expected. However, this problem
        took me a long time to figure out because I kept overlooking the fact that the resistor connected in series with
        the button in the example was 10kΩ.
      </p>
      <h3 className="text-2xl font-bold mt-12 mb-8">Getting my hands dirty</h3>
      <VideoFigure className="w-3/5 md:w-4/5" src="/pcom/week_02/on_and_off_led.MOV" caption="On and off LED" />
      <VideoFigure className="mt-4 w-3/5 md:w-4/5" src="/pcom/week_02/pot_led.MOV" caption="LED with potentiometer" />
      <p className="my-12">
        After solving the problem, I did&apos;nt run into many issues with the smaller experiments. I just checked the
        circuit and resistor, figured out whether to use a digital (D) or analog (A) pin, set it as an input or output,
        and wrote the code. That was pretty much it.
      </p>
      <VideoFigure
        className="mt-4 w-3/5 md:w-4/5"
        src="/pcom/week_02/button_press_times.MOV"
        caption="Button press times"
      />
      <VideoFigure
        className="mt-4 w-3/5 md:w-4/5"
        src="/pcom/week_02/long_short_press.MOV"
        caption="Long and short press"
      />
      <VideoFigure
        className="mt-4 w-3/5 md:w-4/5"
        src="/pcom/week_02/resistence_pressure_sensor.MOV"
        caption="Resistance and pressure sensor"
      />
      <VideoFigure
        className="mt-4 w-3/5 md:w-4/5"
        src="/pcom/week_02/sensor_threshold_crossing.MOV"
        caption="Sensor threshold crossing"
      />
      <VideoFigure className="mt-4 w-3/5 md:w-4/5" src="/pcom/week_02/threshold_peak.MOV" caption="Threshold peak" />
      <h3 className="my-12 text-2xl font-bold">
        Why do we need to set a digital (D) pin as an input or output, but not an analog (A) pin?
      </h3>
      <PhotoFigure
        className="mt-8 w-3/5 md:w-4/5"
        src="/pcom/week_02/A_O_difference.webp"
        alt="Difference between analog and digital pins"
        caption="Difference between analog and digital pins"
      />
      <p className="mt-4">
        I asked GPT to help me put together a table, and learned that analog (A) pins are commonly used to measure
        changing values, such as those from potentiometers, pressure sensors, light sensors, and temperature sensors.
        Digital (D) pins are used when a value has one of two possible states, such as HIGH or LOW.
      </p>

      <h3 className="my-8 text-2xl font-bold">Why is Serial.begin(9600) often the first line in setup()?</h3>

      <p className="mt-4">
        &#39;Serial.begin(9600)&#39; tells the Arduino to start serial communication at a baud rate of 9600. What does 9600 mean?
        It is the baud rate, which you can think of as the agreed-upon communication speed between the Arduino and the
        computer.
      </p>
      <p className="mt-4">
        First, the Arduino initializes the communication channel with the computer and configures the pins it will use
        to interact with the circuit. Then &#39;loop()&#39; can repeatedly read the button state.
      </p>
    </main>
  );
};

export default Week02;
