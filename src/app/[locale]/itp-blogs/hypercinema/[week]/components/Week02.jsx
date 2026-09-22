import PhotoFigure from '@/components/PhotoFigure';
import VideoFigure from '@/components/VideoFigure';

const Week02 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 02: Urban Sound Hunter</h3>
      <p className="mt-4">
        These past two weeks have been a group project. After discussing the project with Minki and Sam, I took the
        recording equipment and went out into the city and the subway to collect some samples.
      </p>
      <p className="mt-4">
        One of the sounds I wanted to capture was someone feeling frustrated after running to catch the subway but still
        missing it. I chose this sound partly because it is something I experience myself quite often. Overall, I
        didn&apos;t run into too many problems during the process.
      </p>
      <div className="mt-8 flex justify-start gap-8 [&>figure]:mx-0">
        <PhotoFigure src="/hypercinema/week_02/sound_hunter.PNG" alt="First LED" caption="Ready to go" />
        <VideoFigure src="/hypercinema/week_02/recording_test.MOV" caption="Recording test" />
      </div>
      <h3 className="mt-6 mb-4 text-2xl font-bold">A guy who try to catch the subway</h3>
      <p>
        Our audio journey tells the story of someone trying to catch a subway. We use narrative devices like a ticking
        noise. We use recordings from the city to signal physical location: honking car for street level, turnstile for
        entering the subway, noise of subway entrance Our audio journey shows the growing intensity as time counts down.
        The heart beats faster, the breathing becomes more layered, and the ticking becomes denser. We also have the
        battery charge dying sound, which adds to the stress of the situation. The ending is left somewhat ambiguous,
        culminating with the sound of the train leaving. Did the person catch the subway or not? It's supposed to be a
        tension build and then release.
      </p>

      <div className="mt-8">
        <audio controls preload="metadata">
          <source src={`/hypercinema/week_02/mos.wav`} type="audio/mpeg" />
          Cannot play audio
        </audio>
      </div>
    </main>
  );
};

export default Week02;
