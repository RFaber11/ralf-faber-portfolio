"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Link
        href="/"
        className={styles.brand}
        aria-label="Ralf Faber homepage"
      >
        <span className={styles.logoWrap}>
          <Image
            src="/logos/rf-white.png"
            alt=""
            width={54}
            height={40}
            className={`${styles.logo} ${styles.logoWhite}`}
          />

          <Image
            src="/logos/rf-black.png"
            alt=""
            width={54}
            height={40}
            className={`${styles.logo} ${styles.logoBlack}`}
          />
        </span>

        <span className={styles.brandName}>Ralf Faber</span>
      </Link>

      <nav className={styles.links} aria-label="Main navigation">
        <Link href="#work">Work</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}