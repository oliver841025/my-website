import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <div className=" flex justify-center px-4 text-sm leading-relaxed mt-20">
        <div className="flex gap-8">
          {/* 左邊圖片 */}
          <Image src="/gengar.jpg" alt="Gengar" width={300} height={300} className="mb-8 sm:mb-0" />
          {/* 右邊所有文字 */}
          <div className="flex flex-col gap-6 items-start text-center sm:text-left w-full">
            {/* 名字 */}
            <p className="text-xl font-bold">Huang Ching Hsuan</p>
            {/* 經歷 */}
            <div>
              <p>2021 / CKEX FE Developer</p>
              <p>2023 / KICKSCREW FE Developer</p>
            </div>
            {/* 自我介紹 */}
            <p className="max-w-md">
              Frontend engineer who loves exploring tech and staying flexible in life. People say I’m like a husky.
            </p>
            {/* 聯絡方式 */}
            <div>
              <p>+886 918005658</p>
              <p>oliver8410252594@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
