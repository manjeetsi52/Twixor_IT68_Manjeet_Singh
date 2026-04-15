import { useState } from "react";
import { ChannelCard } from "./ChannelCard";

import { ymeChannel } from "../../utils/channels/EnglishEnt";
import { kidsChannel } from "../../utils/channels/Kids";
import { studioEntChannel } from "../../utils/channels/StudioAndEnt";
import { infotainmentChannel } from "../../utils/channels/Infainment";
import { hindiChannel } from "../../utils/channels/Entertainment";
import { regionalChannel } from "../../utils/channels/Regional";

const CHANNEL_TABS = [
  { id: "hindi", label: "Hindi", data: hindiChannel },
  { id: "regional", label: "Regional", data: regionalChannel },
  { id: "yme", label: "Youth Music English", data: ymeChannel },
  { id: "kids", label: "Kids", data: kidsChannel },
  { id: "studio", label: "Studio & International", data: studioEntChannel },
  { id: "infotainment", label: "Infotainment", data: infotainmentChannel },
];

export const EntertainmentChannel = () => {
  const [active, setActive] = useState("hindi");

  const activeTab = CHANNEL_TABS.find((tab) => tab.id === active);

  return (
    <div className="font-semibold border mt-5 p-4" id="entChannel">
      <div className="flex justify-center gap-4 flex-wrap">
        {CHANNEL_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-1 rounded-3xl border-2 transition-all duration-200 cursor-pointer
              ${
                active === tab.id
                  ? "bg-fuchsia-500 text-white border-white"
                  : "bg-white text-black border-gray-300 hover:border-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        <ChannelCard data={activeTab?.data || []} />
      </div>
    </div>
  );
};
