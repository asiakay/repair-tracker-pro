import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturesSection.module.css';
const FeaturesSection = () => {
  return (

    <div className={styles["features-section"]}>
      <div className={styles["feature-item"]}>
{/*         <Image src="/create-repair-request.png" alt="Create Repair Request Icon" width={64} height={64} />
 */}        
 <Image src="/repair-icon.png" alt="Create Repair Request Icon" width={64} height={64} />
 <h3>Create Repair Requests</h3>
        <p>Easily create repair requests and assign them to specific departments in your retail store.</p>
      </div>
      <div className={styles["feature-item"]}>
        <Image src="/in-progress-icon.png" alt="Track Repair Progress Icon" width={64} height={64} />
        <h3>Track Repair Progress</h3>
        <p>Monitor the progress of repair requests in real-time and prioritize urgent repairs.</p>
      </div>
      <div className={styles["feature-item"]}>
        <Image src="/data-sheet-icon.png" alt="Maintain Repair Histories Icon" width={64} height={64} />
        <h3>Maintain Repair Histories</h3>
        <p>Keep detailed records of all repairs for each item in your retail store, making it easier to make decisions about future repairs and maintenance.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
