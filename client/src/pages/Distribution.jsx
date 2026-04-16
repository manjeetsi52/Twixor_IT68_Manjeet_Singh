import { useState } from "react";
import { distributionData } from "../utils/distribution/DistributionData";
import {DistributionCard} from "../components/Distribution/DistributionCard"

export const Distribution = () => {
  const [active, setActive] = useState("Hindi");
  
  // Find the active tab object and get its packs
  const activeTab = distributionData.tabs.find(tab => tab.name === active);
  const activePacks = activeTab ? activeTab.packs : [];

  return (
    <>
      <section className="mt-20 font-poppins">
        <div>
          <img src="/images/distribution/dist.jpg" alt="" className="w-full" />
        </div>
        {/* tabs */}
        <div className=" contain flex flex-col gap-5 mt-10 items-center">
          <h1 className="font-bold text-3xl">Choose your Pack</h1>
          <div>
            <div className="flex gap-5 flex-wrap">
              {distributionData.tabs.map((elem) => {
                return (
                  <button
                    key={elem.id}
                    onClick={() => setActive(elem.name)}
                    className={`px-2 py-1 transition cursor-pointer
                    ${
                      active === elem.name
                        ? " text-fuchsia-500 border-b font-bold"
                        : " text-black font-semibold"
                    }`}
                  >
                    {elem.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Render Distribution Cards */}
        <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {activePacks.map((pack) => (
            <DistributionCard key={pack.id} data={pack} />
          ))}
        </div>
      </section>
    </>
  );
};