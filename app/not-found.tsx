import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <p className={styles.code}>404</p>

      <h1>Frame not found.</h1>

      <p className={styles.text}>
        The page you are looking for does not exist or has been moved.
      </p>

      <Link href="/" className={styles.link}>
        Return home
        <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}