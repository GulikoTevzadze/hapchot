import { useState } from "react";
import { Link } from "react-router";
import { Cross2Icon, HamburgerMenuIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { beers } from "../data/dummyData";
import SocialLink from "./SocialLink";
import Card from "./Card";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <header className="header">
      <div className="navigation-logo">
        <h2 className={`${isMenuOpen ? 'black' : 'white'} logo`}>
          <Link>hapchot</Link>
        </h2>
        {!isMenuOpen ? (
          <button className="burger " onClick={toggleMenuHandler}>
            <HamburgerMenuIcon className="crossIcon" />
          </button>
        ) : (
          <button className="burger " onClick={toggleMenuHandler}>
            <Cross2Icon className="crossIcon" />
          </button>
        )}
      </div>
      <nav className={`${isMenuOpen ? 'active' : ''} `}>
        <div className='navigation-menu'>
          <ul>
            <li>
              <Link className='nav-link' to="/products" onClick={toggleMenuHandler}>
                Accueil
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/" onClick={toggleMenuHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' to="/contact" onClick={toggleMenuHandler}>
                Contact
              </Link>
            </li>
          </ul>
          <div className='social-media'>
            <SocialLink color={'#f0cf76'}>
              <TwitterLogoIcon className="social-icon" />
            </SocialLink>
            <SocialLink color={'#6bb5a5'}>
              <InstagramLogoIcon className="social-icon" />
            </SocialLink>
          </div>
        </div>
        <div className='products-block'>
          {beers.map((beer, index) => (
            <Card to='/products' key={index} onClick={toggleMenuHandler} backgroundColor={beer.bgColor} img={beer.img[0]} title={beer.title} />
          ))}
        </div>
      </nav>

    </header>
  )
}