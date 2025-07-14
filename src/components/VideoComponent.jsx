const videoData = [
  {
    src: "/p1.mp4",
    title: "Picking the Perfect Beans",
    desc: "Handpicked from the finest farms for the richest flavor.",
  },
  {
    src: "/p2.mp4",
    title: "Grinding to Perfection",
    desc: "Precision-ground to extract every ounce of aroma.",
  },
  {
    src: "/p3.mp4",
    title: "Brewing the Magic",
    desc: "Artfully brewed to awaken your senses.",
  },
];

const VideoComponent = () => {
  return (
    <section className="backdrop-blur-md bg-white/10 border border-white/10 shadow-md shadow-black/10 py-10 px-4 sm:px-8 md:px-16 xl:px-32">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="tracking-wider text-3xl md:text-4xl uppercase text-white">
          Bean to Brew
        </h2>
        <p className="text-gray-400 mt-2">
          From harvest to cup ~ the art behind every sip.
        </p>
        <div className="mx-auto mt-4 w-[120px] h-[1px] bg-white" />
      </div>

      {/* Videos */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
        {videoData.map((video, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="relative w-full h-[300px] sm:h-[500px] md:w-1/3 aspect-video max-w-md overflow-hidden rounded-xl border border-gray-500/50 shadow-lg"
          >
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-6">
              <h2 className="text-white text-lg font-semibold">
                {video.title}
              </h2>
              <p className="text-gray-200 text-sm">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoComponent;
