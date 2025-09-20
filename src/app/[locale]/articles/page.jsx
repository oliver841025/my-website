'use client';
import { articles } from '@/app/configs/articles';
import { zh_tw_articles } from '@/app/configs/articles';
import MoreInfo from '@/components/MoreInfo';
import PageTitle from '@/components/PageTitle';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const ArticlesPage = () => {
  const locale = useLocale();
  const t = useTranslations('articles');
  const articleList = locale === 'zh-TW' ? zh_tw_articles : articles;

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
        <ul className="space-y-2 px-2 lg:px-60">
          <li className="text-slate-500 mb-12 pb-4 border-b">
            {t('published')} {articleList.length}
          </li>
          {articleList.map((article) => (
            <li key={article.slug}>
              <Link href={`/articles/${article.slug}`}>
                <div className="pb-10 pt-4 border-b hover:text-blue-500">
                  <h2 className="font-bold">{article.title}</h2>
                  <p className="text-slate-500">{article.excerpt}</p>
                  <div>
                    <span className="text-slate-400 text-sm">
                      {article.createdAt} · {article.length}
                    </span>
                  </div>
                  {article.tags.map((tag) => (
                    <div
                      key={tag}
                      className="inline-block bg-slate-200 rounded-full px-4 py-1 text-sm font-semibold text-slate-600 mr-2 mt-4"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArticlesPage;
