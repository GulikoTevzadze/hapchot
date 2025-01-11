export default function Marquee({ title }) {
  const wordsCount = Math.round(100 / title.length)
  const renderContent = (count, className = "") =>
    Array.from({ length: count }, (_, i) => (
      <div key={i} className={`marquee-content ${className}`}>
        {Array.from({ length: wordsCount }, (_, j) => (
          <p key={j}>{`${title} `} &nbsp;</p>
        ))}
      </div>
    ));
  return (
    <div className="marquee-bg ">
      <div className="marquee">{renderContent(2)}</div>
      <div className="marquee">{renderContent(2, "white")}</div>
    </ div >
  );
}