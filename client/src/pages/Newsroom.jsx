import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Entertainment } from "../components/newsroomcomp/Entertainment";
import { Sports } from "../components/newsroomcomp/Sports";
import { Corporate } from "../components/newsroomcomp/Corporate";

const items = [
  "All Logos",
  "All Spokespersons",
  "All Press Release",
  "All Promos",
];

export const Newsroom = () => {
  const [active, setActive] = useState("Entertainment");
  const componentMap = {
    Entertainment: <Entertainment />,
    Sports: <Sports />,
    Corporate: <Corporate />,
  };

  return (
    <>
      <section className="bg-black font-poppins">
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
        <div className="text-white " id="press">
          <div className="w-full flex justify-center ">
            <ul className="flex gap-5 border-3 p-2 bg-fuchsia-600 rounded-lg m-[-1.5rem] border-black font-semibold px-5 mb-3">
              {["Entertainment", "Sports", "Corporate"].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActive(tab)}
                    className={`cursor-pointer px-3 py-1 rounded ${
                      active === tab ? "border-2 border-white" : "text-white"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
            {/* E.S.C */}
            {componentMap[active]}
        </div>

        {/* media toolkit */}
        <div className="bg-white p-10 flex flex-col gap-5 " id="media">
          <h2 className="text-2xl font-semibold mx-auto">Media Toolkit</h2>
          <div className="contain grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {items.map((item) => (
              <Link
                key={item}
                to=""
                className="bg-black text-white flex items-center justify-center h-32 rounded-lg hover:bg-gray-800 transition"
              >
                <p>{item}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
