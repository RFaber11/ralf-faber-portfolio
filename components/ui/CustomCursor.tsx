"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, {
    stiffness: 500,
    damping: 45,
    mass: 0.5,
  });

  const smoothY = useSpring(y, {
    stiffness: 500,
    damping: 45,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("[data-cursor='view']")));
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`${styles.cursor} ${active ? styles.active : ""}`}
      style={{
        x: smoothX,
        y: smoothY,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    >
      <span>{active ? "View" : ""}</span>
    </motion.div>
  );
}