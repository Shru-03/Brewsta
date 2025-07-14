import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import SkeletonCard from "./SkeletonCard";

const CardListing = () => {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setAllItems(data);
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (category === "All") {
      setItems(allItems);
    } else {
      setItems(allItems.filter((item) => item.available));
    }
  }, [category, allItems]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[url('/bg.webp')] bg-cover bg-center h-74 w-full" />
      <section className=" overflow-hidden rounded-xl mb-28 mt-[-9rem] shadow-lg flex flex-col justify-center items-center bg-[#1C1D1F] py-12 px-6 md:px-25">
        <div className="relative flex flex-col items-center text-center px-4">
          <img
            className="absolute top-[-1rem] right-[-6rem] z-0  opacity-90 pointer-events-none"
            src="/vector.svg"
            alt="decorative vector"
          />

          <h1 className="z-10 mt-8 text-white text-3xl mb-3">Our Collection</h1>
          <p className="z-10 text-gray-400 text-sm w-[250px] sm:w-[400px]">
            Introducing our coffee collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="flex gap-4 my-8">
          <button
            onClick={() => setCategory("All")}
            className={`${
              category === "All" ? "bg-[#6E757D]" : "bg-transparent"
            } px-4 py-1 rounded text-white text-[14px] font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}
          >
            All Products
          </button>
          <button
            onClick={() => setCategory("Available")}
            className={`${
              category === "Available" ? "bg-[#6E757D]" : "bg-transparent"
            } px-4 py-1 rounded text-white text-[14px] font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}
          >
            Available Now
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8 sm:grid-cols-2">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : items.map((item) => <CardComponent key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  );
};

export default CardListing;
