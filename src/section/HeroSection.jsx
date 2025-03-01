import { useState } from "react";
import Button from "../components/Button";
import { beers } from "../data/dummyData";
import VerticalMarquee from "../components/VerticalMarquee";
export default function HoreSection() {
  const [hoveredBeer, setHoveredBeer] = useState(0)

  return (
    <section className="hero-section">
      <div className="hero-cover">
        {beers.map((beer, index) => (
          (beer.cover && (
            <img key={index} src={beer.cover} alt={beer.title} className={` ${index == hoveredBeer ? 'active' : ''} hero-cover-main`} />
          ))
        ))}
        <h1 className="hero-title" >
          Bière <br /> Craft
        </h1>
        <Button to='/products' >Toutes les bières </Button>
      </div>
      {/* <div className="vertical-marquee-wrapper ">
        {beers.map((beer, index) => (<VerticalMarquee key={index} backgroundColor={beer.bgColor} img={beer.img[0]} title={beer.title} />))}
      </div> */}
    </section>
  )
}