'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import MoreInfo from '@/components/MoreInfo';

const LittleHouse = () => {
  const t = useTranslations('works.littleHouse');

  return (
    <>
      <div className="w-full">
        <MoreInfo text={t('moreInfo')} />
        {/* 橫向圖片區塊 */}
        <div className="w-full mx-auto items-center mt-36 sm:mt-8">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            <Image src="/little_house/little_house_1.png" alt={t('imgAlt1')} width={600} height={600} />
            <Image src="/little_house/little_house_2.png" alt={t('imgAlt2')} width={600} height={600} />
            <Image src="/little_house/little_house_3.png" alt={t('imgAlt3')} width={600} height={600} />
            <Image src="/little_house/little_house_4.png" alt={t('imgAlt4')} width={600} height={600} />
            <Image src="/little_house/little_house_5.png" alt={t('imgAlt5')} width={600} height={600} />
            <Image src="/little_house/little_house_6.png" alt={t('imgAlt6')} width={600} height={600} />
            <Image src="/little_house/little_house_7.png" alt={t('imgAlt7')} width={600} height={600} />
            <Image src="/little_house/little_house_8.png" alt={t('imgAlt8')} width={600} height={600} />
            <Image src="/little_house/little_house_9.png" alt={t('imgAlt9')} width={600} height={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LittleHouse;
