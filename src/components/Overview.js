import React from 'react';
import './styles.css'; 

const Overview = () => {
  return (
    <div className="overview-container">
      <h2 className="section-title">User Overview</h2>
      <div className="overview-cards">
        <div className="card">
          <h3 className="card-title">Profile Summary</h3>
          <p className="card-content">Get a quick snapshot of your profile, including personal details and recent activities.</p>
          <button className="card-button">View Profile</button>
        </div>
        <div className="card">
          <h3 className="card-title">Achievements</h3>
          <p className="card-content">See the milestones and badges you've earned through your activities and progress.</p>
          <button className="card-button">View Achievements</button>
        </div>
        <div className="card">
          <h3 className="card-title">Activity Stats</h3>
          <p className="card-content">Review your workout statistics, including completed exercises, duration, and performance metrics.</p>
          <button className="card-button">View Stats</button>
        </div>
        <div className="card">
          <h3 className="card-title">Goals</h3>
          <p className="card-content">Set and track your fitness goals to stay motivated and achieve your desired outcomes.</p>
          <button className="card-button">View Goals</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
