
import React from 'react';
import './styles.css'; 
const Services = () => {
  return (
    <div className="services-container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src="https://recreation.uic.edu/wp-content/uploads/sites/377/2019/01/REC_FTile_PersonalTrainType.jpg" alt="Service 1" className="service-image" />
          <h3 className="service-title">Personal Training</h3>
          <p className="service-description">Achieve your fitness goals with personalized training sessions tailored to your needs and preferences. Our certified trainers will guide you every step of the way.</p>
        </div>
        <div className="service-card">
          <img src="https://lafayettefamilyymca.org/wp-content/uploads/2020/02/33875815_m-1200x675.jpg" alt="Service 2" className="service-image" />
          <h3 className="service-title">Group Classes</h3>
          <p className="service-description">Join our dynamic group classes for a fun and motivating workout experience. From yoga to HIIT, we offer a variety of classes to suit all fitness levels.</p>
        </div>
        <div className="service-card">
          <img src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2418117.jpg" alt="Service 3" className="service-image" />
          <h3 className="service-title">Nutritional Guidance</h3>
          <p className="service-description">Fuel your body with the right nutrients to support your fitness journey. Our nutritionists will create personalized meal plans to help you reach your goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;