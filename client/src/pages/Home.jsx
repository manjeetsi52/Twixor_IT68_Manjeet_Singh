import { NavLink } from "react-router-dom";
import { leaderData, portfolioData } from "../utils/Data";
import { FaGreaterThan } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      {/* video */}
      <div>
        <video
          className="w-full"
          controls
          preload="auto"
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          muted
          autoPlay
          playsInline
          title="JioStar, Promotional Video"
        >
          <source
            src="https://cdn.jiostar.com/jiostar/wp-content/uploads/2025/07/Jio-Star-AV-2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* info  */}
      <div className="w-full text-white bg-black py-8">
        <div className="contain">
          <h1 className="text-4xl font-bold">Who are we?</h1>
          <p className="pt-3">
            Perched firmly at the nucleus of spellbinding content and innovative
            technology, JioStar is a leading global media & entertainment
            company that is reimagining the way audiences consume entertainment
            and sports. Its television network and streaming service together
            reach more than 750 million viewers every week, igniting the dreams
            and aspirations of hundreds of million people across geographies.
          </p>
          <div className="mt-10 py-1 px-3 rounded bg-[#d50e8d] font-semibold inline-block ">
            <NavLink to={"/"}>Know More</NavLink>
          </div>
        </div>
      </div>

      {/* leaders */}
      <div className="contain p-5 flex flex-col gap-7 items-center">
        <h2 className="text-3xl font-bold">Meet our leaders</h2>
        <div className="flex gap-5">
          {leaderData.map((elem) => {
            const { name, title, image_url } = elem;
            return (
              <div key={name} className="w-72">
                <div
                  className="h-80 rounded-2xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${image_url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm">{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-1 px-3 rounded bg-[#d50e8d] font-semibold inline-block text-white ">
          <NavLink>Know More</NavLink>
        </div>
      </div>

      {/* newsroom */}
      <div className="bg-black text-white flex flex-col items-center gap-2 p-10 ">
        <h2 className="text-3xl font-bold">Newsroom</h2>
        <div className="w-full relative h-140">
          <div className="absolute top-7 left-35">
            <img
              src="/images/bannerimage.jpeg"
              alt=""
              className="w-153 rounded-xl "
            />
          </div>
          <div className="w-160 absolute p-5 bottom-0 right-50 flex flex-col gap-4  bg-[rgba(0,0,0,.4)] rounded-2xl">
            <h2 className="text-4xl font-bold">
              JioStar’s Powerplay: A Blockbuster Sponsor Start for TATA IPL 2026
            </h2>
            <p>26 March 2026</p>
            <p>
              ~ Spanning diverse categories from AI, Consumer Electronics, EV,
              FMCG and more, the TATA IPL 2026 sponsor line-up reflects the
              unmatched advertising power of India’s largest unified sports
              platform ~ 26th March 2026, Mumbai: JioStar, the official
              broadcaster and streaming partner for TATA IPL, today announced a
              robust roster of 27 sponsors...
            </p>
            <div >
              <NavLink>
             <img src="https://www.jiostar.com/wp-content/themes/jio-star/assets/img/nextpagechevron1ada.png" alt="Go to newsroom Link" className="w-10"/>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* portfolio */}
      <div className="flex flex-col items-center mt-5 gap-10 py-10 mb-5">
        <h2 className="text-3xl font-bold ">Portfolio</h2>
        <div className="flex  justify-center gap-5 contain">
          {portfolioData.map((elem, idx) => {
            const { image_url } = elem;
            return (
              <div key={idx}>
                <img src={image_url} alt="" className="w-104 rounded-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </> 
  );
};
