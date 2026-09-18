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
  )
}

export default Week01;
