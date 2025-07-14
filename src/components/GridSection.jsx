import React from "react";
import { useNavigate } from "react-router-dom";

const GridSection = () => {
  const navigate = useNavigate();

  const contentBox =
    "flex flex-col items-center justify-center gap-3 bg-[#987555] w-full h-full p-6";
  const imageBox =
    "w-full h-full bg-cover bg-center min-h-[250px] aspect-[4/3]";
  const buttonStyle =
    "bg-black text-white py-2 px-4 text-[12px] uppercase cursor-pointer";

  return (
    <section className="my-20 px-4">
      {/* Heading */}
      <div>
        <h2 className="tracking-wider text-center text-3xl md:text-4xl uppercase text-white">
          Our Best Sellers
        </h2>
        <div className="mx-auto mt-2 w-[120px] h-[1px] bg-white" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto my-10">
        {/* Item 1 */}
        <div
          data-aos="slide-right"
          className={`${imageBox} bg-[url(/macchiato.jpg)]`}
        />
        <div className={contentBox}>
          <h2 className="text-xl font-bold text-white text-center">
            Classic Espresso Shot
          </h2>
          <div className="w-[70px] h-[1px] bg-white my-1" />
          <p className="text-white text-center text-sm">
            Bold, intense, and smooth—our traditional espresso is the heart of
            every true coffee lover’s ritual.
          </p>
          <button onClick={() => navigate("/brew")} className={buttonStyle}>
            Shop Now
          </button>
        </div>

        {/* Item 2 */}
        <div
          data-aos="slide-left"
          className={`${imageBox} bg-[url(/frappe.jpg)]`}
        />
        <div className={contentBox}>
          <h2 className="text-xl font-bold text-white text-center">
            Salted Caramel Macchiato
          </h2>
          <div className="w-[70px] h-[1px] bg-white my-1" />
          <p className="text-white text-center text-sm">
            A luxurious blend of velvety steamed milk, rich espresso, and a
            drizzle of buttery caramel.
          </p>
          <button onClick={() => navigate("/brew")} className={buttonStyle}>
            Shop Now
          </button>
        </div>

        {/* Item 3 */}
        <div
          data-aos="slide-up"
          className={`${imageBox} bg-[url(/espresso.webp)]`}
        />
        <div className={contentBox}>
          <h2 className="text-xl font-bold text-white text-center">
            Choco Frappe Delight
          </h2>
          <div className="w-[70px] h-[1px] bg-white my-1" />
          <p className="text-white text-center text-sm">
            A creamy frozen blend of chocolate, coffee, and ice, topped with
            whipped cream and chocolate syrup.
          </p>
          <button onClick={() => navigate("/brew")} className={buttonStyle}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
