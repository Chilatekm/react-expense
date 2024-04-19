// AddActivityForm.js
import React, { useState } from 'react';
import './AddActivityForm.css';

const AddActivityForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration) return;
    onAdd({ name, duration: parseInt(duration) });
    setName('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='track'
        placeholder="Activity Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        className='track'
        placeholder="Duration (minutes)" 
        value={duration} 
        onChange={(e) => setDuration(e.target.value)} 
      />
      <button type="submit"  className='button' >Add Activity</button>
    </form>
  );
};

export default AddActivityForm;