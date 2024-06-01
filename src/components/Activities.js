import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './activities.css'; 
import moment from 'moment';

const Activities = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(0);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  const [message, setMessage] = useState('');
  const [activities, setActivities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentActivityId, setCurrentActivityId] = useState(null);

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/activities');
      setActivities(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        console.log(currentActivityId);
        const response = await axios.put(`http://localhost:5000/api/activities/${currentActivityId}`, {
          name,
          duration,
          caloriesBurnt
        });
        setMessage(response.data.message);
        setEditMode(false);
        setCurrentActivityId(null);
      } else {
        const response = await axios.post('http://localhost:5000/api/activities', {
          name,
          duration,
          caloriesBurnt
        });
        setMessage(response.data.message);
      }
      setName('');
      setDuration('');
      setCaloriesBurnt('');
      fetchActivities();
    } catch (error) {
      setMessage('Failed to log activity');
      console.error(error);
    }
  };

  const handleEdit = (activity) => {
    setEditMode(true);
    setCurrentActivityId(activity._id);
    console.log('edit actiivty id is ' + activity._id)
    setName(activity.name);
    setDuration(activity.duration);
    setCaloriesBurnt(activity.caloriesBurnt);
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:5000/api/activities/${id}`);
      setMessage('Activity deleted successfully');
      fetchActivities();
    } catch (error) {
      setMessage('Failed to delete activity');
      console.error(error);
    }
  };

  return (
    <div className="activities-container">
      <div className="activities-box">
        <h2 className="activities-title">{editMode ? 'Edit Activity' : 'Log Activity'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Activity Name"
            className="activities-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Duration (minutes)"
            className="activities-input"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Calories Burnt"
            className="activities-input"
            value={caloriesBurnt}
            onChange={(e) => setCaloriesBurnt(e.target.value)}
            required
          />
          <button className="activities-button" type="submit">{editMode ? 'Update Activity' : 'Log Activity'}</button>
        </form>
        <p className="activities-message">{message}</p>
      </div>
      <div className="activities-list">
        <h2 className="activities-list-title">Recorded Activities</h2>
        <table className="activities-table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Duration</th>
              <th>Calories Burnt</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={activity._id}>
                <td>{index + 1}</td>
                <td>{activity.name}</td>
                <td>{activity.duration}</td>
                <td>{activity.caloriesBurnt}</td>
                <td>{moment(activity.timestamp).format('YYYY-MM-DD HH:mm:ss')}</td> 
                <td>
                  <button className="edit-button" onClick={() => handleEdit(activity)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(activity._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
