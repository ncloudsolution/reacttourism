import AbooutSrilanka from "@/components/AboutSrilanka";
import AboutUs from "@/components/AboutUs";
import Activities from "@/components/Activities";
import MainSlider from "@/components/MainSlider";
import MainMapConfigs from "@/components/Map/MainMapConfigs";
import Packages from "./packages/page";
import AbsoluteFooter from "@/components/AbsoluteFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MainMapConfigs>
        {/** <MainSlider />**/}
        <AboutUs />
        <AbooutSrilanka />
        <Activities />
        <Packages />
        <Footer />
      </MainMapConfigs>
    </>
  );
}
