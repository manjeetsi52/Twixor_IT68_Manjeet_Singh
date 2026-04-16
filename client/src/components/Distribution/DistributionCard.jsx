export const DistributionCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h2>
        <p className="text-2xl font-semibold  mb-3">
          Rs.{data.price}/- Per Month
        </p>
        <div className="text-sm text-gray-600 mb-4">
          <p>📺 {data.size} Channels</p>
          <p>⚡ {data.weight} MB Data</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2  text-black rounded-md hover:bg-fuchsia-600 transition cursor-pointer">
            More Details
          </button>
          <button className="px-4 py-2 border  rounded-md hover:bg-fuchsia-50 transition cursor-pointer">
            Add to Compare
          </button>
        </div>
      </div>
    </div>
  );
};