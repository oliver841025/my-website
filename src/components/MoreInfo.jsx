import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const MoreInfo = ({ text }) => {
    const t = useTranslations('more_info_cat');
  const [infoClicked, setInfoClicked] = useState(false);
  return (
    <>
      <div className="absolute bottom-16 right-8 sm:right-20 flex gap-2 z-10">
        <p
          className={`text-xs font-semibold leading-relaxed tracking-wide max-w-xs sm:max-w-sm text-left break-words transition-opacity duration-300 ${
            infoClicked ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {text}
        </p>
      </div>

      <div className="absolute bottom-8 right-2 flex gap-2 z-10">
        <div>
          <p className={`-ml-1 text-xs font-semibold tracking-wide ${infoClicked ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>{t('i_can_speak')}</p>
          <Image
            src="/cat_jump.gif"
            alt="cat jump"
            width={80}
            height={80}
            className="cursor-pointer"
            onClick={() => setInfoClicked(!infoClicked)}
          />
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
