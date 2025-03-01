import { useEffect, useState } from "react"
import { motion } from "framer-motion";

export default function AminCursor() {
  const [mousePositionDot, setMousePositionDot] = useState({
    x: 0,
    y: 0
  })
  const [mousePositionOutline, setMousePositionOutline] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariants, setCursorVariants] = useState('default');

  useEffect(() => {
    const titleElements = document.querySelectorAll(".main-button, li");
    const mouseMove = e => {
      setMousePositionDot({
        x: e.clientX,
        y: e.clientY
      })
      setMousePositionOutline({
        x: e.clientX,
        y: e.clientY
      })
    }
    const mouseEnter = () => {
      setCursorVariants('text')
    }
    const mouseLeave = () => {
      setCursorVariants('default')
    }
    window.addEventListener("mousemove", mouseMove);
    titleElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      titleElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    }

  }, [])
  const variantsDot = {
    default: {
      x: mousePositionDot.x - 5,
      y: mousePositionDot.y - 5,
      backgroundColor: " #000000",
      transition: { ease: "easeOut", duration: 0.1 }
    },
    text: {
      height: 30,
      width: 30,
      x: mousePositionOutline.x - 15,
      y: mousePositionOutline.y - 15,
      backgroundColor: "rgba(247, 243, 243, 0.3)",
      mixBlendMode: "difference"
    }

  }
  const variantsOutline = {
    default: {
      x: mousePositionOutline.x - 20,
      y: mousePositionOutline.y - 20,
      backgroundColor: " #0000004d",
      transition: { ease: "easeOut", duration: 0.4 },
    },
    text: {
      height: 30,
      width: 30,
      x: mousePositionOutline.x - 15,
      y: mousePositionOutline.y - 15,
      backgroundColor: "rgba(247, 243, 243, 0.3)",
      mixBlendMode: "difference"
    }

  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variantsDot}
        animate={cursorVariants}
      />
      <motion.div
        className="cursor-outline"
        variants={variantsOutline}
        animate={cursorVariants}
      />
    </>
  )
}