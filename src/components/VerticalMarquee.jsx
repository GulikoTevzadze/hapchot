import { Link } from "react-router"
export default function VerticalMarquee({ to, onClick, title, img, backgroundColor }) {
  return (
    <section>
      <Link className="vertical-marquee" to={to}
        onClick={onClick}>
        <div className="vertical-marquee-item" style={{ backgroundColor }}><img src={img} alt={title} /></div>
        <h2>{title}</h2>
      </Link>
    </ section>
  )
}