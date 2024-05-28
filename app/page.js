import AboutSrilanka from "@/components/AboutSrilanka";
import AboutUs from "@/components/AboutUs";
import Activities from "@/components/Activities";
import MainTab from "@/components/MainTab";
import MainMapConfigs from "@/components/Map/PointToPointMap";

import TourSlider from "@/components/TourSlider";

export default function Home() {
  return (
    <>
      <MainTab />
      {/** <MainSlider />**/}

      <div className="my-10">
        <TourSlider />
      </div>

      <div className="xs:my-20 xxs:my-10 my-5">
        <AboutSrilanka />
      </div>

      <div className="my-5">
        <AboutUs />
      </div>

      <Activities />
    </>
  );
}
