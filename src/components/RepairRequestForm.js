import React, { useState } from 'react';
import styles from '../styles/RepairRequestForm.module.css';
import { useAuth } from '@/hooks/useAuth'; 
import { getFirestore } from '@/lib/firebaseClient';


const RepairRequestForm = () => {
  const user = useAuth();
  const [itemDetails, setItemDetails] = useState('');
  const [repairDescription, setRepairDescription] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('');
  const [departmentResponsible, setDepartmentResponsible] = useState('');
const [dateRequested, setDateRequested] = useState(''); // create a state variable called dateRequested, which is set to an empty string by default

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('form submitted');

    // TODO: Handle form submission
    if (!user) return; // if user is null, return early

    const data = {
      itemDetails,
      repairDescription,
      priorityLevel,
      departmentResponsible,
      dateRequested,
      userId: user.uid, // add a userId property to the data object and set it to user.uid
      userEmail: user.email, // add a user.email property to the data object and set it to user.email
    };

  try {
    const db = getFirestore(); // get a reference to the firestore database
      // add new document to repair requests collection
      await db.collection('repairRequests').add(data);
      // reset form fields
      setItemDetails('');
      setRepairDescription('');
      setPriorityLevel('');
      setDepartmentResponsible('');
      setDateRequested(''); // set dateRequested to an empty string
    } catch (error) {
      console.log(error);
    }

};

  return (
    <div className={styles['repair-request-form']}>
      <h2>Create a New Repair Request</h2>
      <form onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
          <label htmlFor="dateRequested">Date Requested:</label>
          <input type="date" id="dateRequested" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)} />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="itemDetails">Item Details:</label>
          <input type="text" id="itemDetails" value={itemDetails} onChange={(event) => setItemDetails(event.target.value)} />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="repairDescription">Repair Description:</label>
          <textarea id="repairDescription" value={repairDescription} onChange={(event) => setRepairDescription(event.target.value)}></textarea>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="priorityLevel">Priority Level:</label>
          <select id="priorityLevel" value={priorityLevel} onChange={(event) => setPriorityLevel(event.target.value)}>
            <option value="">Select a Priority Level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="departmentResponsible">Department Responsible:</label>
          <input type="text" id="departmentResponsible" value={departmentResponsible} onChange={(event) => setDepartmentResponsible(event.target.value)} />
        </div>
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
};

export default RepairRequestForm;
