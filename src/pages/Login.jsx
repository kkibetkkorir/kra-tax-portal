import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // In a real application, this would submit to a server
    alert(
      'Login functionality would be implemented here. Redirecting to dashboard...'
    );
    // window.location.href = 'dashboard.html';
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
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to access your tax services</p>
        </div>

        <div className="auth-body">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group password-toggle">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <span
                className="toggle-password"
                id="togglePassword"
                onClick={togglePasswordVisibility}
              >
                <i
                  className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
                ></i>
              </span>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary">
              <i className="fas fa-sign-in-alt"></i> Sign In
            </button>

            <div className="auth-divider">
              <span>Or continue with</span>
            </div>

            <button type="button" className="btn btn-outline">
              <i className="fas fa-mobile-alt"></i> Sign in with M-Pesa
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account? <a href="register.html">Create account</a>
            </p>
          </div>
        </div>
      </div>

      <div className="auth-switch">
        <p>Need help with your account?</p>
        <button className="btn btn-outline">
          <i className="fas fa-headset"></i> Contact Support
        </button>
      </div>
    </div>
  );
}

export default Login;
