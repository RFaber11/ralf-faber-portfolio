import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CollectionGallery from "@/components/gallery/CollectionGallery";
import Footer from "@/components/layout/Footer";
import { collections } from "@/lib/portfolio";

import styles from "./CollectionPage.module.css";

type CollectionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { id } = await params;

  const collection = collections.find((item) => item.id === id);

  if (!collection) {
    return {
      title: "Collection not found",
    };
  }

  return {
    title: collection.title,
    description: collection.subtitle,
  };
}

export default async function CollectionPage({
  params,
}: CollectionPageProps) {
  const { id } = await params;

  const currentIndex = collections.findIndex(
    (item) => item.id === id
  );

  if (currentIndex === -1) {
    notFound();
  }

  const collection = collections[currentIndex];

  const nextCollection =
    collections[(currentIndex + 1) % collections.length];

  return (
    <>
      <main className={styles.page}>
        <CollectionGallery
          images={collection.images}
          collectionTitle={collection.title}
          collectionSubtitle={collection.subtitle}
        />

        <section className={styles.nextCollection}>
          <p className={styles.nextEyebrow}>
            Next collection
          </p>

          <Link
            href={`/collection/${nextCollection.id}`}
            className={styles.nextLink}
            data-cursor="Open"
          >
            <div className={styles.nextImageWrap}>
              <Image
                src={nextCollection.cover}
                alt={nextCollection.title}
                fill
                sizes="(max-width: 700px) 100vw, 90vw"
                className={styles.nextImage}
              />

              <div className={styles.nextOverlay} />

              <div className={styles.nextContent}>
                <div>
                  <h2>{nextCollection.title}</h2>
                  <p>{nextCollection.subtitle}</p>
                </div>

                <span
                  className={styles.nextArrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}