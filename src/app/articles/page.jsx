'use client';
import { articles } from '@/app/configs/articles';
import PageTitle from '@/components/PageTitle';

const ArticlesPage = () => {
  return (
    <>
      <PageTitle />
      <div>
        <section className=" p-6 mb-12 mt-4 bg-slate-100 text-slate-600">
          FYI: 所有文章目前點擊都會被導引到 Medium，也是我最習慣的寫作、記錄平台。
        </section>
        <ul className="space-y-2 px-2 lg:px-60">
          <li className="text-slate-500 mb-12 pb-4 border-b">Published {articles.length}</li>
          {articles.map((article) => (
            <li key={article.slug}>
              <a target="_blank" rel="noopener noreferrer" href={article.href}>
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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArticlesPage;
