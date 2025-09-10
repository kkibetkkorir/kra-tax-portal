import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    idNumber: '',
    userType: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
    notifications: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasMinLength) strength += 33;
    if (hasNumber) strength += 33;
    if (hasSpecialChar) strength += 34;

    setPasswordStrength(strength);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.idNumber || !formData.userType || !formData.password || 
        !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.terms) {
      setError('You must agree to the Terms of Service');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (passwordStrength < 66) {
      setError('Please choose a stronger password');
      return;
    }

    setLoading(true);

    try {
      await signup(formData.email, formData.password, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        idNumber: formData.idNumber,
        userType: formData.userType,
        phone: formData.phone
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('An account with this email already exists');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/weak-password':
          setError('Password is too weak');
          break;
        default:
          setError('Registration failed. Please try again');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Register for KRA online services</p>
        </div>

        <div className="auth-body">
          {error && (
            <div style={{
              background: '#fed7d7',
              color: '#c53030',
              padding: '0.75rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              fontSize: '0.9rem',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="idNumber">ID Number</label>
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleInputChange}
                placeholder="Enter your ID number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="userType">I am a:</label>
              <select 
                id="userType" 
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select user type</option>
                <option value="individual">Individual Taxpayer</option>
                <option value="business">Business Owner</option>
                <option value="employer">Employer</option>
                <option value="taxAgent">Tax Agent</option>
              </select>
            </div>

            <div className="form-group password-toggle">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                required
              />
              <span 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
              </span>

              <div className="password-strength">
                <div 
                  className="strength-meter" 
                  style={{
                    width: `${passwordStrength}%`,
                    background: passwordStrength < 33 ? '#e53e3e' : 
                               passwordStrength < 66 ? '#dd6b20' : '#38a169'
                  }}
                ></div>
              </div>

              <div className="password-criteria">
                <div className={`criteria-item ${formData.password.length >= 8 ? 'criteria-met' : ''}`}>
                  <i className="fas fa-circle"></i>
                  <span>At least 8 characters</span>
                </div>
                <div className={`criteria-item ${/\d/.test(formData.password) ? 'criteria-met' : ''}`}>
                  <i className="fas fa-circle"></i>
                  <span>Contains a number</span>
                </div>
                <div className={`criteria-item ${/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? 'criteria-met' : ''}`}>
                  <i className="fas fa-circle"></i>
                  <span>Contains a special character</span>
                </div>
              </div>
            </div>

            <div className="form-group password-toggle">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
              />
              <span 
                className="toggle-password" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
              </span>
            </div>

            <div className="form-options">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <div className="form-options">
              <input 
                type="checkbox" 
                id="notifications" 
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
              />
              <label htmlFor="notifications">
                Send me important updates and notifications
              </label>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              <i className={loading ? "fas fa-spinner fa-spin" : "fas fa-user-plus"}></i> 
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="auth-divider">
              <span>Or register with</span>
            </div>

            <button type="button" className="btn btn-outline">
              <i className="fas fa-mobile-alt"></i> Register with M-Pesa
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="auth-switch">
        <p>Need help with registration?</p>
        <Link to="/support-center" className="btn btn-outline">
          <i className="fas fa-headset"></i> Contact Support
        </Link>
      </div>
    </div>
  );
}

export default Register;
