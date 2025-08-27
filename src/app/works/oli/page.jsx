'use client';
import Script from 'next/script';
import Image from 'next/image';

const Oli = () => {

  return (
    <div className="mt-12 flex flex-col gap-20 text-sm sm:px-64 leading-relaxed">
      <section className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">OLI</h1>
        <div className="flex gap-12 w-[90%]">
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1">簡介</h4>
            <p>
              巨人在自己的灰色城堡中，日復一日的整理圍繞城堡的花園，因為那些是他周圍為數不多的顏色，從沒想過生活會有什麼變化，直到某天遇到了其他巨人。
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="border-b text-gray-500 border-gray-200 w-full pb-1">技術</h4>
            <ul>
              <li>3D 動畫</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div style={{ padding: '42.5% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/275048872?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/272115606?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

        <p>
          當時一直很喜歡歐·亨利的短篇小說中的「麥琪的禮物」。
          <br />
          <br />
          故事講述一對貧困的年輕夫婦，吉姆和德拉，為了在聖誕節給對方準備一份特別的禮物，而各自賣掉了自己最珍視的東西。
          吉姆賣了他的金表，買了一套德拉夢寐以求的梳子；德拉則賣掉了她的長髮，買了一條白金表鏈給吉姆。
          儘管他們的禮物最終都因為失去原本搭配的物品而失去了實際用途，但這個故事體現了互相照顧和體諒。
          <br />
          <br />
          但拉長一點，如果有一方不覺得自己也正在被照顧呢？既然都說是雙向的關係了。
          <br />
          <br />
          很多時候會覺得主人照顧寵物，父母照顧小孩或有人也將照顧植物當作興趣，表面上好像是單方面的照顧，但實際上，「那些東西」也照顧了你，在心靈層面上，過多的在乎跟計較會讓你看不到這層相對的雙向關係，而丟出更多的情緒勒索到一方枯竭。
        </p>

        {/* <div className="overflow-hidden" ref={emblaRef}> */}
          <div className="flex flex-col gap-4">
            <Image src="/oli/oli_frame_1.avif" alt="OLI frame 1" width={1200} height={350} className="flex-shrink-0" />
            <Image src="/oli/oli_frame_2.avif" alt="OLI frame 2" width={1200} height={350} className="flex-shrink-0" />
            <Image src="/oli/oli_frame_3.avif" alt="OLI frame 3" width={1200} height={350} className="flex-shrink-0" />
            <Image src="/oli/oli_frame_4.avif" alt="OLI frame 4" width={1200} height={350} className="flex-shrink-0" />
          </div>
        {/* </div> */}
        <p>
          場景跟角色其實考慮很久，低飽和的色調、灌溉而成長（或是過度成長）的植物、窺探的小窗、翻倒的馬克杯、外溢的水漬，其實都是關係從平衡走向失衡的暗示。
          <br />
          <br />
          巨人心上的空洞，其實也是一座花園，當外在花園越豐，心上的花園也隨之越豐，反之，空白的大地，消失的植被，獨自走進空白的城堡，心上的花園也枯萎的差不多了，只剩一個空空洞洞的窟窿。
          <br />
          <br />
          巨人沒有五官，除了希望讓人投射自己的影子上去外，也希望他們的情緒不會被過度解讀。
        </p>

        <div className="flex gap-8 justify-center">
          <Image src="/oli/oli_motion_poster.gif" alt="OLI motion poster" width={250} height={450} />
          <Image src="/oli/oli_poster.avif" alt="OLI poster" width={350} height={450} />
        </div>

        <p>
          海報以及動態海報的設計，也是互相呼應的。
          <br />
          <br />
          三層樓，代表關係的三個進程，觀察、照顧再到失衡，由下到上，而平面海報，則是兩個圓的拉扯，代表著關係的雙向性，密不可分，卻又可以伸縮，兩個三個相扣的圓，也代表著關係的三個進程是不可分的。
        </p>

        <p>
          這個作品的名字「OLI」，是「Observe, Love, Imbalance」的縮寫，也是我小時候的暱稱。
          我是有點叛逆的小孩，喜歡用自己的方式去理解世界，跟周圍人的關係，常覺得如果都能有雙向照顧的概念，是不是能讓關係更健康？
          <br />
          <br />
          作品上，現在看來都太意識流，很片段，沒有很好的以合理的故事串起來，甚至只流於畫面的好看，忽略好好說故事的重要。
        </p>
      </section>
    </div>
  );
};

export default Oli;
