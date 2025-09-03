'use client';
import Script from 'next/script';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Oli = () => {
  const t = useTranslations('works.oli');

  return (
    <div className="mt-12 flex flex-col gap-20 text-sm sm:px-64 leading-relaxed">
      <section className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">OLI</h1>
        <div className="flex gap-12 w-[90%]">
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1">{t('introTitle')}</h4>
            <p>{t('intro')}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="border-b text-gray-500 border-gray-200 w-full pb-1">{t('techTitle')}</h4>
            <ul>
              <li>{t('tech1')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div style={{ padding: '42.5% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/275048872?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title={t('video1Alt')}
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/272115606?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title={t('video2Alt')}
          ></iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

        {/* OLI 故事段落自動換行渲染 */}
        <div className="whitespace-pre-line">{t('story')}</div>
        <Image src="/oli/oli_frame_1.avif" alt="OLI frame 1" width={1200} height={350} className="flex-shrink-0" />
        <Image src="/oli/oli_frame_2.avif" alt="OLI frame 2" width={1200} height={350} className="flex-shrink-0" />
        <div className="whitespace-pre-line">{t('scene')}</div>
        <Image src="/oli/oli_frame_3.avif" alt="OLI frame 3" width={1200} height={350} className="flex-shrink-0" />
        <Image src="/oli/oli_frame_4.avif" alt="OLI frame 4" width={1200} height={350} className="flex-shrink-0" />
        <div className="whitespace-pre-line">{t('poster')}</div>
        <div className="whitespace-pre-line">{t('oliName')}</div>


        <div className="flex gap-8 justify-center flex-col sm:flex-row items-center">
          <Image src="/oli/oli_motion_poster.gif" alt="OLI motion poster" width={250} height={450} />
          <Image src="/oli/oli_poster.avif" alt="OLI poster" width={350} height={450} />
        </div>
        <div className="whitespace-pre-line">{t('poster')}</div>
        <div className="whitespace-pre-line">{t('oliName')}</div>
      </section>
    </div>
  );
};

export default Oli;
