import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  id,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}