import Activities from "@/components/Activities";
import MainMapConfigs from "@/components/Map/MainMapConfigs";

import TourSlider from "@/components/TourSlider";

export default function Home() {
  return (
    <>
      <MainMapConfigs>
        {/** <MainSlider />**/}
        <div className="my-10">
          <TourSlider />
        </div>

        <Activities />
      </MainMapConfigs>
    </>
  );
}
