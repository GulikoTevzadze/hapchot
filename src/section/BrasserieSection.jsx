import { Link } from "react-router"
import brasserie from "../assets/team-photo/brasserie.webp"
import Button from '../components/Button'
import TeamSwiper from "../components/TeamSwiper"
export default function BrasserieSection() {
  return (
    <section className="brasserie">
      <div className="brasserie-photo">
        <img src={brasserie} alt={brasserie} />
        <div className="brasserie-title">
          <span>Bière</span>
          <span>Craft</span>
          <span>Bière</span>
          <span>Craft</span>
          <span>Bière</span>
        </div>
      </div>
      <div className="brasserie-team">
        <h2 className="brasserie-team-title">
          L'histoire de <span> la brasserie</span>
        </h2>
        <p>Notre brasserie artisanale est située à Bayonne, c’est là que toutes nos recettes sont créées puis brassées.</p>
        <p>Notre team de choc est sur le pont H24 (en roulement, on vous rassure !) pour ne jamais laisser les brassins seuls.</p>
        <div className="brasserie-team-button">
          <Button to='/products' >Découvrir la brasserie</Button>
        </div>
        <h3>La team</h3>
        <TeamSwiper />
      </div>
    </section>
  )
}