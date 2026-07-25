import Container from "@/components/ui/Container";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.text}>
          Creating contemporary portrait photography with an editorial eye,
          balancing natural light, composition and atmosphere.
        </p>
      </Container>
    </section>
  );
}