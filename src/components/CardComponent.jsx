const CardComponent = ({ item }) => {
  return (
    <div className="relative flex flex-col gap-2 mb-4">
      <img
        className="rounded-md object-cover"
        src={item.image}
        alt="coffee image"
      />
      <div className="flex justify-between">
        <p className="text-white font-semibold">{item.name}</p>
        <span className="bg-[#BDE3CC] rounded text-[13px] font-semibold px-2">
          {item.price}
        </span>
      </div>
      {item.rating > 0 ? (
        <div className="flex justify-between ">
          <div className="flex items-center text-[14px] text-white gap-1">
            <img src="/Star_fill.svg" /> {item.rating}
            <span className="text-gray-400 text-[14px]">
              ({item.votes} votes)
            </span>
          </div>
          {!item.available && (
            <span className="text-red-400 text-[14px]">Sold out</span>
          )}
        </div>
      ) : (
        <div className="flex justify-between  ">
          <div className="flex items-center gap-1">
            <img src="/Star.svg" />

            <span className="text-gray-400 text-[14px]">
              No votes available
            </span>
          </div>
          {!item.available && (
            <span className="text-red-400 text-[14px]">Sold out</span>
          )}
        </div>
      )}
      {item.popular && (
        <span className="absolute top-2 left-2 bg-[#F5C768] text-[12px] font-semibold px-3 py-[2px] rounded-xl">
          Popular
        </span>
      )}
    </div>
  );
};

export default CardComponent;
