
import React from 'react';
import '../css/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to ProfferNet</h1>
        <p>Your one-stop platform for project collaboration.</p>
        <h2 className="catchy-line">Transform Your Ideas into Impactful Projects!</h2>
        <button>Get Started</button>
      </section>
    </div>
  );
};

export default Home;
