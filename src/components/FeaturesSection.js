import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="feature-item">
        <Image src="/create-repair-request.png" alt="Create Repair Request Icon" width={64} height={64} />
        <h3>Create Repair Requests</h3>
        <p>Easily create repair requests and assign them to specific departments in your retail store.</p>
      </div>
      <div className="feature-item">
        <Image src="/track-repair-progress.png" alt="Track Repair Progress Icon" width={64} height={64} />
        <h3>Track Repair Progress</h3>
        <p>Monitor the progress of repair requests in real-time and prioritize urgent repairs.</p>
      </div>
      <div className="feature-item">
        <Image src="/maintain-repair-histories.png" alt="Maintain Repair Histories Icon" width={64} height={64} />
        <h3>Maintain Repair Histories</h3>
        <p>Keep detailed records of all repairs for each item in your retail store, making it easier to make decisions about future repairs and maintenance.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
