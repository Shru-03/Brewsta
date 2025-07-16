import React, { useState, useEffect, useRef } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";

const items = [
  {
    id: 1,
    label: "Cold Coffee",
    image: "/coldcoffee.png",
    description: "Chilled and refreshing, served over ice.",
  },
  {
    id: 2,
    label: "Latte",
    image: "/latte.webp",
    description:
      "Espresso blended with steamed milk and a light layer of foam.",
  },
  {
    id: 3,
    label: "Matcha Latte",
    image: "/matcha.webp",
    description: "Green tea meets milk for a creamy antioxidant-rich brew.",
  },
  {
    id: 4,
    label: "Mocha",
    image: "/mocha.webp",
    description:
      "Espresso, chocolate, and steamed milk in one indulgent drink.",
  },
  {
    id: 5,
    label: "Macchiato",
    image: "/macchiato.png",
    description: "Espresso with a touch of foamed milk — bold yet smooth.",
  },
];

const CoffeeScroller = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [radius, setRadius] = useState(370);
  const intervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const arcDegrees = 210;

  const updateRadius = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setRadius(160); // small screens (mobile)
    } else if (width < 1024) {
      setRadius(280); // medium screens (tablet)
    } else {
      setRadius(370); // large screens
    }
  };
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  useEffect(() => {
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const rotateLeft = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const rotateRight = () => setActiveIndex((prev) => (prev + 1) % items.length);

  return (
    <section className="mt-20">
      <div>
        <h2 className="tracking-wider text-center text-3xl md:text-4xl uppercase text-white">
          Explore More Flavours
        </h2>
        <div className="mx-auto mt-2 w-[120px] h-[1px] bg-white" />
      </div>
      <div className="relative overflow-hidden pt-70 sm:pt-150 flex flex-col items-center justify-center h-[300px] sm:h-[550px] w-full">
        <div className="relative w-full max-w-[500px] h-[250px]">
          {items.map((item, index) => {
            const angleOffset = (arcDegrees / (items.length - 1)) * activeIndex;
            const angle =
              (arcDegrees / (items.length - 1)) * index - 90 - angleOffset;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                className={`absolute flex items-center justify-center transition-transform duration-500 ${
                  isActive ? "scale-110" : "scale-90 opacity-70"
                }`}
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-[300px] h-auto"
                />
              </div>
            );
          })}

          {/* Navigation */}
          <button
            onClick={rotateLeft}
            className="absolute left-[-40px] bottom-2 transform -translate-y-1/2 text-white text-2xl"
          >
            <CgArrowLeft />
          </button>
          <button
            onClick={rotateRight}
            className="absolute right-[-40px] bottom-2 transform -translate-y-1/2 text-white text-2xl"
          >
            <CgArrowRight />
          </button>
        </div>

        {/* Active Details */}
        <div className="absolute text-center sm:bottom-20 text-white">
          <h2 className="text-2xl font-bold">{items[activeIndex].label}</h2>
          <p className="text-sm opacity-80">{items[activeIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CoffeeScroller;
