export const ChannelCard = ({ data }) => {
  return (
    <div className="contain flex gap-5 flex-wrap justify-center mt-10">
      {data.map((elem, index) => (
        <div
          key={index}
        >
          <div className="bg-white w-40 h-24 rounded-xl flex items-center justify-center border p-2 cursor-pointer">
            <img
              src={elem.logo_url}
              alt="channel logo"
              className="hover:scale-103 transition"
            />
          </div>
        </div>
      ))}
    </div>
  );
};