
export const fetchActivities = async () => { 
  try {
    const response = await fetch('http://localhost:5000/api/activities');
    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }
    const activities = await response.json();
    return activities;
  } catch (error) {
    throw new Error('Failed to fetch activities');
  }
};

export const logActivity = async (activityName, duration, caloriesBurnt) => {
  const requestBody = {
    name: activityName,
    duration,
    caloriesBurnt,
  };

  try {
    const response = await fetch('http://localhost:5000/api/log-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error('Failed to log activity');
    }

    const newActivity = await response.json();
    return newActivity;
  } catch (error) {
    throw new Error('Failed to log activity');
  }
};
