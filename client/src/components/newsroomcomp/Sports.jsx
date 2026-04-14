import { useState } from "react";
import { sportsNewsData } from "../../utils/newsroom/Sports/AllSports";
import { ipl } from "../../utils/newsroom/Sports/IPL";
import { NewsCard } from "./NewsCard";

export const Sports = () => {
  const [category, setCategory] = useState("all");

  const categoryMap = {
    all: sportsNewsData,
    ipl: ipl,

  };
  
  const dataToShow = categoryMap[category] || allEnt;

  return (
    <div className="h-full p-10 bg-black contain text-white">
      
      <span>Category</span>

      <select
        name="sports"
        id="sports"
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-xl p-1 ml-2 mb-5 bg-white text-black font-semibold cursor-pointer"
      >
        <option value="all">All Sports</option>
        <option value="ipl">IPL</option>

      </select>

      <div className="w-full p-5">
        <NewsCard data={dataToShow} />
      </div>

    </div>
  );
};