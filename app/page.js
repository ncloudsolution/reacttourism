import AbooutSrilanka from "@/components/AboutSrilanka";
import AboutUs from "@/components/AboutUs";
import Activities from "@/components/Activities";
import MainSlider from "@/components/MainSlider";
import MainMapConfigs from "@/components/Map/MainMapConfigs";

import AbsoluteFooter from "@/components/AbsoluteFooter";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import TourSlider from "@/components/TourSlider";

export default function Home() {
  return (
    <>
      {/** <MainMapConfigs> **/}
      {/** <MainSlider />**/}
      <TourSlider />
      <AboutUs />
      <AbooutSrilanka />
      <Activities />
      <Packages />
      {/** </MainMapConfigs> **/}
    </>
  );
}
