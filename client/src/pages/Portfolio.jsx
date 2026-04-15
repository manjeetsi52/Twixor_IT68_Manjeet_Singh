import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { EntertainmentChannel } from "../components/channel/EntertainmentCh";
import { Consumer } from "../components/channel/ConsumerCh";
import { SportsChannel } from "../components/channel/SportsCh";

export const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [active, setActive] = useState("Entertainment");

  const componentMap = {
    Entertainment: <EntertainmentChannel />,
    Sports: <SportsChannel />,
    "Consumer Products": <Consumer />,
  };

  // Get tab from URL on component mount and URL changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    // Check if the tab from URL is valid
    if (tabFromUrl && componentMap[tabFromUrl]) {
      setActive(tabFromUrl);
    } else if (location.pathname === "/portfolio" && !tabFromUrl) {
      // If no tab in URL, default to Entertainment
      setSearchParams({ tab: "Entertainment" }, { replace: true });
    }
  }, [searchParams, location]);

  const handleTabChange = (tab) => {
    setActive(tab);
    // Update URL with the selected tab
    setSearchParams({ tab: tab });
  };

  return (
    <>
      <section className="mt-30 bg-black min-h-screen">
        <div className="w-full flex justify-center">
          <ul className="flex gap-5 border-3 p-2 bg-[#d50e8d] rounded-lg m-[-1.5rem] border-black font-semibold px-5 mb-3">
            {["Entertainment", "Sports", "Consumer Products"].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => handleTabChange(tab)}
                  className={`cursor-pointer px-3 py-1 rounded ${
                    active === tab
                      ? "border-2 border-white text-white"
                      : "border-2 border-transparent text-white"
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {componentMap[active]}
      </section>
    </>
  );
};
