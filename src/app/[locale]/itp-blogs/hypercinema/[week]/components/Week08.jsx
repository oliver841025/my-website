import Link from 'next/link';

const Week08 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 08: Beef, Fish, Potato</h3>
      <p className="mt-4 aspect-[2/1] w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube-nocookie.com/embed/xx2Yl9fqTfg"
          title="Beef, Fish, Potato"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </p>
      <p className="mt-4">
        This is a story about how the food in my fridge taught me a lesson. I&apos;ve been really busy over the past few
        weeks and haven&apos;t had time to cook. Some of the food I left in the fridge to thaw ended up going bad, and I
        felt pretty guilty about it. So I made this little video combining 2D animation with live-action footage.
      </p>
      <p className="mt-4">
        I&apos;ve always wanted to try 2D animation. I wanted to explore what animation could do that live-action alone
        couldn&apos;t. Throughout the process, I kept simplifying my storyboard and spent more time figuring out how to
        make the story clear to the audience without making it feel too cliché, while still keeping my own imagination
        and personality in it.
      </p>
      <p className="mt-4">
        I kept asking myself, “If I remove this scene, can the audience still understand the story as a whole?” If the
        answer was yes, I would cut it. That became my way of simplifying the storyboard, especially because I knew I
        was short on time, and the pacing of animation is important too.
      </p>
      <p className="mt-4">
        I also did all the sound effects and voice acting myself — every sound came from my own voice. This project made
        me realize even more that the story is everything. Technical tricks and visual effects should only come after
        I&apos;m sure the storyline is clear and easy for the audience to understand.
      </p>
    </main>
  );
};

export default Week08;
