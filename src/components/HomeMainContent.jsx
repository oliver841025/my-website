import WorksContent from './WorksContent';

const HomeMainContent = () => {
  return (
    <div>
      {/* 第一區塊：滿版高，置中 HSUANSKY 和箭頭 */}
      <section className="h-screen flex flex-col items-center justify-center relative w-full">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold">HSUANSKY</h1>
          <p className="text-xl">A web developer based in Taipei, Taiwan</p>
        </div>
        <span className="animate-bounce absolute left-1/2 bottom-20 -translate-x-1/2 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </section>
      {/* 第二區塊：WorksContent */}
      <section>
        <WorksContent />
      </section>
    </div>
  );
};

export default HomeMainContent;
