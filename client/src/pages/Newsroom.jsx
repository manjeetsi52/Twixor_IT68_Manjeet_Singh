import { NavLink } from "react-router-dom";

export const Newsroom = () => {
  return (
    <>
      <section>
        <div className="text-white">
          <img src="/images/bannerimage.jpeg" alt="image" />
          <div className="w-96 absolute p-5 right-50 top-120 flex flex-col gap-2  bg-[rgba(0,0,0,.4)] rounded-2xl">
            <h2 className="text-md font-bold">
              JioStar’s Powerplay: A Blockbuster Sponsor Start for TATA IPL 2026
            </h2>
            <p className="text-xs">26 March 2026</p>
            <p className="text-xs">
              ~ Spanning diverse categories from AI, Consumer Electronics, EV,
              FMCG and more, the TATA IPL 2026 sponsor line-up reflects the
              unmatched advertising power of India’s largest unified sports
              platform ~ 26th March 2026, Mumbai: JioStar, the official
              broadcaster and streaming partner for TATA IPL, today announced a
              robust roster of 27 sponsors...
            </p>
          </div>
        </div>
        {/* press */}
        <div>
          <ul>
               <li>Entertainment</li>
               <li>Sports</li>
               <li>Corporate</li>
          </ul>
          <div></div>
        </div>
      </section>
    </>
  );
};
