import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Image 
      src="/logo.png" 
      alt="Repair Tracker Pro logo"
      width="200"
        height="200"
      />
      <h1>Efficiently track and manage all repairs for your retail store</h1>
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
};

export default HeroSection;