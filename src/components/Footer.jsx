import { Link } from "react-router"
import SocialLink from "./SocialLink"
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import ParallaxTextX from "./ParallaxTextX"
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <footer className="footer">
      <div className="footer-about">
        <div className="footer-about-navigation">
          <p>navigation</p>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}> Accueil</Link>
            </li>
            <li>
              <Link to="/La-brasserie"  >
              La brasserie
              </Link>
            </li>
            <li>
              <Link to="/"> Nos bières </Link>
            </li>
          </ul>
        </div>
        <div className="footer-about-media">
          <div className="logo">
            <span>hapchot</span>
          </div>
          <div className="social">
            <SocialLink className='social-link' color={'#f0cf76'}>
              <TwitterLogoIcon className="social-icon" />
            </SocialLink>
            <SocialLink className='social-link' color={'#6bb5a5'}>
              <InstagramLogoIcon className="social-icon" />
            </SocialLink>
          </div>
        </div>
        <div className="footer-about-contact">
          <p>information</p>
          <ul>
            <li>
              <Link to="/contact"> CONTACT </Link>
            </li>
            <li>
              <Link to="/confidential"> Confidentialité </Link>
            </li>
            <li>
              <Link to="/legales"> Mentions légales</Link>
            </li>

          </ul>
        </div>
      </div>
      <div className="footer-title">
        <ParallaxTextX baseVelocity={5}>
          <span>Hapchot&nbsp;</span>
          <span>Bière&nbsp;</span>
          <span>Craft&nbsp;</span>
          <span>Bière&nbsp;</span>
          <span>Hapchot&nbsp;</span>
        </ParallaxTextX>
      </div>
      <div className="footer-warning">
        <p>L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTE. A CONSOMMER AVEC MODERATION</p>
      </div>
      <div className="footer-copyright">
        <p>&copy; Copyright {new Date().getFullYear()} Spell Sips</p>
      </div>
    </footer>
  )
}
