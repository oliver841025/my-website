import { useTranslations } from 'next-intl';
import React from 'react';

const TalkativeDaisy = () => {
  const t = useTranslations('works.talkativeDaisy');

  return (
    <div className="mt-4">
      <div className="text-sm font-semibold mb-4 md:mb-0">
        <h1>{t('title')}</h1>
        <p className='font-normal italic'>{t('content')}</p>
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
