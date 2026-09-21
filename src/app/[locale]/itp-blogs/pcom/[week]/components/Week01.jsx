import Image from 'next/image';

const photos = [
  {
    name: 'Cut wires',
    file: 'cut_wires.webp',
  },
  {
    name: 'First LED',
    file: 'first_led.webp',
  },
  {
    name: 'Team discussion',
    file: 'team_discuss.webp',
  },
];

const videos = [
  {
    name: 'Press control LED',
    file: 'press_controll_led.mp4',
  },
  {
    name: 'LED parallel circuit',
    file: 'led_parallel.mp4',
  },
  {
    name: 'LED circuit',
    file: 'leds_circuit.mp4',
  },
  {
    name: 'Multimeter test',
    file: 'multimeter_test.mp4',
  },
  {
    name: 'Potentiometer',
    file: 'potentiometer.mp4',
  },
  {
    name: 'DC motor',
    file: 'dc_motor.mp4',
  },
];

const Week01 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 01</h3>

      <p className="mt-4">
        During the first week, I familiarized myself with the names and uses of different tools and materials. I started
        with basic skills like cutting and stripping wires, then learned how to use a breadboard to build simple series
        and parallel circuits.
      </p>

      <h4 className="mt-8 text-xl font-bold">Photos</h4>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {photos.map((photo) => (
          <figure key={photo.file}>
            <Image
              src={`/pcom/week_01/${photo.file}`}
              alt={photo.name}
              width={800}
              height={600}
              className="w-full"
              unoptimized
            />
            <figcaption className="mt-2">{photo.name}</figcaption>
          </figure>
        ))}
      </div>

      <h4 className="mt-8 text-xl font-bold">Videos</h4>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <figure key={video.file}>
            <video controls preload="metadata" playsInline className="w-full">
              <source src={`/pcom/week_01/${video.file}`} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <figcaption className="mt-2">{video.name}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
};

export default Week01;
