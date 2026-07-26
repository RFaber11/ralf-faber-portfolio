"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { PortfolioImage } from "@/lib/portfolio";
import styles from "./CollectionGallery.module.css";

type CollectionGalleryProps = {
  images: PortfolioImage[];
  collectionTitle: string;
};

export default function CollectionGallery({
  images,
  collectionTitle,
}: CollectionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            </button>

            {index === 0 && (
              <header className={styles.header}>
                <p className={styles.eyebrow}>Selected collection</p>
                <h1>{collectionTitle}</h1>
              </header>
            )}
          </figure>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${collectionTitle} image viewer`}
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

          <div className={styles.lightboxImageWrap}>
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
          </div>

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
        </div>
      )}
    </>
  );
}