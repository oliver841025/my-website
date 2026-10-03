import PhotoFigure from '@/components/PhotoFigure';
import VideoFigure from '@/components/VideoFigure';

const Week03 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 03: doo doo loo doo, da-da-da 🎵</h3>

      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_03/new_tool.webp"
        alt="New wire stripper"
        caption="can cut and strip wires in the same time"
      />

      <p className="mt-8">
        I didn&apos;t run into many problems this week. I wrote a program that uses pressure to control the frequency,
        producing different pitches.
      </p>
      <h3 className="text-2xl font-bold mt-8">How transistors work</h3>
      <p className="mt-4">
        I learned that a transistor is basically like a switch that uses a small signal to control a larger current. For
        example, the Arduino can send a small signal to the transistor, and the transistor can control the larger amount
        of current going to a speaker or motor. One thing I realized is that the transistor doesn&apos;t actually create
        or magically increase the electricity. The power still comes from the power source, such as USB or an external
        power supply. The transistor just lets the Arduino control that power without having to directly handle the
        larger current itself.
      </p>
      <h3 className="text-2xl font-bold mt-12 mb-8">Getting my hands dirty</h3>
      <VideoFigure className="mt-4 w-3/5 md:w-3/5" src="/pcom/week_03/speaker_song.MOV" caption="Speaker song" />
      <VideoFigure className="w-3/5 md:w-3/5" src="/pcom/week_03/speaker_three_freq.MOV" caption="Three frequencies" />
      <p className="mt-4">Just to play with the different tones, which can really make a song.</p>
      <VideoFigure
        className="mt-4 w-3/5 md:w-3/5"
        src="/pcom/week_03/pressure_speaker_different_freq.MOV"
        caption="Different frequencies with pressure"
      />
      <p className="mt-4">Also can control motor, same logic with controlling speaker.</p>
      <VideoFigure className="mt-4 w-3/5 md:w-3/5" src="/pcom/week_03/motor.MOV" caption="Motor control" />
    </main>
  );
};

export default Week03;
