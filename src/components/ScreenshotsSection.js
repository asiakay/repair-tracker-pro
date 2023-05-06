import React from 'react';
import Image from 'next/image';
import styles from '../styles/ScreenshotsSection.module.css';

const ScreenshotsSection = () => {
  return (
    <div className={styles["screenshots-section"]}>
      <h2>Screenshots</h2>
      <div className={styles["screenshot-item"]}>
        <Image src="/repair-list.png" alt="Repair List Screenshot" width={500} height={300} />
        <h3>Repair List</h3>
      </div>
      <div className={styles["screenshot-item"]}>
        <Image src="/new-repair-request.png" alt="New Repair Request Screenshot" width={500} height={300} />
        <h3>New Repair Request</h3>
      </div>
      <div className={styles["screenshot-item"]}>
        <Image src="/repair-details.png" alt="Repair Details Screenshot" width={500} height={300} />
        <h3>Repair Details</h3>
      </div>
    </div>
  );
};

export default ScreenshotsSection;
