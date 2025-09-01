import Image from "next/image";

const Mythomania = () => {
  return (
      <div className="relative w-full flex items-center pt-32 sm:pt-30">
        <div className="absolute left-0 top-4 text-sm font-semibold">
          <p>3D animation Mythomania - poster</p>
          <p>Illustrator</p>
        </div>
        <div className="mx-auto">
          <div className="drop-shadow-[8px_8px_12px_rgba(0,0,0,0.35)]">
            <Image src="/mythomania/mythomania.avif" alt="mythomania" width={300} height={300} />
          </div>
        </div>
      </div>
    );
}

export default Mythomania
