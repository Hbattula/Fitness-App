const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fitnessApp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// user schema and model
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// activity schema and model
const activitySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  caloriesBurnt: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});
const Activity = mongoose.model('Activity', activitySchema);

// Route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Signup route
app.post('/api/users', async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all activities
app.get('/api/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for logging activity
app.post('/api/activities', async (req, res) => {
  try {
    // Extract activity data from the request body
    const { name, duration, caloriesBurnt } = req.body;

    // Generate a sequential ID for the new activity
    const count = await Activity.countDocuments();
    const id = count + 1;

    // Create a new activity document
    const newActivity = new Activity({ id, name, duration, caloriesBurnt });

    // Save the new activity to the database
    await newActivity.save();

    // Respond with the saved activity data
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ message: 'Failed to log activity' });
  }
});

// Route for updating activity
app.put('/api/activities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, duration, caloriesBurnt } = req.body;
    const updatedActivity = await Activity.findByIdAndUpdate(id, { 'name': name, 'duration': duration, 'caloriesBurnt': caloriesBurnt }, { new: true });
    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json({ message: 'Activity updated successfully', updatedActivity });
  } catch (error) {
    res.status(500).json({ message: 'Error updating activity' });
  }
});

// Route for deleting activity
app.delete('/api/activities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting activity' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
