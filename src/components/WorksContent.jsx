import works from '@/constants/works';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const WorksContent = () => {
  const t = useTranslations('works');
  const locale = useLocale();
  return (
    <>
      <div className="grid grid-cols-3 gap-8 px-8 mx-auto max-md:grid-cols-1 max-md:gap-4 max-md:px-2">
        {works.map((item) => (
          <Link key={item.slug} href={`/works/${item.slug}`}>
            <div className="aspect-square bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-100 overflow-hidden group relative w-full">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={300}
                className={item.class || undefined}
                style={item.slug === 'kickscrew' ? { objectFit: 'contain' } : {}}
              />
              {/* 遮罩區塊 */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/40 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm italic">{item.intro[locale] || item.intro['en']}</span>
              </div>
            </div>
            <div className="mt-1">
              {item.tags && item.tags.length > 0 && (
                <span className="text-md text-slate-500">
                  {item.tags.map((tag, idx) => `#${tag}${idx !== item.tags.length - 1 ? ', ' : ''}`)}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default WorksContent;
