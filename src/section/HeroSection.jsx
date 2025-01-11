import { useState } from "react";
import Button from "../components/Button";
import { beers } from "../data/dummyData";
export default function HoreSection() {
const [hoveredBeer, setHoveredBeer] = useState(0)

  return (
    <section className="hero-section">
      <div className="hero-cover">
        {beers.map((beer, index) => (
          (beer.cover && (
            <img key={index} src={beer.cover} alt={beer.title} className={` ${index == hoveredBeer ? 'active' : ''} hero-cover-main`}/>
          ))
        ))}
        <h1 className="hero-title" >
          Bière Craft
        </h1>
      <Button to='/products' >Toutes les bières </Button>
      </div>
      <div className="hero-swiper"></div>
    </section>
  )
}