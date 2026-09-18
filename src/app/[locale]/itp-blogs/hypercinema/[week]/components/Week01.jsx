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
    <div>
      <h3>Week 01</h3>
      <p>
        We were introduced to some basic audio recording equipment and given a few sounds to capture around us. More
        accurately, they were different **feelings**, such as coldness, counting, comfort, and jealousy. For the feeling
        of jealousy, we were really hungry, so we recorded the sound of someone else eating and chewing. Walking around
        with a microphone, looking at the data, and wearing headphones, we were using our **ears to observe the
        environment instead of our eyes**. I found that experience pretty interesting.
      </p>

      {audios.map((audio, index) => (
        <div key={index}>
          <p>{audio}</p>
          <audio controls preload="metadata">
            <source src={`/audio/hypercinema/week_01/${audio}.wav`} type="audio/mpeg" />
            Cannot play audio
          </audio>
        </div>
      ))}
    </div>
  );
};

export default Week01;
