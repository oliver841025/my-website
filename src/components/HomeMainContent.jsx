'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import WorksContent from './WorksContent';
import MoreInfo from './MoreInfo';
import ArticlesList from './ArticlesList';

const HomeMainContent = () => {
  const t = useTranslations();
  return (
    <div>
      <MoreInfo text={t('more_info_cat.guide_info')} />
      {/* 第一區塊：滿版高，置中 HSUANSKY 和箭頭 */}
      <section className="h-screen flex flex-col items-center justify-center w-full relative">
        <div className="flex flex-col items-center gap-4 -mt-52">
          <button type="button" className="group relative h-[300px] w-[300px]" aria-label="Show animated image">
            <Image
              src="/oliver_logo.png"
              alt="Oliver logo"
              width={300}
              height={300}
              className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0"
            />
            <Image
              src="/me.gif"
              alt="Animated image"
              width={300}
              height={300}
              className="absolute inset-0 ml-2 h-full w-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </button>
          <p className="text-center tracking-wider italic text-sm md:text-base font-medium">{t('slogan')}</p>
        </div>
        <span className="absolute bottom-36 left-0 w-full flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </section>
      {/* 第二區塊：WorksContent */}
      <section className="flex flex-col gap-32">
        <div className="flex justify-center items-center flex-col gap-16">
          <h2 className="text-3xl font-semibold border-b-4 border-black pb-2">{t('title.recent_works')}</h2>
          <WorksContent />
        </div>
        <div className="flex justify-center items-center flex-col gap-16">
          <h2 className="text-3xl font-semibold border-b-4 border-black pb-2">{t('title.recent_articles')}</h2>
          <ArticlesList number={3} isDisplayArticlesLength={false} />
        </div>
      </section>
    </div>
  );
};

export default HomeMainContent;
