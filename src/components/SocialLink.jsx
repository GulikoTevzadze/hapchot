import { useState } from "react";
import { Link } from "react-router";
export default function SocialLink({ children, color }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link className="social-link"
      to="#"
      style={{
        backgroundColor: isHovered ? color : "transparent",
        color:isHovered ? "white": 'black',
        border: `1px solid ${isHovered ? "transparent" : color}`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
} 