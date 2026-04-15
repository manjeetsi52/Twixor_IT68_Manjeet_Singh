import { consumerChannel } from "../../utils/channels/Consumer";
import { ChannelCard } from "./ChannelCard";

export const Consumer = () => {
  return (
    < >
      <ChannelCard data={consumerChannel} />
    </>
  );
};
