import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Header from './styling/Header';
import Footer from './styling/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import Overview from './components/Overview';
import Activities from './components/Activities';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <div className="main-container">
            <Routes>
              <Route
                path="/login"
                element={<Login onLogin={handleLogin} />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="*"
                element={
                  isAuthenticated ? (
                    <Routes>
                      <Route path="/" element={<Home />}>
                        <Route path="about" element={<AboutUs />} />
                        <Route path="services" element={<Services />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="user-profile" element={<UserProfile />}>
                          <Route path="overview" element={<Overview />} />
                          <Route path="activities" element={<Activities />} />
                          <Route path="settings" element={<Settings />} />
                        </Route>
                      </Route>
                    </Routes>
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
