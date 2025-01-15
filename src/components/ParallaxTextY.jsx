import { useRef } from "react";
import {
  motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function ParallaxTextY({ children, baseVelocity = 100 }) {
  const baseY = useMotionValue(0);  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const y = useTransform(baseY, (v) => `${wrap(-30, 45, v)}%`); 

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * (velocityFactor.get() * 10);

    if (velocityFactor.get() > 0.1 || velocityFactor.get() < -0.1) {
      baseY.set(baseY.get() + moveBy);
    }
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
