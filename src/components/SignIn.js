import React, { useState } from 'react';
import NavBar from './NavBar'; // Import your NavBar component
import Footer from './Footer'; // Import your Footer component
import '../style/login.css'; // Import the SignUp styles

function SignUp() {
    const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSwitch = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted:', formData);
  };
  return (
    <div>
      <NavBar />
      <div className="signup-container">
        <h2>Sign In</h2>
        <form>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              Remember Me
            </label>

          <button type="submit">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
