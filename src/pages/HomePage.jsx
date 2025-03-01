import HoreSection from "../section/HeroSection";
import UniverseSection from "../section/UniverseSection";
import HomeSwiper from "../section/HomeSwiper";
import BrasserieSection from "../section/BrasserieSection";
import ColorLInes from "../components/ColorLInes";
// import FollowSection from "../section/FollowSection";

export default function HomePage() {
  return (
    <>
      <HoreSection />
      <ColorLInes />
      <UniverseSection />
      <HomeSwiper />
      <BrasserieSection />
      {/* <FollowSection /> */}
    </>

  )
}