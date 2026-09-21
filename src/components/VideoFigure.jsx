const mediaClassName = 'mx-auto mt-4 w-3/5 md:w-1/5';

const VideoFigure = ({ src, caption }) => {
  return (
    <figure className={mediaClassName}>
      <video controls preload="metadata" playsInline className="w-full">
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <figcaption className="text-gray-400">{caption}</figcaption>
    </figure>
  );
};

export default VideoFigure;
