import { LeaderCard } from "../components/home/LeaderCard";

export const About = () => {
  return (
    <>
      <section className=" bg-black mt-20">
        <div className=" text-white">
          <div className="bg-white p-20 text-black grid grid-cols-2 gap-5">
            <div className="flex flex-col justify-center gap-3">
              <h1 className="font-bold text-2xl">Company Overview</h1>
              <p>
                Perched firmly at the nucleus of spellbinding content and
                innovative technology, JioStar is a leading global media &
                entertainment company that is reimagining the way audiences
                consume entertainment and sports. Its television network and
                streaming service together reach more than 750 million viewers
                every week, igniting the dreams and aspirations of hundreds of
                million people across geographies.
              </p>
            </div>
            <div>
              <video
                className="w-150 rounded-2xl"
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
          </div>
          <div className="contain">
            <h1 className="text-4xl font-bold p-5">Meet Our Leaders</h1>
            <LeaderCard />
          </div>
        </div>
      </section>
    </>
  );
};
