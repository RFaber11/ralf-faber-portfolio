"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(false);

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
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as HTMLElement;
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");

      if (!cursorTarget) {
        setLabel("");
        setHidden(false);
        setVisible(true);
        return;
      }

      const cursorValue = cursorTarget.dataset.cursor ?? "";

      if (cursorValue === "hidden") {
        setHidden(true);
        setVisible(false);
        return;
      }

      setHidden(false);
      setVisible(true);
      setLabel(cursorValue);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [x, y]);

  const active = label.length > 0;

  return (
    <motion.div
      className={`${styles.cursor} ${
        active ? styles.active : ""
      }`}
      style={{
        x: smoothX,
        y: smoothY,
        opacity: visible && !hidden ? 1 : 0,
      }}
      aria-hidden="true"
    >
      <span>{label}</span>
    </motion.div>
  );
}