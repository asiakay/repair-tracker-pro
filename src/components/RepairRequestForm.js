import React, { useState } from 'react';
import styles from '../styles/RepairRequestForm.module.css';
import { useAuth } from '@/hooks/useAuth'; 
import { getFirestore } from '@/lib/firebaseClient';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { collection, addDoc } from "firebase/firestore"; // import the setDoc function from the firestore library

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
      //userId: user.uid, // add a userId property to the data object and set it to user.uid
     // userEmail: user.email, // add a user.email property to the data object and set it to user.email
    };

    const db = getFirestore();
    //const newDocRef = collection(db, "repairRequests").doc(); // create a new document reference in the repairRequests collection
    const newDocRef = await addDoc(collection(db, "repairRequests"), data); // create a new document reference in the repairRequests collection
    console.log("Document written with ID: ", newDocRef.id); // log the id of the document that was added
  try {
// add the document to the repairRequests collection
     // await addDoc(newDocRef, data); // add the data object to the repairRequests collection
      console.log('Document written with ID: ', newDocRef.id); // log the id of the document that was added
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
      <h2 className={styles['h1']}>Create a New Repair Request</h2>
  
      
      <Form onSubmit={handleSubmit}>
      <DatePicker
      className='form-control'
        selected={dateRequested}
        onChange={(date) => setDateRequested(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
      />

      <Form.Group controlId="formItemDetails">
        <Form.Label>Item Details</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item details"
          value={itemDetails}
          onChange={(event) => setItemDetails(event.target.value)}
        />
      </Form.Group>

        <Form.Group controlId="formRepairDescription">
          <Form.Label>Repair Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter repair description"
            value={repairDescription}
            onChange={(event) => setRepairDescription(event.target.value)}
          />
        </Form.Group>
        
<Form.Group controlId="formPriorityLevel">
        <Form.Label>Priority Level</Form.Label>
        <Form.Control
          as="select"
          value={priorityLevel}
          onChange={(event) => setPriorityLevel(event.target.value)}
        >
          <option value="">Select a priority level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Form.Control>
      </Form.Group>

        <Form.Group controlId="formDepartmentResponsible">
          <Form.Label>Department Responsible</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter department responsible"
            value={departmentResponsible}
            onChange={(event) => setDepartmentResponsible(event.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="formSubmit">
          <Form.Label>Submit</Form.Label>
          <Form.Control
            type="submit"
            className={styles['submit-button']}
          />
        </Form.Group>

      </Form>
    </div>
  );
};

export default RepairRequestForm;
