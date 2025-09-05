import works from '@/constants/works';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const WorksContent = () => {
  const t = useTranslations('works');
  const locale = useLocale();
  
  return (
    <>
      <div className="relative">
        {works.map((item) => (
          <Link key={item.slug} href={`/works/${item.slug}`}>
              <Image src={item.src} alt={item.alt} width={200} height={200} className={item.class} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default WorksContent;
