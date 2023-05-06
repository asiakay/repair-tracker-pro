import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
    const router = useRouter();
    const handleClick = (event) => {
        event.preventDefault();
        router.push('/new-repair-request');
      };
      
  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar-brand']}>
        <Image src="/logo.png" alt="Repair Tracker Pro" width={30} height={30} />
        <Link href="/" className={styles['navbar-brand-link']}>Repair Tracker Pro
        </Link>
      </div>
      <div className={styles['navbar-links']}>
        <Link href="/" className={styles['navbar-link']}>Home
        </Link>
        <Link href="/repair-list" className={styles['navbar-link']}>Repairs
        </Link>
        <Link href="/new-repair-request"
        className={styles['navbar-link']}>New Request
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
