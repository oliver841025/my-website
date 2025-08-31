'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import WorksContent from './WorksContent';

const HomeMainContent = () => {
  const t = useTranslations();
  return (
    <div>
      {/* 第一區塊：滿版高，置中 HSUANSKY 和箭頭 */}
      <section className="h-screen flex flex-col items-center justify-center w-full relative">
        <div className="flex flex-col items-center gap-4 -mt-52">
          <Image src="/me.gif" alt="me" width={300} height={300} className="ml-2" />
          <p className="tracking-wider italic ">{t('slogan')}</p>
        </div>
       <span className="absolute bottom-20 left-0 w-full flex justify-center" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 "
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </section>
      {/* 第二區塊：WorksContent */}
      <section>
        <WorksContent />
      </section>
    </div>
  );
};

export default HomeMainContent;
