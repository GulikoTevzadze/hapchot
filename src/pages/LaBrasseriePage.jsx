import CustomLines from "../components/CustomLines";
import BrasserieCoverSection from "../section/BrasserieCoverSection";
import BrasserieHistory from "../section/BrasserieHistory";
import BrasserieMachineSection from "../section/BrasseriemMachine";
import BrasserieSection from "../section/BrasserieSection";
import Brewing from "../section/Brewing";
import BrewingPhotoSwiper from "../section/brewingPhotoSwiper";
import ProductsSwiper from "../section/ProductsSwiper";

export default function LaBrasseriePage() {
  return (
    <>
      <BrasserieCoverSection />
      <CustomLines />
      <BrasserieHistory />
      <BrasserieSection />
      <BrasserieMachineSection />
      <CustomLines />
      <Brewing/>
      <BrewingPhotoSwiper />
      <ProductsSwiper />
    </>
  )
}