import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section id="contact" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Available for commissions</p>

          <h2>Let&apos;s create something with presence.</h2>

          <div className={styles.bottom}>
            <p>
              Portrait, fashion and commercial photography in the Netherlands.
            </p>

            <div className={styles.links}>
              <Link href="mailto:FR.Faber2@gmail.com">
                Email
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="https://www.instagram.com/ralf.fabermedia/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}