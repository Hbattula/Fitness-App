import React, { lazy, Suspense } from 'react'; 
import { Link, Outlet } from 'react-router-dom'; 
import './styles.css'; 

const LazyActivities = lazy(() => import('./Activities'));

const UserProfile = () => { 
  return ( <div className="user-profile-container"> 
  <nav className="user-nav"> 
  <Link to="overview" className="nav-link">Overview</Link> 
  <Link to="activities" className="nav-link" element={<LazyActivities />}>Activities</Link>
   <Link to="settings" className="nav-link">Settings</Link> </nav> 
   <div className="user-content"> 
   <Suspense fallback={<div>Loading...</div>}>
     <Outlet /> 
     </Suspense> 
     </div> 
     </div> 
     
  );
 };

export default UserProfile;