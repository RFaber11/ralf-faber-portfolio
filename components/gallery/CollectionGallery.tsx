"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PortfolioImage } from "@/lib/portfolio";
import styles from "./CollectionGallery.module.css";
import { AnimatePresence, motion } from "motion/react";

type CollectionGalleryProps = {
  images: PortfolioImage[];
  collectionTitle: string;
  collectionSubtitle: string;
};

export default function CollectionGallery({
  images,
  collectionTitle,
  collectionSubtitle,
}: CollectionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === 0 ? images.length - 1 : current - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === images.length - 1 ? 0 : current + 1;
    });
  }, [images.length]);

  const handleTouchStart = (
  event: React.TouchEvent<HTMLDivElement>
) => {
  touchStartX.current = event.touches[0].clientX;
  touchEndX.current = null;
};

const handleTouchMove = (
  event: React.TouchEvent<HTMLDivElement>
) => {
  touchEndX.current = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (
    touchStartX.current === null ||
    touchEndX.current === null
  ) {
    return;
  }

  const distance =
    touchStartX.current - touchEndX.current;

  const minimumSwipeDistance = 50;

  if (distance > minimumSwipeDistance) {
    showNext();
  }

  if (distance < -minimumSwipeDistance) {
    showPrevious();
  }

  touchStartX.current = null;
  touchEndX.current = null;
};

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <figure className={styles.figure} key={image.src}>
            <button
              type="button"
              className={styles.imageButton}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image ${index + 1} of ${collectionTitle}`}
              data-cursor="View"
            >
              <Image
                src={image.src}
                alt={
                  image.alt ||
                  `${collectionTitle}, image ${index + 1}`
                }
                width={1800}
                height={2400}
                sizes="(max-width: 768px) 100vw, 88vw"
                className={styles.image}
              />

              <span className={styles.imageOverlay} aria-hidden="true">
              <span>View</span>
              <span>↗</span>
             </span>
            </button>

            {index === 0 && (
              <header className={styles.header}>
              <p className={styles.eyebrow}>Selected collection</p>

              <h1>{collectionTitle}</h1>

              <p className={styles.subtitle}>
              {collectionSubtitle}
              </p>
             </header>
            )}
          </figure>
        ))}
      </div>

              <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className={styles.lightbox}
            data-cursor="hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${collectionTitle} image viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <button
              type="button"
              className={styles.close}
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              Close
            </button>

            <button
              type="button"
              className={`${styles.navigation} ${styles.previous}`}
              onClick={showPrevious}
              aria-label="Previous image"
            >
              ←
            </button>

            <AnimatePresence mode="wait">
            <motion.div
                key={images[activeIndex].src}
                className={styles.lightboxImageWrap}
                initial={{
                opacity: 0,
                scale: 0.985,
                }}
                animate={{
                opacity: 1,
                scale: 1,
                }}
                exit={{
                opacity: 0,
                scale: 1.015,
                }}
                transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
                }}
            >
                <Image
                src={images[activeIndex].src}
                alt={
                    images[activeIndex].alt ||
                    `${collectionTitle}, image ${activeIndex + 1}`
                }
                fill
                priority
                sizes="100vw"
                className={styles.lightboxImage}
                />
            </motion.div>
            </AnimatePresence>

            <button
              type="button"
              className={`${styles.navigation} ${styles.next}`}
              onClick={showNext}
              aria-label="Next image"
            >
              →
            </button>

            <p className={styles.counter}>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}