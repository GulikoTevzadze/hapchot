import history from '../assets/brasserie-photo/brasserie-histories-photo.webp'
import CustomLines from '../components/CustomLines'
export default function BrasserieHistory() {
  return (
    <section className="brasserie-history-setion">
      <div className="brasserie-history-setion-photo">
        <img src={history} alt="" />
      </div>
      <div className="brasserie-history-setion-item">
        <h3>
          <span>Notre </span>
          <span>histoire </span>
        </h3>
        <p>Depuis 2014, du concassage du malt jusqu’à la mise en bouteille, nos bières prennent vie grâce à  une équipe de passionnés.</p>
        <p>Notre brasserie représente également un laboratoire où nos brasseurs laissent s’exprimer leur créativité, élaborant ainsi des recettes parmi les plus originales et délicieuses.</p>
        <p>Convaincus que les recettes de bières novatrices méritent d’être appréciées par tous, nous nous engageons à rendre la bière craft accessible et à faire découvrir cet univers extraordinaire au plus grand nombre.</p>
      </div>
    </section>
  )
}