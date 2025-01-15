import BrewingSwiper from "../components/BrewingSwiper";
import { brasserieSwiper } from "../data/dummyData";

export default function Brewing() {
  return (
    <section className="brewing">
      <h3>L’Art du Brassage</h3>
        <BrewingSwiper />
    </section>
  )
}