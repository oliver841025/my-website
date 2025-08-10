import works from '@/constants/works';
import Image from 'next/image';
import Link from 'next/link';

const WorksContent = () => {
  return (
    <div className="flex flex-wrap">
      {works.map((item) => (
        <Link key={item.slug} href={`/works/${item.slug}`} className="w-1/3 p-4">
          <div className="aspect-square bg-gray-200 rounded flex items-center justify-center cursor-pointer hover:bg-gray-300 overflow-hidden">
            <Image src={item.src} alt={item.alt} width={300} height={300} className="object-cover w-2/3" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorksContent;
