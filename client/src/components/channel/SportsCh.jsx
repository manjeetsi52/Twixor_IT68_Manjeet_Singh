import { sportsChDataChannel } from "../../utils/channels/Sports";
import { ChannelCard } from "./ChannelCard";

export const SportsChannel = () => {
  return (
    <div  id="sportsChannel">
      <ChannelCard data={sportsChDataChannel} />
    </div>
  );
};
