import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

import { articles, zh_tw_articles } from '@/app/configs/articles';

const ArticlesList = ({ number, isDisplayArticlesLength = true }) => {
  const locale = useLocale();
  const t = useTranslations('articles');
  const articleList = locale === 'zh-TW' ? zh_tw_articles : articles;
  // 根據 number 參數決定顯示幾篇，預設全部
  const displayList = number ? articleList.slice(0, number) : articleList;

  return (
    <div>
      <ul className="space-y-2 px-2 lg:px-60">
        {isDisplayArticlesLength && (
          <li className="text-slate-500 mb-12 pb-4 border-b">
            {t('published')} {displayList.length}
          </li>
        )}
        {displayList.map((article, idx) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              <div className={`pb-10 pt-4 hover:text-blue-500${idx !== displayList.length - 1 ? ' border-b' : ''}`}>
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
  );
};

export default ArticlesList;
