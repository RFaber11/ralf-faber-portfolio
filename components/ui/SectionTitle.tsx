import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}