import { Link } from "react-router";
export default function Button({ children, to, onClick }) {
  return (
    <div  className="main-button">
      <Link to={to} onClick={onClick} className="main-button-title">
        {children}
      </Link>
    </div>
  )
}