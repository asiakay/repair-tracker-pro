import React from 'react';
import Image from 'next/image';
import styles from '../styles/RepairList.module.css';

const RepairList = () => {
  const repairRequests = [
    {
      id: 1,
      item: 'Display Case',
      description: 'The glass on the display case is cracked and needs to be replaced.',
      priority: 'High',
      department: 'Facilities',
      status: 'In Progress',
    },
    {
      id: 2,
      item: 'Cash Register',
      description: 'The cash register drawer is jammed and won\'t open.',
      priority: 'Medium',
      department: 'Sales',
      status: 'Delayed',
    },
    {
      id: 3,
      item: 'Shelving Unit',
      description: 'One of the shelves on the shelving unit is loose and needs to be tightened.',
      priority: 'Low',
      department: 'Facilities',
      status: 'Completed',
    },
  ];

  return (
    <div className={styles['repair-list']}>
      <h2>Repair List</h2>
      {repairRequests.map((request) => (
        <div key={request.id} className={styles['repair-item']}>
          <div className={styles['repair-item-image']}>
            <Image src="/repair-icon.png" alt="Repair Icon" width={30} height={30} />
          </div>
          <div className={styles['repair-item-details']}>
            <h3>{request.item}</h3>
            <p>{request.description}</p>
            <div className={styles['repair-item-info']}>
              <span>Priority: {request.priority}</span>
              <span>Department: {request.department}</span>
              <span>Status: {request.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepairList;
