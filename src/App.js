// App.js
import React, { useState } from 'react';
import './App.css';
import ActivityList from './ActivityList';
import AddActivityForm from './AddActivityForm';

const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, { id: Date.now(), ...activity }]);
  };

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <AddActivityForm onAdd={addActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default App;