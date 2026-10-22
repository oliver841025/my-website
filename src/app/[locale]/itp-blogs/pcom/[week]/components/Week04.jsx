
const Week04 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">
        Week 04: Component Specifications and Oscilloscope Practice
      </h3>

      <p className="mt-8">
        This week, I practiced reading the specifications of different
        components and documented the important things to keep in mind
        when connecting them. We also practiced using an oscilloscope
        in class.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4">
        1. Understanding the Oscilloscope
      </h3>

      <p className="mt-4">
        An oscilloscope is a tool that lets us see how an electrical
        signal changes over time. Unlike a multimeter, which usually
        shows a voltage value at a particular moment or an averaged
        value, an oscilloscope displays the signal as a waveform.
        This helps us understand what is happening inside a circuit,
        especially when the signal changes quickly.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        How to Read a Waveform
      </h4>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Horizontal axis (X-axis):</strong> Represents time.
          It shows how the signal changes as time passes.
        </li>
        <li>
          <strong>Vertical axis (Y-axis):</strong> Represents voltage.
          It shows the voltage level of the signal at different moments.
        </li>
        <li>
          <strong>Amplitude:</strong> The size of the signal&apos;s voltage
          change. It helps us see how high or low the signal goes.
        </li>
        <li>
          <strong>Period:</strong> The time it takes for one complete
          cycle of a repeating waveform.
        </li>
        <li>
          <strong>Frequency:</strong> The number of cycles per second,
          measured in hertz (Hz). Frequency and period are related:
          frequency = 1 / period.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Understanding the Main Controls
      </h4>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Volts/div:</strong> Controls how much voltage each
          vertical grid division represents. Adjusting it changes how
          tall or short the waveform appears.
        </li>
        <li>
          <strong>Time/div:</strong> Controls how much time each
          horizontal grid division represents. Adjusting it lets us
          view a shorter or longer period of time.
        </li>
        <li>
          <strong>Trigger:</strong> Helps the oscilloscope start
          displaying the waveform at a consistent point in the signal,
          making repeating waveforms appear stable.
        </li>
        <li>
          <strong>Probe:</strong> Connects the oscilloscope to the
          circuit so we can measure a signal at a specific point.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Why Is It Useful for Arduino Projects?
      </h4>

      <p className="mt-4">
        In Arduino projects, many components communicate through
        electrical signals. For example, a digital pin can switch
        between LOW and HIGH, while a PWM output rapidly switches
        between these two states to control the average power delivered
        to a load.
      </p>

      <p className="mt-4">
        An oscilloscope allows us to see these changes directly instead
        of relying only on the values printed in the Serial Monitor.
        We can observe pulse duration, signal frequency, voltage levels,
        and timing. This is especially useful when debugging sensors,
        buttons, speakers, and other electronic components.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4">
        2. Things to Keep in Mind When Using an Oscilloscope
      </h3>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Probe connections:</strong> Connect the probe tip to
          the point you want to measure and the ground clip to the
          circuit&apos;s ground reference.
        </li>
        <li>
          <strong>Voltage and ground:</strong> Check the voltage range
          and make sure the ground connection is correct before measuring.
          On a typical grounded bench oscilloscope, the ground clip may
          be electrically connected to protective earth, so connecting
          it to the wrong point can cause a short circuit.
        </li>
        <li>
          <strong>Voltage and time scales:</strong> Adjust volts/div
          and time/div to make the waveform easier to read.
        </li>
        <li>
          <strong>Trigger settings:</strong> Adjust the trigger level
          and mode to obtain a stable waveform.
        </li>
        <li>
          <strong>Probe attenuation:</strong> Make sure the probe setting,
          such as 1&times; or 10&times;, matches the oscilloscope&apos;s settings.
        </li>
        <li>
          <strong>Circuit safety:</strong> Check the circuit and the
          oscilloscope&apos;s input ratings before measuring. Never assume
          that a probe ground clip can safely connect to any point.
        </li>
      </ul>

      <p className="mt-8">
        Other than that, I didn&apos;t run into many problems this week.
      </p>
    </main>
  );
};

export default Week04;