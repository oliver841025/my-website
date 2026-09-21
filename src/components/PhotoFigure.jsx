import Image from 'next/image';

const mediaClassName = 'mx-auto mt-4 w-3/5 md:w-1/5';

const PhotoFigure = ({ src, alt, caption }) => {
  return (
    <figure className={mediaClassName}>
      <Image src={src} alt={alt} width={800} height={600} className="w-full" unoptimized />
      <figcaption className="text-gray-400">{caption}</figcaption>
    </figure>
  );
};

export default PhotoFigure;
