import PhotoFigure from '@/components/PhotoFigure';

const Week04 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 05: Midterm Project — Crying Statue</h3>
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_05/crying_statue.jpg"
        alt="crying statue"
        caption="crying statue"
      />
      <p className="mt-4">A statue that bleeds from their eyes when it senses something in front of it.</p>
      <p className="mt-4">
        Group project, a rough concept combining Halloween: when someone stands within a certain distance of the statue
        and makes a specific hand gesture, the statue starts crying bloody tears.
      </p>
    </main>
  );
};

export default Week04;
