import React, { useState } from 'react';
import './styles.css'; 
const Settings = () => {
  const [notification, setNotification] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleNotification = () => {
    setNotification(prevState => !prevState);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  };

  return (
    <div className="settings-container">
      <h2 className={`section-title ${theme === 'dark' ? 'dark-mode' : ''}`}>Settings</h2>
      <div className="setting-item">
        <p className={`setting-label ${theme === 'dark' ? 'dark-mode' : ''}`}>Notifications</p>
        <label className={`toggle-switch ${theme === 'dark' ? 'dark-mode' : ''}`}>
          <input type="checkbox" checked={notification} onChange={toggleNotification} />
          <span className={`slider round ${theme === 'dark' ? 'dark-mode' : ''}`}></span>
        </label>
      </div>
      <div className="setting-item">
        <p className={`setting-label ${theme === 'dark' ? 'dark-mode' : ''}`}>Theme</p>
        <button className={`theme-button ${theme === 'dark' ? 'dark-mode' : ''}`} onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
