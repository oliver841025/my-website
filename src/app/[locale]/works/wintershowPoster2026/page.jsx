import Image from 'next/image';

const KicksCrew = () => {

  return (
    <div className="mt-12 flex flex-col gap-20 text-sm sm:px-48 leading-relaxed">
      <section className="flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/wintershow_poster_2026.png"
            alt="Wintershow Poster 2026"
            width={500}
            height={500}
            className="h-auto"
          />
        </div>
        <p className="whitespace-pre-line">
          This is my poster proposal for this year&apos;s NYU TISCH ITP Winter Show. I chose bright, diverse colors to make people
          feel excited and want to be part of the show. When I think of a show, I think of a stage, and every stage
          needs spotlights for the stars to make a grand entrance! My three characters are Atom Boy, who can connect
          anything using the giant breadboard on his hand; Slug Superhero, who can move incredibly fast despite being a
          slug; and Crab Robot, who can easily cut through anything. The Crab Robot was inspired by wire strippers.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_proposal_word_cloud.png"
            alt="Word cloud of the poster proposal"
            width={900}
            height={600}
            className="h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_proposal_concept_bubble.png"
            alt="Concept bubble of the poster proposal"
            width={900}
            height={300}
            className="h-auto"
          />
        </div>
        <p className="whitespace-pre-line">
          To me, it&apos;s a high-class show, almost like a magazine or comic book cover. That&apos;s why I chose a
          serif typeface for the main headline and a simple sans-serif font for the rest of the text. This leaves room
          for the central illustrations to speak for themselves. I also concentrated the colors in the illustrations
          while keeping the background grayish white. Winter can be snowy white, but the show itself has to be colorful.
        </p>
        <p className="whitespace-pre-line">
          I also wanted to break away from my usual design approach. Instead of making people curious because they feel
          confused and don&apos;t understand what they&apos;re looking at, I want them to feel curious and drawn in by
          the visuals, making them want to come closer and discover what the event is about. There&apos;s a big
          difference between these two experiences. Simply put, I wanted to make the design more accessible and
          inviting, rather than sticking to my usual style of keeping people at a distance with visuals that make them
          think but don&apos;t necessarily convey the excitement and spirit of the show.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_proposal_style_guide.png"
            alt="Style guide for the poster proposal"
            width={900}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <p className="whitespace-pre-line">
          I&apos;ve always loved reading comics, and I guess that influence has naturally found its way into my work over
          time. Japanese manga has also had a big impact on my style, especially the delicate linework and occasional
          exaggerated strokes. These are things that can only really happen through imagination, since in real life,
          things usually can&apos;t bend or distort in quite the same way.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_poster_mockup_1.png"
            alt="Winter Show Poster Mockup 1"
            width={900}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_poster_mockup_2.png"
            alt="Winter Show Poster Mockup 2"
            width={900}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_poster_mockup_3.png"
            alt="Winter Show Poster Mockup 3"
            width={900}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/wintershow_poster_2026/winter_show_poster_mockup_4.png"
            alt="Winter Show Poster Mockup 4"
            width={900}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default KicksCrew;
