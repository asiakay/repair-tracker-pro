import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import Router from 'next/router';
import Link from 'next/link'; 
import { useAuth } from '@/hooks/useAuth';
 

const HeroSection = () => {
  const user = useAuth();

  return (
    <div className={styles['hero-section']}>
      <Image 
      src="/RepairTracker.jpeg" 
      alt="Repair Tracker Pro logo"
      width="200"
        height="200"
        className={styles['hero-section-image']}
      />
      <h1>Efficiently track and manage all repairs for your retail store</h1>
      
      {user ? (
        <>
        <Button variant="primary" size="lg" href='/repair-list'>View Repairs</Button><br></br><br></br>
        <Button variant="primary" size="lg" href='/new-repair-request'>New Request</Button>
        </>
      ) : (
      <Link href="/register">

      <Button variant="primary" size="lg">Get Started</Button>
      </Link>
      )}
    </div>
  );
};

export default HeroSection;
