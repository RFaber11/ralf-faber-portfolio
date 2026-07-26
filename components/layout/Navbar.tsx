"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const useScrolledStyle = isScrolled || !isHomepage;

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

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!isHomepage) {
      return;
    }

    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`${styles.navbar} ${
        useScrolledStyle ? styles.scrolled : ""
      }`}
    >
      <Link
        href="/"
        className={styles.brand}
        aria-label="Ralf Faber homepage"
        onClick={handleLogoClick}
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
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}