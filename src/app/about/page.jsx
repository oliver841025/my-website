import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <div className="mt-4 flex flex-col gap-20 font-medium p-4 leading-relaxed">
        <div className="flex flex-col gap-6">
          <h2>
            HSUAN 是一個來自台灣, 台北的前端開發者，覺得程式跟設計的結合可以做到很多事，未來想成為一名 maker，但要 make
            什麼，還不是很確定。
          </h2>
          <p>
            大學唸的是<span className="italic font-bold text-md">實踐大學媒體傳達設計學系, 3D 動畫組</span>
            ，某個學期偶然幫當時的女朋友去旁聽程式設計課，覺得這東西有意思，後來持續修了一整個學期，發現會在某些時候寫入一種心流狀態，同時也發現大多同學其實不擅長這件事，也偷偷的看了就業市場，畢竟學校有時候就是市場的縮影，覺得是可投入的領域，所以畢業後也成了動畫組畢業的軟體開發者（？）
          </p>
          <p>
            快畢業的時候，想著自己在 30
            歲左右的時候想唸研究所，結合設計跟工程領域的，但想來想去，始終覺得缺乏硬底子的開發技能，於是先一邊打工，一邊進修開發技能，同時也有去資工大學部一起上課，接著把接下來
            5
            年左右的時光都投入軟體開發的領域，補充了大量現代瀏覽器運作原理、資料庫、市場開發邏輯、電商營運模式等。這段時間對自己思考模式有很大的影響，除了經驗外，學會拆解問題的重要，在生活面對巨大的事情時，習慣先拆解成小問題，然後一個一個解決。當然會選擇這個交叉點的行業也還有其他原因，行業的天花板很高，也無分語言、地區都可以工作，如果市場需要，自己能做，何有不做的原因？
          </p>
          <p>
            畢業後，花了一大段時間去印度跟其他東南亞地區背包旅行，跟許許多多的旅人聊、然後分開，當時沒有錢，但我有天地、有嘴、有腳，還有迪卡儂小睡袋（？），足夠我去往任何地方。大量交談後，覺得時間是一個相對概念，我們在其中享有所有事，但不佔有任何事，時間也是一種能量，不去抓住，才能讓各種能量流入而充滿自己身體，雖然身體也是借來的沒錯。從來不覺得自己是會過得很倉促、盲目的人，在大方向有計劃，小方向喜歡保持未知跟彈性的人，這讓我對很多事物產生好奇，在過程中都是非常享受的，尤其喜歡慢慢打磨、可以自己專心投入的事情。
          </p>
          <p>
            會把日常生活分成三部分
            --邏輯思考、創造、肉體鍛鍊。閒暇之餘，還是喜歡畫畫，畫各種，畫卡片、畫插畫、畫漫畫、旅行中畫似顏繪送給萍水相逢的朋友，用我會的東西祝福他們。也喜歡彈鋼琴，不管是看和弦慢慢刻出來，還是流行歌彈一彈，都能很享受。最喜歡的還是漫畫，漫畫作為一個這個時代的所有知識集大成，可以有各式主題，每次心情好、心情不好、心情沒有好不好的時候，都會去看漫畫，窩在裡面就能讓我很快樂。另外就是寫文章，知識的分享很快樂，受之於大眾，回饋於大眾。目前大部分是紀錄工作的專業知識文章，以前想到什麼都寫，畢竟知識需要被輸入再輸出，才會雋永。也很喜歡運動，肉體的鍛鍊可以磨練心志的強大，就像尼特羅的每日一萬次感謝的正拳，專注與不斷的鍛鍊，終究塑造心智的強壯，週末時間，會當教練，帶著學生、朋友們健身。
          </p>
          <p>
            <span className="italic font-bold text-md">
              能量是流動的，享有的同時，也會有交換的時候，「等價交換」是鋼之鍊金術師的核心概念，也是我做事的準則，當享有什麼時，注定在失去什麼，或是跳脫得到跟失去的概念，我都是在「交換」，有時候換的是金錢，有時是時間，有時是人生，有時是我目前也想不到的事物，但未來會知道我拿出什麼交換了。
            </span>
          </p>
          <p>
            2x 跟 3x
            對我最大的不同就是，去想自己還能做什麼，而不是要做什麼。喜歡互動領域，在那之前我有必要學習我認為該學習的知識跟技能，我不一定會有錢（但還是知道怎麼賺錢），但知道我喜歡的人生怎麼走下去，未來一樣有個大方向，希望能成為個
            maker，但細節，只能等我上路了才會慢慢知道，就像獨自旅行一樣，知道了目的地，但過程會遇到誰、再一起去哪、做了什麼，都不會知道的，同時，享有卻不佔有。
          </p>
        </div>

        <div className="grid grid-cols-5 text-sm max-md:grid-cols-1 max-md:gap-8">
          {/* 第一欄：學歷+經歷 */}
          <div className="flex flex-col gap-10 col-span-2">
            <section className="flex-col flex">
              <h4>學歷</h4>
              <div className="flex flex-col gap-1 mt-6 text-xs">
                <p className="flex gap-4">
                  <span>09.2014 - 06.2019</span>
                  <span>實踐大學媒體傳達設計學系 3D 動畫組, 學士</span>
                </p>
              </div>
            </section>

            <section className="flex flex-col">
              <h4>工作經歷</h4>
              <div className="mt-6 text-xs">08.2025 業餘擔任私人健身指導</div>

              <div className="flex flex-col gap-1 mt-6 text-xs">
                <p className="flex gap-4">
                  <span>05.2023 - 現在</span>
                  <span>KICKSCREW / Front end engineer</span>
                </p>
                <p className="flex gap-4">
                  <span>11.2021 - 05.2023</span>
                  <span>CKEX / Front end engineer</span>
                </p>
                <p className="flex gap-4">
                  <span>09.2019 - 03.2020</span>
                  <span>自光體 / 展場工作室設計助理</span>
                </p>
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-10 col-span-2">
            <section className="flex flex-col">
              <h4>課外活動</h4>

              <div className="mt-6 text-xs">
                <div>2018</div>
                <ul className="list-disc pl-3 space-y-1">
                  <li>Oli 入圍 2018 FFIFA 國際影展</li>
                  <li>實踐大學媒體傳達設計學系所畢業展《荒芥》配樂設計</li>
                  <li>實踐大學媒體傳達設計學系所畢業展《荒芥》似顏繪活動畫家</li>
                </ul>

                <div className="mt-4">2017</div>
                <ul className="list-disc pl-3 space-y-1">
                  <li>TedxKCIS 策展顧問</li>
                  <li>SUPER ADD 實習生</li>
                  <li>水手戰隊 VJ</li>
                  <li>草率季策展團隊</li>
                  <li>線上展覽《有問題幹嘛不說話》小編、 網站架設</li>
                </ul>

                <div className="mt-4">2015</div>
                <ul className="list-disc pl-3">
                  <li>短片《蝨》入圍第三屆東芝幸福影展</li>
                </ul>
              </div>
            </section>

            <section className="col-span-2">
              <h4>技能</h4>
              <p className="text-xs mt-6">網頁, JavaScript, Next.js, 3D 動畫, 平面設計, 健身</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
