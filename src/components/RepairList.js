import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/RepairList.module.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const RepairList = () => {

  const [repairRequests, setRepairRequests] = useState([]); // create a state variable called repairRequests, which is set to an empty array by default

useEffect(() => {
  async function getRepairRequests() {
    const db = getFirestore();
    const repairRequestsCol = collection(db, 'repairRequests'); // create a reference to the repairRequests collection
    const repairRequestsSnapshot = await getDocs(repairRequestsCol); // get the documents from the repairRequests collection
    const repairRequestsList = repairRequestsSnapshot.docs.map((doc) => 
      ({ id: doc.id, 
        itemDetails: doc.data().itemDetails,
        repairDescription: doc.data().repairDescription,
        priorityLevel: doc.data().priorityLevel,
        departmentResponsible: doc.data().departmentResponsible,
        dateRequested: doc.data().dateRequested.toDate().toLocaleDateString('en-US'), // convert the dateRequested timestamp to a date string
        status: doc.data().status,
      })
    ); // create an array of objects from the documents
    setRepairRequests(repairRequestsList); // set the repairRequests state variable to the array of objects
  }
  getRepairRequests();
}, []); // run this function only once, when the component is first rendered




  return (
    <div className={styles['repair-list']}>
      <h2 className={styles['h1']}>
        Repair List</h2>
      {repairRequests.map((request) => (
        <Card key={request.id} style={{ width: '18rem' }}>
          <Card.Header>{request.itemDetails}</Card.Header>
          <Card.Text>
            {request.repairDescription}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Priority: {request.priorityLevel}</ListGroupItem>
            <ListGroupItem>Department: {request.departmentResponsible}</ListGroupItem>
            <ListGroupItem>Date Requested: {request.dateRequested}</ListGroupItem>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};



/*         <div key={request.id} className={styles['repair-item']}>
          <div className={styles['repair-item-image']}>
            <Image src="/repair-icon.png" alt="Repair Icon" width={30} height={30} />
          </div>
          <div className={styles['repair-item-details']}>
            <h3>{request.item}</h3>
            <p>{request.description}</p>
            <div className={styles['repair-item-info']}>
              <span>Priority: {request.priorityLevel}</span>
              <span>Department: {request.departmentResponsible}</span>
              <span>Date Requested: {request.dateRequested}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
 */
export default RepairList;
