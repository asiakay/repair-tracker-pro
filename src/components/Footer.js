import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p>Copyright © 2023 <Link href="https://www.asialakay.net">Asialakay.net</Link>
      </p>
    </footer>
  );
};

export default Footer;
