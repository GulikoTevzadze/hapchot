import bigPhoto from "../assets/universe-photo/universe-main-photo.webp"
import smallPhoto from '../assets/universe-photo/universe-photo-small.webp'
import Button from "../components/Button"
export default function UniverseSection() {
  return (
    <section className="universe">
      <div className="universe-title">
        <span>Notre univers</span>
        <span>Notre ADN</span>
      </div>
      <div className="universe-about">
        <div className="universe-about-photo">
          <img src={bigPhoto} alt='beers' />
          <img src={smallPhoto} alt="beers" />
        </div>
        <div className="universe-about-company">
          <h2>HAPCHOT, LA DÉMOCRATISATION DE LA BIÈRE CRAFT</h2>
          <p>Hapchot, c’est d’abord une équipe passionnée par l’univers de la bière craft, persuadée que les recettes les plus innovantes méritent d’être découvertes par tous !</p>
          <p>Fiers de nos origines du Sud-Ouest, nous brassons nos bières à Bayonne au cœur du Pays Basque, dans notre brasserie artisanale.</p>
          <div className='universe-about-company-button'>
            <Button to="/La-brasserie" >Notre savoir-faire</Button>
          </div>

        </div>
      </div>
    </section>
  )
}