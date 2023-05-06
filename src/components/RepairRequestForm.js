import React, { useState } from 'react';
import styles from '../styles/RepairRequestForm.module.css';

const RepairRequestForm = () => {
  const [itemDetails, setItemDetails] = useState('');
  const [repairDescription, setRepairDescription] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('');
  const [departmentResponsible, setDepartmentResponsible] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className={styles['repair-request-form']}>
      <h2>Create a New Repair Request</h2>
      <form onSubmit={handleSubmit}>
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
