import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { collections } from "@/lib/portfolio";
import styles from "./CollectionPage.module.css";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import CollectionGallery from "@/components/gallery/CollectionGallery";

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
  <CollectionGallery
    images={collection.images}
    collectionTitle={collection.title}
  />

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