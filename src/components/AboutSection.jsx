import { forwardRef } from "react";

const AboutSection = forwardRef((prop, ref) => {
  return (
    <section
      ref={ref}
      data-aos="zoom-in"
      className="mt-20 w-full h-auto lg:h-[750px] px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-10"
    >
      {/* Text Section */}
      <div data-aos="slide-right" className="text-white z-10 max-w-xl">
        <div className="flex flex-col items-start mb-6">
          <h2 className="tracking-wider text-center md:text-left text-3xl md:text-4xl uppercase">
            About Brewsta
          </h2>
          <div className="mt-2 w-[120px] h-[1px] bg-white" />
        </div>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          At Brewsta, coffee is more than just a drink—it’s a craft.
          <br />
          Born from a love for bold flavors and slow moments, we bring together
          handpicked beans, small-batch roasting, and barista-level brewing to
          deliver an experience that awakens your senses.
          <br />
          From sourcing the finest beans around the world to perfecting each cup
          that lands in your hands, every step of our process is intentional.
          Whether you’re grabbing your daily dose or sipping slowly on a Sunday,
          Brewsta is here to elevate your coffee ritual.
        </p>
      </div>

      {/* Image Section */}
      <div
        data-aos="zoom-in"
        className="relative mt-60 flex items-center justify-center w-full lg:w-auto"
      >
        {/* Main image */}
        <img
          src="/ab1.webp"
          alt="Coffee Cup"
          className="w-[280px] ml-15     lg:w-[400px] h-[240px] lg:h-[350px] rounded-xl border border-white/30 drop-shadow-xl z-10 relative"
        />

        {/* Overlapping image */}
        <img
          src="/ab2.jpg"
          alt="Coffee Cup"
          className="absolute left-[1rem] lg:left-[-12rem] bottom-[12rem] lg:bottom-[16rem] w-[220px] lg:w-[300px] h-[240px] lg:h-[330px] rounded-xl border border-white/30 drop-shadow-xl z-20"
        />
      </div>
    </section>
  );
});

export default AboutSection;
