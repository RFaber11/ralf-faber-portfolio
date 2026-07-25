"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./BehindTheCamera.module.css";

export default function BehindTheCamera() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.07]
  );

  return (
    <div ref={sectionRef}>
      <Section id="about" className={styles.section}>
        <Container>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Behind the Camera</p>

            <h2>
              Light, atmosphere
              <span>and human presence.</span>
            </h2>
          </div>

          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.introduction}>
                Ten years ago, I picked up a camera because I wanted to
                create images that felt different from everyday photographs.
              </p>

              <p>
                Today, my work focuses on contemporary portrait photography
                shaped by natural light, thoughtful composition and a calm
                approach to direction.
              </p>

              <p>
                Based in the Netherlands and available for portrait, fashion
                and commercial commissions.
              </p>
            </div>

            <div className={styles.imageWrap}>
              <motion.div
                className={styles.imageMotion}
                style={{ scale: imageScale }}
              >
                <Image
                  src="/images/about/eye.jpg"
                  alt="Close-up of Ralf Faber's eye with Rotterdam reflected in it"
                  fill
                  sizes="(max-width: 900px) 100vw, 58vw"
                  className={styles.image}
                />
              </motion.div>

              <p className={styles.caption}>
                Rotterdam, reflected.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}