import Image from "next/image";
import Link from "next/link";
import type { PortfolioCollection } from "@/lib/portfolio";
import styles from "./CollectionCard.module.css";

type CollectionCardProps = {
  collection: PortfolioCollection;
  index: number;
  featured?: boolean;
};

export default function CollectionCard({
  collection,
  index,
  featured = false,
}: CollectionCardProps) {
  return (
    <article
      className={`${styles.card} ${
        featured ? styles.featured : ""
      }`}
    >
      <Link
          href={`/collection/${collection.id}`}
          className={styles.link}
          aria-label={`View ${collection.title}`}
          data-cursor="view"
        >

        <div className={styles.imageWrap}>
          <Image
            src={collection.cover}
            alt={collection.images[0]?.alt || collection.title}
            fill
            sizes={
              featured
                ? "100vw"
                : "(max-width: 900px) 100vw, 70vw"
            }
            className={styles.image}
            style={{
              objectPosition:
                collection.coverPosition ?? "center",
            }}
          />

          <div className={styles.overlay} />

          <span className={styles.number}>
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>

        <div className={styles.information}>
          <h3>{collection.title}</h3>

          <div className={styles.details}>
          <p>{collection.subtitle}</p>
        </div>
        </div>
      </Link>
    </article>
  );
}