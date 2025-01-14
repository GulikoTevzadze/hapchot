import scroll from '../assets/brasserie-photo/brasseria-scroll-down.svg'
export default function BrasserieCoverSection() {
  return (
    <section className="brasserie-cover">
      <h1>
        <span>Notre</span>
        <span>brasserie</span>
      </h1>
      <img src={scroll} alt="brasserie-cover" />
    </section>
  )
}