import lines from '../assets/illu-rainbow-home-1.svg'
import WhiteCircleButton from './WhiteCircleButton'
export default function ColorLInes() {
  return (
    <div className="lines-wrapper">
      <img src={lines} alt={lines} />
      <div className='lines-wrapper-circle'>
        <WhiteCircleButton />
      </div>
    </div>
  )
}