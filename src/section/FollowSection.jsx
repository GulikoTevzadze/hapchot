import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Button from '../components/Button'
import { stories } from "../data/dummyData";

export default function FollowSection() {
  return (
    <section className="follow">
      <h3>@hapchotbeer</h3>
      <div className="follow-title">
        <span>You like us?</span>
        <span>So follow us!</span>
      </div>
      <div className="follow-photo">
        {stories.map((photo, index) => (
          <img key={index} src={photo.img} />
        ))}
      </div>
      <div className="follow-button">
        <Button >
          <InstagramLogoIcon className="follow-button-icon" />
        </Button>
      </div>
    </section>
  )
}