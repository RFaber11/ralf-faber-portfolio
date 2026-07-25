import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Ralf Faber</p>

      <p>Editorial · Portrait · Fashion</p>
    </footer>
  );
}