import Image from 'next/image';

const mediaClassName = 'mx-auto mt-4 w-3/5 md:w-1/5';

const PhotoFigure = ({ src, alt, caption }) => {
  return (
    <figure className={mediaClassName}>
      <Image src={src} alt={alt} width={800} height={600} className="w-full" unoptimized />
      <figcaption className="text-gray-400">{caption}</figcaption>
    </figure>
  );
};

const VideoFigure = ({ src, caption }) => {
  return (
    <figure className={mediaClassName}>
      <video controls preload="metadata" playsInline className="w-full">
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <figcaption className="text-gray-400">{caption}</figcaption>
    </figure>
  );
};

const Week01 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 01</h3>

      <p className="mt-4">
        During the first week, I familiarized myself with the names and uses of different tools and materials.
      </p>

      <PhotoFigure src="/pcom/week_01/cut_wires.webp" alt="Cut wires" caption="Cut wires" />

      <p className="mt-6">I started by learning how to cut and strip wires properly.</p>

      <PhotoFigure src="/pcom/week_01/first_led.webp" alt="First LED" caption="First LED" />

      <p className="mt-6">After that, I built my first circuit and successfully lit an LED.</p>

      <PhotoFigure src="/pcom/week_01/team_discuss.webp" alt="Team discussion" caption="Team discussion" />

      <VideoFigure src="/pcom/week_01/press_controll_led.mp4" caption="Press control LED" />

      <p className="mt-6">I then experimented with using a button to control the LED.</p>

      <VideoFigure src="/pcom/week_01/led_parallel.mp4" caption="LED parallel circuit" />

      <p className="mt-6">Finally, I learned how to build a parallel circuit.</p>

      <VideoFigure src="/pcom/week_01/leds_circuit.mp4" caption="LED circuit" />

      <p className="mt-6">
        Overall, through these experiments and the accompanying quizzes, I learned about Ohm’s Law and the relationships
        between voltage, current, and resistance. I also became familiar with how to calculate voltage, current,
        resistance, and power in series and parallel circuits, as well as why short circuits occur and why a circuit
        needs to form a complete loop.
      </p>

      <VideoFigure src="/pcom/week_01/multimeter_test.mp4" caption="Multimeter test" />

      <p className="mt-6">
        At the beginning, when doing calculations for series and parallel circuits, I needed to write the formulas down
        next to me so that I could convert between the different values more quickly. After practicing a few times, I
        became much more comfortable with the calculations.
      </p>

      <VideoFigure src="/pcom/week_01/potentiometer.mp4" caption="Potentiometer" />

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

      <VideoFigure src="/pcom/week_01/dc_motor.mp4" caption="DC motor" />

      <p className="mt-6">
        At this point, I don’t have any major problems. I just need to become more familiar with how to connect circuits
        and how to draw circuit diagrams.
      </p>
    </main>
  );
};

export default Week01;
