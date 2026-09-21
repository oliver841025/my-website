import Image from 'next/image';

const Week01 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 01</h3>

      <p className="mt-4">
        During the first week, I familiarized myself with the names and uses of different tools and materials.
      </p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <Image
          src="/pcom/week_01/cut_wires.webp"
          alt="Cut wires"
          width={800}
          height={600}
          className="w-full"
          unoptimized
        />
        <figcaption className="text-gray-400">Cut wires</figcaption>
      </figure>

      <p className="mt-6">I started by learning how to cut and strip wires properly.</p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <Image
          src="/pcom/week_01/first_led.webp"
          alt="First LED"
          width={800}
          height={600}
          className="w-full"
          unoptimized
        />
        <figcaption className="text-gray-400">First LED</figcaption>
      </figure>

      <p className="mt-6">After that, I built my first circuit and successfully lit an LED.</p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <Image
          src="/pcom/week_01/team_discuss.webp"
          alt="Team discussion"
          width={800}
          height={600}
          className="w-full"
          unoptimized
        />
        <figcaption className="text-gray-400">Team discussion</figcaption>
      </figure>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/pcom/week_01/press_controll_led.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="text-gray-400">Press control LED</figcaption>
      </figure>

      <p className="mt-6">I then experimented with using a button to control the LED.</p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/pcom/week_01/led_parallel.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="text-gray-400">LED parallel circuit</figcaption>
      </figure>

      <p className="mt-6">Finally, I learned how to build a parallel circuit.</p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/pcom/week_01/leds_circuit.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="text-gray-400">LED circuit</figcaption>
      </figure>

      <p className="mt-6">
        Overall, through these experiments and the accompanying quizzes, I learned about Ohm’s Law and the relationships
        between voltage, current, and resistance. I also became familiar with how to calculate voltage, current,
        resistance, and power in series and parallel circuits, as well as why short circuits occur and why a circuit
        needs to form a complete loop.
      </p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/pcom/week_01/multimeter_test.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="text-gray-400">Multimeter test</figcaption>
      </figure>

      <p className="mt-6">
        At the beginning, when doing calculations for series and parallel circuits, I needed to write the formulas down
        next to me so that I could convert between the different values more quickly. After practicing a few times, I
        became much more comfortable with the calculations.
      </p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/pcom/week_01/potentiometer.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="text-gray-400">Potentiometer</figcaption>
      </figure>

      <p className="mt-6">
        I also looked into why the positive and negative power rails at the bottom of the breadboard need to be
        connected across the center gap. This creates a continuous “highway” for the basic circuit, allowing both sides
        of the breadboard to be used.
      </p>

      <p className="mt-6">
        I also asked some basic questions, such as why grounding is necessary, what a diode is, whether a light bulb and
        a diode are the same thing, and whether a resistor can replace a voltage regulator. I was able to get answers to
        these questions through ChatGPT.
      </p>

      <figure className="mx-auto mt-4 w-3/5 md:w-1/5">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/pcom/week_01/dc_motor.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <figcaption className="text-gray-400">DC motor</figcaption>
      </figure>

      <p className="mt-6">
        At this point, I don’t have any major problems. I just need to become more familiar with how to connect circuits
        and how to draw circuit diagrams.
      </p>
    </main>
  );
};

export default Week01;
