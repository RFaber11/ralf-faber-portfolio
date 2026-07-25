import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { collections } from "@/lib/portfolio";
import styles from "./CollectionPage.module.css";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

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
      <Navbar />

      <main className={styles.page}>
        <div className={styles.gallery}>
          {collection.images.map((image, index) => (
            <figure className={styles.figure} key={image.src}>
              <div className={styles.imageWrap}>
                <Image
                  src={image.src}
                  alt={image.alt || `${collection.title}, image ${index + 1}`}
                  width={1800}
                  height={2400}
                  sizes="(max-width: 768px) 100vw, 88vw"
                  className={styles.image}
                  style={{
                    objectPosition: image.position ?? "center",
                  }}
                />
              </div>

              {index === 0 && (
                <header className={styles.header}>
                  <p className={styles.eyebrow}>
                    Selected collection
                  </p>

                  <h1>{collection.title}</h1>

                  <p className={styles.subtitle}>
                    {collection.subtitle}
                  </p>
                </header>
              )}
            </figure>
          ))}
        </div>

        <nav
          className={styles.nextCollection}
          aria-label="Next collection"
        >
          <p>Next collection</p>

          <Link href={`/collection/${nextCollection.id}`}>
            <span>{nextCollection.title}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </main>

      <Footer />
    </>
  );
}