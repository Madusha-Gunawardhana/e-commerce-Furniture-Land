import React from 'react';
import NavBar from './NavBar'; // Import your NavBar component
import Footer from './Footer'; // Import your Footer component
import '../style/login.css'; // Import the SignUp styles

function SignUp() {
  return (
    <div>
      <NavBar />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
