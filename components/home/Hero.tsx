"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const ralfY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const faberY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={heroRef} className={styles.hero}>
      <motion.div
        className={styles.imageLayer}
        style={{
          y: imageY,
          scale: imageScale,
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Editorial portrait photographed by Ralf Faber"
          fill
          preload
          sizes="100vw"
          className={styles.image}
        />
      </motion.div>

      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        style={{ opacity: contentOpacity }}
      >
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Editorial / Fashion / Portrait
        </motion.p>

        <h1 className={styles.title}>
          <motion.span
            style={{ y: ralfY }}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Ralf
          </motion.span>

          <motion.span
            style={{ y: faberY }}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 1.1,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Faber
          </motion.span>
        </h1>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>Editorial portrait photographer</p>
          <p>Based in the Netherlands</p>
        </motion.div>
      </motion.div>

      <motion.a
        className={styles.scroll}
        href="#work"
        aria-label="Scroll to selected work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </motion.a>
    </section>
  );
}