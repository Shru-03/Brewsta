import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      data-aos="zoom-in"
      className="relative mt-20 w-full h-[auto] sm:h-[600px] flex items-center justify-center  px-6 md:px-20 overflow-hidden"
    >
      {/*<div className="absolute inset-0 bg-[url(/bg2.png)] bg-contain bg-center opacity-30 z-0" />*/}
      <div className="max-w-7xl w-full flex flex-col-reverse pt-20 md:flex-row items-center justify-between gap-10">
        <div className="text-white flex-1 z-10">
          <h1 className="heading text-4xl sm:text-5xl font-playfair font-bold leading-tight mb-6">
            Brewed with Passion. <br /> Served with Soul.
          </h1>
          <p className="text-gray-400 text-lg max-w-md mb-6">
            Discover the aroma of handpicked beans roasted to perfection.
            Welcome to the art of coffee at Brewsta .
          </p>
          <button
            onClick={() => navigate("/brew")}
            className="bg-[#987555] hover:bg-[#b49a6f] transition-all duration-300 px-6 py-3 rounded-lg text-black font-semibold text-sm cursor-pointer transform hover:scale-110"
          >
            Explore Collection
          </button>
        </div>

        <div className="flex-1 z-10 flex justify-center items-center">
          <img
            src="/img2.png"
            alt="Coffee Cup"
            className="w-[300px] md:w-[600px] drop-shadow-xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
