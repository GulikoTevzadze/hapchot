import CustomLines from "../components/CustomLines";
import BrasserieCoverSection from "../section/BrasserieCoverSection";
import BrasserieHistory from "../section/BrasserieHistory";
import BrasserieMachineSection from "../section/BrasseriemMachine";
import BrasserieSection from "../section/BrasserieSection";

export default function LaBrasseriePage() {
  return (
    <>
      <BrasserieCoverSection />
      <CustomLines />
      <BrasserieHistory />
      <BrasserieSection />
      <BrasserieMachineSection/> 
    </>
  )
}