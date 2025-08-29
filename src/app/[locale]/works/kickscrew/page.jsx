import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const KicksCrew = () => {
  const t = useTranslations('works.kickscrew');
  const intro = Object.values(t.raw('intro'));
  const featureList = Object.values(t.raw('featureList'));
  const links = Object.values(t.raw('links'));
  const section1 = Object.values(t.raw('section1'));
  const section2 = Object.values(t.raw('section2'));
  const section3 = Object.values(t.raw('section3'));
  const section4 = Object.values(t.raw('section4'));
  const section5 = Object.values(t.raw('section5'));
  const section6 = Object.values(t.raw('section6'));
  const section7 = Object.values(t.raw('section7'));
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

      <section className="flex flex-col gap-8">
        <Image
          src="/kickscrew_homepage_banner.png"
          alt={imgAlt.banner}
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        <hr />
        <Image
          src="/kickscrew_homepage_slide.gif"
          alt={imgAlt.slide}
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        {section1.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <div className="flex flex-col items-center gap-4">
          <Image src="/kickscrew_product_rotate_images.gif" alt={imgAlt.product360} width={600} height={300} />
          <p>{t('swipeTip')}</p>
        </div>
        {section2.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center overflow-x-auto gap-4 border">
            <Image src="/kickscrew_product_info.png" alt={imgAlt.productInfo} width={400} height={200} />
            <Image src="/kickscrew_product_price.png" alt={imgAlt.productPrice} width={400} height={200} />
            <Image src="/kickscrew_product_rating.png" alt={imgAlt.productRating} width={400} height={200} />
            <Image src="/kickscrew_suggest_pop.png" alt={imgAlt.suggestPop} width={400} height={200} />
          </div>
          <p>{t('swipeTip')}</p>
        </div>
        {section3.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center overflow-x-auto gap-4 border">
            <Image src="/kickscrew_admin_login.png" alt={imgAlt.adminLogin} width={800} height={400} />
            <Image src="/kickscrew_admin_orders_overview.png" alt={imgAlt.adminOrders} width={800} height={400} />
            <Image src="/kickscrew_admin_procure.png" alt={imgAlt.adminProcure} width={800} height={400} />
            <Image src="/kickscrew_admin_cx_issue.png" alt={imgAlt.adminCx} width={800} height={400} />
          </div>
          <p>{t('swipeTipAdmin')}</p>
        </div>
        {section4.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <Image
          src="/kickscrew_poeditor.png"
          alt={imgAlt.poeditor}
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        {section5.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <Image src="/kickscrew_seo.png" alt={imgAlt.seo} width={1920} height={600} className="w-full h-auto" />
        {section6.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center overflow-x-auto gap-4 border">
            <Image src="/kickscrew_payment.png" alt={imgAlt.payment} width={300} height={300} />
            <Image src="/kickscrew_payment_apple_pay_flow.png" alt={imgAlt.applePay} width={1920} height={300} />
          </div>
          <p>{t('swipeTipPayment')}</p>
        </div>
        {section7.map((text, i) => (
          <p key={i} className="whitespace-pre-line">
            {text}
          </p>
        ))}
        <div>
          <p>
            {t('section7.1').replace('文章列表', '')}
            <Link className="text-blue-600 underline" href="/articles">
              {t('section7.1').includes('文章列表') ? '文章列表' : 'Articles'}
            </Link>
            {t('section7.1').replace('文章列表', '')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default KicksCrew;
