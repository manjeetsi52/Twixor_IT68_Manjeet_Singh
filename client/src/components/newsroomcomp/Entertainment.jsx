import { useState } from "react";
import { NewsCard } from "./NewsCard";
import { allEnt } from "../../utils/newsroom/EntertainmentNews/All";
import { english } from "../../utils/newsroom/EntertainmentNews/English";
import { digital } from "../../utils/newsroom/EntertainmentNews/Digital";
import { hindi } from "../../utils/newsroom/EntertainmentNews/Hindi";
import { regional } from "../../utils/newsroom/EntertainmentNews/Regional";


export const Entertainment = () => {
  const [category, setCategory] = useState("all");

  const categoryMap = {
    all: allEnt,
    english: english,
    digital: digital,
    hindi: hindi,
    regional: regional,
  };
  
  const dataToShow = categoryMap[category] || allEnt;

  return (
    <div className="h-full p-10 bg-black contain text-white">
      
      <span>Category</span>

      <select
        name="entertainment"
        id="entertainment"
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-xl p-1 ml-2 mb-5 bg-white text-black font-semibold cursor-pointer"
      >
        <option value="all">All Entertainment</option>
        <option value="english">English</option>
        <option value="digital">Digital</option>
        <option value="hindi">Hindi</option>
        <option value="regional">Regional</option>
      </select>

      <div className="w-full p-5">
        <NewsCard data={dataToShow} />
      </div>

    </div>
  );
};