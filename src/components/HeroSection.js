import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import Router from 'next/router';
import Link from 'next/link'; 
 

const HeroSection = () => {
  return (
    <div className={styles['hero-section']}>
      <Image 
      src="/RepairTracker.jpeg" 
      alt="Repair Tracker Pro logo"
      width="200"
        height="200"
      />
      <h1>Efficiently track and manage all repairs for your retail store</h1>
      <Link href="/register">

      <Button variant="primary" size="lg">Get Started</Button>
      </Link>
    </div>
  );
};

export default HeroSection;
