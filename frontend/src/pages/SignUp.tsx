import React from 'react';
import '../css/SignUp.css';  

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
