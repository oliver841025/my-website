import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const KicksCrew = () => {
  const t = useTranslations('works.kickscrew');
  const intro = Object.values(t.raw('intro'));
  const featureList = Object.values(t.raw('featureList'));
  const links = Object.values(t.raw('links'));
  const imgAlt = t.raw('imgAlt');

  return (
    <div className="mt-12 flex flex-col gap-20 text-sm sm:px-48 leading-relaxed">
      <section className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <div className="flex flex-col sm:flex-row sm:items-start gap-8 w-full">
          {/* 簡介 */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1 mb-1">{t('introTitle')}</h4>
            {intro.map((text, i) => (
              <span key={i} className="whitespace-pre-line inline-block">
                {text}
              </span>
            ))}
          </div>
          {/* 負責開發重點功能 */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1 mb-1">{t('featureTitle')}</h4>
            <ul className="list-disc list-inside">
              {featureList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          {/* 連結 */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1 mb-1">{t('linkTitle')}</h4>
            <ul className="list-disc list-inside">
              {links.map((link, i) => (
                <li key={i}>
                  <a target="_blank" rel="noopener noreferrer" href={link.url} className="text-blue-600 underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 ">
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_homepage_banner.png"
            alt={imgAlt.banner}
            width={1920}
            height={600}
            className="h-auto"
          />
        </div>
        <hr />
        <div className="w-full flex justify-center">
          <Image src="/kickscrew_homepage_slide.gif" alt={imgAlt.slide} width={1920} height={600} className="h-auto" />
        </div>
        <p className="whitespace-pre-line">{t('general_intro')}</p>
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_product_rotate_images.gif"
            alt={imgAlt.product360}
            width={600}
            height={300}
            className="h-auto"
          />
        </div>
        <p className="whitespace-pre-line">{t('product_info')}</p>
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_product_detail.png"
            alt={imgAlt.productInfo}
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <p className="whitespace-pre-line">{t.rich('admin_intro', {
          deploy:(chunks) => <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@chinghsuan1025/frontend-perspective-building-serverless-automated-deployment-with-gcp-015ede4edafa" className='text-blue-600 underline cursor-pointer font-semibold'>{chunks}</Link>
        })}</p>
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_admin_orders_overview.png"
            alt={imgAlt.adminOrders}
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_admin_procure.png"
            alt={imgAlt.adminProcure}
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_admin_cx_issue.png"
            alt={imgAlt.adminCx}
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <p className="whitespace-pre-line">{t.rich('locale_case',{
          poeditor: (chunks) => (
            <Link href="https://medium.com/@chinghsuan1025/how-we-manage-i18n-at-scale-poeditor-github-workflow-6ec995c9b922" className="text-blue-600 font-bold underline cursor-pointer">
              {chunks}
            </Link>
          ),
        })}</p>
        <div className="w-full flex justify-center">
          <Image
            src="/kickscrew_poeditor.png"
            alt={imgAlt.poeditor}
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <p className="whitespace-pre-line">{t.rich('seo_case', {
          seo: (chunks) => (
            <Link href="https://medium.com/@chinghsuan1025/simple-steps-to-boost-your-websites-seo-ranking-4ef897b888d4" className="text-blue-600 font-bold underline cursor-pointer">
              {chunks}
            </Link>
          ),
        })}</p>
        <div className="w-full flex justify-center">
          <Image src="/kickscrew_seo.png" alt={imgAlt.seo} width={600} height={300} className="w-full h-auto" />
        </div>
        <p className="whitespace-pre-line">{t('payment_case')}</p>
        <div className="w-full flex justify-center">
          <Image src="/kickscrew_payment.png" alt={imgAlt.payment} width={600} height={300} className="h-auto" />
        </div>
        <p className='whitespace-pre-line'>
          {t.rich('personal_experience', {
            articles: (chunks) => (
              <Link href="/articles" className="text-blue-600 font-bold underline cursor-pointer">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </section>
    </div>
  );
};

export default KicksCrew;
