import {
  FaCoffee,
  FaRocket,
  FaSun,
  FaFireAlt,
  FaMusic,
  FaLightbulb,
} from "react-icons/fa";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { TbCoffee, TbCoffeeOff } from "react-icons/tb";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";

const InfiniteScroller = () => {
  const funPhrases = [
    { icon: <FaCoffee />, text: "Espresso Yourself" },
    { icon: <TbCoffee />, text: "Stay Grounded" },
    { icon: <FaRocket />, text: "Caffeine Loading..." },
    { icon: <FaSun />, text: "Brew-tiful Morning" },
    { icon: <BiSolidCoffeeBean />, text: "Focus Fueled by Coffee" },
    { icon: <TbCoffeeOff />, text: "Sip Happens" },
    { icon: <GiCoffeeBeans />, text: "Bean There, Loved That" },
    { icon: <FaFireAlt />, text: "Hot Cup, Cool You" },
    { icon: <FaMusic />, text: "Sippin’ and Vibin’" },
    { icon: <FaLightbulb />, text: "Ideas Start Here" },
  ];

  return (
    <div className="my-10 backdrop-blur-md bg-white/10 overflow-hidden py-6">
      <div className="animate-marquee whitespace-nowrap">
        {[...funPhrases, ...funPhrases].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 italic text-[#d0b185] text-sm mx-6"
          >
            <span className="text-base">{item.icon}</span> {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
