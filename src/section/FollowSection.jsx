import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Button from '../components/Button'
import { stories } from "../data/dummyData";
import ParallaxTextX from '../components/ParallaxTextX';
import ParallaxTextY from '../components/ParallaxTextY';

export default function FollowSection() {
  return (
    <section className="follow">
      <h3>@hapchotbeer</h3>
      <div className="follow-title">
        <ParallaxTextX baseVelocity={5}>
          <span>You like us?</span>
        </ParallaxTextX>
        <ParallaxTextX baseVelocity={-5}>
          <span>So follow us!</span>
        </ParallaxTextX>

      </div>
      <div className="follow-photo">
        <ParallaxTextY baseVelocity={-5} > {stories.map((photo, index) => (
          <img key={index} src={photo.img} />
        ))}
        </ParallaxTextY>

      </div>
      <div className="follow-button">
        <Button >
          <InstagramLogoIcon className="follow-button-icon" />
        </Button>
      </div>
    </section>
  )
}