import Image from 'next/image';
import Link from 'next/link';

const KicksCrew = () => {
  return (
    <div className="mt-12 flex flex-col gap-20 text-sm sm:px-48 leading-relaxed">
      <section className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">KICKSCREW</h1>
        <div className="flex gap-12 w-[90%]">
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1">簡介</h4>
            <p>
              已成為最受信賴且流暢的球鞋數位交易平台之一，並擴展至服飾與配件，平台線上提供超過 40
              萬種獨特款式，並支援全球配送。
              <br></br>
              <br></br>我會介紹其中幾個重要的功能以及我負責的功能
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="border-b text-gray-500 border-gray-200 w-full pb-1">負責開發的重點功能</h4>
            <ul>
              <li>結帳與金流</li>
              <li>內部後台</li>
              <li>多語系優化</li>
              <li>SEO 優化</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h4 className="text-gray-500 border-b border-gray-200 w-full pb-1">連結</h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kickscrew.com"
              className="text-blue-600 underline"
            >
              KICKSCREW
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/kickscrewcom/"
              className="text-blue-600 underline"
            >
              KICKSCREW Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <Image
          src="/kickscrew_homepage_banner.png"
          alt="KicksCrew homepage banner"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        <hr />
        <Image
          src="/kickscrew_homepage_slide.gif"
          alt="KicksCrew homepage slide"
          width={1920}
          height={600}
          className="w-full h-auto"
        />

        <p>
          正如所有的電商平台，基本的功能包括商品瀏覽、搜尋、購物車、結帳等都有，更進一步整合了自動推薦、分享、商品 360
          度瀏覽，使用者可以輕鬆分享喜愛商品的同時，賺取回饋金，同時更全面看到商品細節。除了球鞋，時不時都會有與 NBA
          球星的聯名活動，比如 Kyrie Irving、Damian Liliard 等眾多球星聯名款，也會根據市場分析，販賣例如 POP MART
          等熱門商品。
          <br></br>
          <br></br>
          值得注意的是，不同其他電商平台，為了更細緻控制網站功能，我們脫離
          Shopify，從結帳金流到活動發布、產品上架，都是由內部團隊自行開發維護，這樣的做法讓我們能夠更快速地迭代與調整功能，並且在面對市場變化時，能夠更靈活地應對。
        </p>
        <div className="flex flex-col items-center gap-4">
          <Image src="/kickscrew_product_rotate_images.gif" alt="KicksCrew product images" width={600} height={300} />
          <p>360 度瀏覽產品</p>
        </div>
        <p>
          同時，可以看到商品的各項資訊、消費者評價、是否加入我的最愛等，在 A\B Testing
          後，選擇最適合使用者閱讀的方式，呈現產品的細項，讓使用者能夠更全面地了解商品，並做出購買決策。
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center overflow-x-auto gap-4 border">
            <Image src="/kickscrew_product_info.png" alt="KicksCrew product info" width={400} height={200} />
            <Image src="/kickscrew_product_price.png" alt="KicksCrew product price" width={400} height={200} />
            <Image src="/kickscrew_product_rating.png" alt="KicksCrew product rating" width={400} height={200} />
            <Image src="/kickscrew_suggest_pop.png" alt="KicksCrew suggestion pop" width={400} height={200} />
          </div>
          <p>可以左右滑動來瀏覽</p>
        </div>

        <div className="flex flex-col gap-12">
          <p>
            所有訂單狀況、問題回報、及時調整價格、買家賣家出價、出貨方式（dropship,
            dropoff...e.t.c）、會員管理等一切後台操作行為，都開發給內部人員、各部門做使用。
            <br />
            <br />
            讓採購部門能看到賣家出價、比價，制定購買順序與策略，客服團隊也能在上面即時回報有狀況的訂單、
            以及處理買家問題。
            <br />
            <br />
            登入採用第三方 OAuth，串接 Google login
            做快速登入，也根據部門回饋做快速搜尋、常用篩選組合等客製化功能。部署方面使用 GCP，雖然身為前端工程師，
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
              href="https://medium.com/@chinghsuan1025/frontend-perspective-building-serverless-automated-deployment-with-gcp-015ede4edafa"
            >
              還是在開發中記錄下部署到 GCP 的心得
            </a>
            ，讓未來的團隊成員能更快速上手。
            <br />
            <br />
            這些後台功能讓我們能夠更有效率地管理平台，做單點登入，
            <span className="font-bold">此後台的使用率為 100%</span>
            ，每個部門每天都會使用，整合所有功能到後台，大幅降低過去使用多個系統的複雜性、重複登入，提升工作效率
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center overflow-x-auto gap-4 border">
              <Image src="/kickscrew_admin_login.png" alt="KicksCrew admin login" width={800} height={400} />
              <Image
                src="/kickscrew_admin_orders_overview.png"
                alt="KicksCrew admin orders overview"
                width={800}
                height={400}
              />
              <Image src="/kickscrew_admin_procure.png" alt="KicksCrew admin procure" width={800} height={400} />
              <Image src="/kickscrew_admin_cx_issue.png" alt="KicksCrew admin cx issue" width={800} height={400} />
            </div>
            <p>可以左右滑動來瀏覽，左到右依序是，單點登入、訂單概覽、採購管理、客服問題回報</p>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <p>
            但問題還有多語系，這個基本問題在市場擴大以及團隊擴建後浮出來。
            <br />
            <br />
            我們的網站需要支援多國語系，最初是由開發團隊自行翻譯與管理，這樣的做法雖然能快速上線，但起初市場比較單一，只有中英市場，後期有歐洲各國與中東地區市場，需要將多國語系轉變為更好管理的系統，於是引入了{' '}
            <a
              href="https://poeditor.com/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              POEditor
            </a>
            ，
            <span className="font-bold">
              將翻譯的責任可以從開發團隊 100% 轉移到專門的翻譯團隊，讓開發團隊能夠更專注於產品的功能開發。
            </span>
            <br />
            <br />
            這樣的做法不僅提升了翻譯的質量，也讓我們能夠更快速地推出多語系版本，
            <span className="font-bold">語系更新速度加快了超過 50% </span>
            ，管理上也十分有邏輯與清晰，
            <a
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@chinghsuan1025/how-we-manage-i18n-at-scale-poeditor-github-workflow-6ec995c9b922"
            >
              我這邊有紀錄當時的考量以及後期的決策
            </a>
            ，分析了利弊以及如何實作。
          </p>
          <Image
            src="/kickscrew_poeditor.png"
            alt="KicksCrew poeditor"
            width={1920}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-12">
          <p>
            雖然不是 SEO 專家，但尤其是電商平台，如何在 Google
            搜尋結果中獲得更好的排名是非常重要的，有更好的排名代表能被使用者優先搜尋到。
            <br />
            <br />
            為此，做過許多優化，包含撰寫
            LDJson、無障礙設計、優先載入某些內容等，讓爬蟲跟瀏覽器能第一時間辨識的指標，同時對於 Light House
            常見的三大項指標也有進行處理，
            <a
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@chinghsuan1025/simple-steps-to-boost-your-websites-seo-ranking-4ef897b888d4"
            >
              這邊也記錄了我對於優化 SEO 的一些觀察與思考。
            </a>
          </p>
          <Image src="/kickscrew_seo.png" alt="KicksCrew SEO" width={1920} height={600} className="w-full h-auto" />
        </div>

        <div className="flex flex-col gap-12">
          <p>
            金流非常重要，這邊我們選擇使用
            <a
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.adyen.com/"
            >
              {' '}
              Adyen{' '}
            </a>
            作為我們支付管理服務平台，在其上，除了一般信用卡支付，考慮到各地區支付習慣不同，我們串接了 Apple Pay、Google
            Pay、Klarna 等涵蓋全球用戶習慣的支付方式。
            <br />
            <br />
            其中 Apple Pay 最為繁瑣，除了需要申請官網的
            Domain，還需要進行一系列的驗證與設定，測試上，也需要申請專門的測試 Apple
            ID，以及特定地區測試卡片，總之這邊我也將流程詳細記錄下來，以便未來同事或我自己查找。
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center overflow-x-auto gap-4 border">
              <Image src="/kickscrew_payment.png" alt="KicksCrew payment" width={300} height={300} />
              <Image
                src="/kickscrew_payment_apple_pay_flow.png"
                alt="KicksCrew Apple Pay flow"
                width={1920}
                height={300}
              />
            </div>
            <p>左邊為現有支付方式，右邊為 Apple Pay 流程圖</p>
          </div>
        </div>

        <div>
          <p>
            此網站也是我工作的一部份，跟團隊成員投注了大量的時間與精力，身為開發者，深知這是一個不小的專案。其中也有許多我個人的學習與紀錄，嘗試在輸入後，轉化再輸出，對於知識的鞏固是很重要的一環。
            <br />
            <br />
            這邊提的是概覽，以及強調我有參與的重點項目開發，此外還有許多小巧思以及細節，例如使用者行為追蹤、性能優化、架構考量等，寫下去會顯得太過技術，可以參考{' '}
            <Link className="text-blue-600 underline" href="/articles">
              文章列表
            </Link>
            ，這邊就不一一列舉了。
          </p>
        </div>
      </section>
    </div>
  );
};

export default KicksCrew;
