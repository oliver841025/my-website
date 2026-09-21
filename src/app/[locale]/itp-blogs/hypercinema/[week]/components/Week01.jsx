const audios = [
  'Comforting sound',
  'Sound of cold',
  'Sound of hum',
  'Sound of jealousy',
  'Sound of metal',
  'Squishy sound',
  'Ticking sound',
];

const Week01 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 01: Turns Out, I have Ears</h3>
      <p className="mt-4">
        We were introduced to some basic audio recording equipment and given a few sounds to capture around us. More
        accurately, they were different feelings, such as coldness, counting, comfort, and jealousy. For the feeling of
        jealousy, we were really hungry, so we recorded the sound of someone else eating and chewing.
      </p>
      <p className="mt-4">
        Walking around with a microphone, looking at the data, and wearing headphones, we were using our ears to observe
        the environment instead of our eyes. I found that experience pretty interesting.
      </p>

      {audios.map((audio, index) => (
        <div className="mt-8" key={index}>
          <p className="text-gray-400">{audio}</p>
          <audio controls preload="metadata">
            <source src={`/audio/hypercinema/week_01/${audio}.wav`} type="audio/mpeg" />
            Cannot play audio
          </audio>
        </div>
      ))}
    </main>
  );
};

export default Week01;
