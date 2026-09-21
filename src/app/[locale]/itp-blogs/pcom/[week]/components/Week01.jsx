import Image from 'next/image';
import Link from 'next/link';

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
      <h3 className="text-2xl font-bold">Week 01: Learned how to use wire cutters safely without cutting myself</h3>

      <p className="mt-4">
        During the first week, I familiarized myself with the names and uses of different tools and materials.
      </p>

      <PhotoFigure src="/pcom/week_01/cut_wires.webp" alt="Cut wires" caption="Cut wires" />

      <p className="mt-6">
        I started by learning how to cut and strip wires properly. But it was quite challenging at first. I'd tried few
        times, but I couldn't get the hang of it. I was worried that I might damage the wires.
      </p>

      <PhotoFigure src="/pcom/week_01/first_led.webp" alt="First LED" caption="First LED" />

      <p className="mt-6">After that, I built my first circuit and successfully lit an LED.</p>

      <PhotoFigure src="/pcom/week_01/team_discuss.webp" alt="Team discussion" caption="Team discussion" />

      <VideoFigure src="/pcom/week_01/press_controll_led.mp4" caption="Press control LED" />

      <h3 className="text-2xl font-bold">Get your hands dirty</h3>
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

      <h3 className="text-xl font-bold my-8">
        "Are we really going to accept an Interface Of The Future that is less expressive than a sandwich?"
      </h3>
      <p>
        After reading{' '}
        <Link
          href="https://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/"
          className="underline text-blue-500"
        >
          A brief rant on the future of interaction design
        </Link>{' '}
        and{' '}
        <Link href="https://archive.ph/nhyCI" className="underline text-blue-500">
          No to NoUI
        </Link>
      </p>
      <p className="mt-6">
        I also read the two articles, XX and XX, and they gave me some important points to think about. This is
        especially relevant to me because I have always wanted to explore physical interaction and biotechnology,
        perhaps even something like using a “sixth finger.” I have also always been skeptical about the existence of
        interfaces. Does something being more virtual necessarily make it better? Does it need to be more subtle, or
        less noticeable, to be considered better?
      </p>
      <p className="mt-6">
        I tend to believe that an interface should be presented in a simple and clear way, so that people can naturally
        understand how to use it. Of course, “interface” is just a term here. I think about it more like how we don’t
        need to consciously learn how to use our fingers to perform complex actions. The interaction should feel
        natural, almost as if it were an extension of our body, rather than something we have to consciously learn.
      </p>
    </main>
  );
};

export default Week01;
