'use client';
import PageTitle from '@/components/PageTitle';
import ArticlesList from '@/components/ArticlesList';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const ArticlesPage = () => {
  const t = useTranslations('articles');

  return (
    <>
      <PageTitle />
      <div>
        <Link
          href="https://medium.com/me/stories?tab=posts-published"
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer text-blue-500 font-bold"
        >
          <section className="tracking-wide p-6 mb-12 mt-4 bg-slate-100 ">{t('FYI')}</section>
        </Link>
        <ArticlesList />
      </div>
    </>
  );
};

export default ArticlesPage;
