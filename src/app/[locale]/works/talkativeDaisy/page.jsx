import React from 'react';

const TalkativeDaisy = () => {
  return (
    <div className="mt-4">
      <div className="text-sm font-semibold mb-4 md:mb-0">
        <h1>Talkative Daisy</h1>
        <p>
          People in the city speak countless words every day, creating all kinds of noises. These sounds collide with
          one another, and depending on their intensity and rhythm, daisies appear at different speeds and sizes. And of
          course—since everyone’s colorful language is assumed to be “fragrant”—I turned all those noises into daisies
        </p>
      </div>
      <div className="border transform scale-100 md:scale-75">
        <iframe
          src="https://oliver841025.github.io/talkativeDaisy/"
          title="Talkative Daisy"
          allowFullScreen
          style={{ width: '100%', height: '100vh', border: '0' }}
          allow="microphone; camera; accelerometer; gyroscope;"
        ></iframe>
      </div>
    </div>
  );
};

export default TalkativeDaisy;
