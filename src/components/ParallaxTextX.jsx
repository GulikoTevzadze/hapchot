import { useRef } from "react";
import {motion,useScroll,useSpring,useTransform,useMotionValue,useVelocity,useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";


export default function ParallaxTextX({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 500,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, 10,v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * (velocityFactor.get() * 10);

    if(velocityFactor.get() > 0.1 || velocityFactor.get() < -0.1) {
      baseX.set(baseX.get() + moveBy);
    }     
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {children}
      </motion.div>
    </div>)
}
