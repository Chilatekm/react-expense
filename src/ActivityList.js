// ActivityList.js
import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <div>
      <h2>My Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name} - {activity.duration} minutes</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;