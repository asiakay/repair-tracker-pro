import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';
const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);


    const router = useRouter();
    const handleClick = (event) => {
        event.preventDefault();
        router.push('/new-repair-request');
      };
      
      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };



  return (
    <nav 
    className={
      styles['navbar']}>

      <div 
      className={
        styles['navbar-brand']}
        >
        <Image 
        src="/repair-icon.png" 
        alt="Repair Tracker Pro" 
        width={30} height={30} 
        />
   {/*      <Link 
        href="/" 
        className={
          styles['navbar-brand-link']}
          >Repair Tracker Pro
        </Link> */}
      </div>


      <div className={
        styles['navbar-links']}>

{/* navbar-link = not for small screen */}
   {/*      <Link 
        href="/" 
        className={
          styles['navbar-link']}
          >Home
        </Link> */}

    {/*     <Link 
        href="/repair-list" 
        className={styles['navbar-link']}
        >Repairs
        </Link> */}

  {/*       <Link 
        href="/new-repair-request"
        className={styles['navbar-link']}
        >New Request
        </Link> */}

 {/*        <Link 
        href="/login" 
        className={styles['navbar-link']}
        >Login
        </Link> */}




    {/*     <button 
        className={styles['hamburger-icon']} 
        onClick={toggleMenu}>
          <FaBars />
        </button> */}
      </div>






      <div 
      className={showMenu 
      ? styles['mobile-menu'] 
      : styles['mobile-menu-hidden']}
      >

{/*       <Link 
      href="/" 
      className={
        styles['mobile-menu-link']}
        >
Home
        </Link> */}
        <Link 
        href="/repair-list" 
        className={
        styles['mobile-menu-link']}          >
Repairs
        </Link>
{/*         <Link 
        href="/new-repair-request" 
        className={
          styles['mobile-menu-link']}
          >
New Request
        </Link> */}
{/*         <Link 
        href="/login" 
        className={
          styles['mobile-menu-link']}
          >
Login
        </Link> */}
      </div>

    </nav>
  );
};

export default NavigationBar;