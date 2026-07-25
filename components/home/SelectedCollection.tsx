import Reveal from "@/components/animations/Reveal";
import CollectionCard from "@/components/ui/CollectionCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { collections } from "@/lib/portfolio";
import styles from "./SelectedCollection.module.css";

export default function SelectedCollection() {
  return (
    <Section id="work" className={styles.collection}>
      <Container>
        <Reveal>
          <SectionTitle
            title="Editorial Collection"
            subtitle="A curated selection of portrait and fashion photography."
          />
        </Reveal>

        <div className={styles.grid}>
          {collections.map((collection, index) => (
            <Reveal key={collection.id} delay={index * 0.08}>
              <CollectionCard
                collection={collection}
                index={index}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}