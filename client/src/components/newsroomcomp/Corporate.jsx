import { corporate } from "../../utils/newsroom/Corporate/Corporate";
import { NewsCard } from "./NewsCard";

export const Corporate = () => {
  return (
    <div className="h-full p-10 bg-black contain text-white mt-10">
      <div className="w-full p-5">
        <NewsCard data={corporate} />
      </div>
    </div>
  );
};
