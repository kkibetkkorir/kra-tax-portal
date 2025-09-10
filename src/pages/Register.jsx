import React from 'react';
import './Register.css';

document.addEventListener('DOMContentLoaded', function () {
  // Toggle password visibility
  const togglePassword = document.getElementById('togglePassword');
  const toggleConfirmPassword = document.getElementById(
    'toggleConfirmPassword'
  );
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const strengthMeter = document.getElementById('strengthMeter');

  togglePassword.addEventListener('click', function () {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle eye icon
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
  });

  toggleConfirmPassword.addEventListener('click', function () {
    const type =
      confirmPasswordInput.getAttribute('type') === 'password'
        ? 'text'
        : 'password';
    confirmPasswordInput.setAttribute('type', type);

    // Toggle eye icon
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
  });

  // Password strength checker
  passwordInput.addEventListener('input', function () {
    const password = this.value;
    let strength = 0;

    // Check password criteria
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Update criteria indicators
    document
      .getElementById('lengthCriteria')
      .classList.toggle('criteria-met', hasMinLength);
    document
      .getElementById('numberCriteria')
      .classList.toggle('criteria-met', hasNumber);
    document
      .getElementById('specialCriteria')
      .classList.toggle('criteria-met', hasSpecialChar);

    // Calculate strength
    if (hasMinLength) strength += 33;
    if (hasNumber) strength += 33;
    if (hasSpecialChar) strength += 34;

    // Update strength meter
    strengthMeter.style.width = strength + '%';

    // Update meter color
    if (strength < 33) {
      strengthMeter.style.background = '#e53e3e';
    } else if (strength < 66) {
      strengthMeter.style.background = '#dd6b20';
    } else {
      strengthMeter.style.background = '#38a169';
    }
  });

  // Form submission
  const registerForm = document.querySelector('.auth-form');
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const idNumber = document.getElementById('idNumber').value;
    const userType = document.getElementById('userType').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !idNumber ||
      !userType ||
      !password ||
      !confirmPassword
    ) {
      alert('Please fill in all required fields');
      return;
    }

    if (!terms) {
      alert('You must agree to the Terms of Service');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // In a real application, this would submit to a server
    alert(
      'Registration functionality would be implemented here. Redirecting to verification...'
    );
    // window.location.href = 'verification.html';
  });
});
function Register() {
  return (
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <div class="logo">
            <div class="logo-icon">
              <i class="fas fa-landmark"></i>
            </div>
            <div class="logo-text">KRA Portal</div>
          </div>
          <h1 class="auth-title">Create Account</h1>
          <p class="auth-subtitle">Register for KRA online services</p>
        </div>

        <div class="auth-body">
          <div class="auth-form">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>

              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div class="form-group">
              <label for="idNumber">ID Number</label>
              <input
                type="text"
                id="idNumber"
                placeholder="Enter your ID number"
              />
            </div>

            <div class="form-group">
              <label for="userType">I am a:</label>
              <select id="userType">
                <option value="">Select user type</option>
                <option value="individual">Individual Taxpayer</option>
                <option value="business">Business Owner</option>
                <option value="employer">Employer</option>
                <option value="taxAgent">Tax Agent</option>
              </select>
            </div>

            <div class="form-group password-toggle">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
              />
              <span class="toggle-password" id="togglePassword">
                <i class="fas fa-eye"></i>
              </span>

              <div class="password-strength">
                <div class="strength-meter" id="strengthMeter"></div>
              </div>

              <div class="password-criteria">
                <div class="criteria-item" id="lengthCriteria">
                  <i class="fas fa-circle"></i>
                  <span>At least 8 characters</span>
                </div>
                <div class="criteria-item" id="numberCriteria">
                  <i class="fas fa-circle"></i>
                  <span>Contains a number</span>
                </div>
                <div class="criteria-item" id="specialCriteria">
                  <i class="fas fa-circle"></i>
                  <span>Contains a special character</span>
                </div>
              </div>
            </div>

            <div class="form-group password-toggle">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
              <span class="toggle-password" id="toggleConfirmPassword">
                <i class="fas fa-eye"></i>
              </span>
            </div>

            <div class="form-options">
              <input type="checkbox" id="terms" />
              <label for="terms">
                I agree to the <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <div class="form-options">
              <input type="checkbox" id="notifications" />
              <label for="notifications">
                Send me important updates and notifications
              </label>
            </div>

            <button class="btn btn-primary">
              <i class="fas fa-user-plus"></i> Create Account
            </button>

            <div class="auth-divider">
              <span>Or register with</span>
            </div>

            <button class="btn btn-outline">
              <i class="fas fa-mobile-alt"></i> Register with M-Pesa
            </button>
          </div>

          <div class="auth-footer">
            <p>
              Already have an account? <a href="login.html">Sign in</a>
            </p>
          </div>
        </div>
      </div>

      <div class="auth-switch">
        <p>Need help with registration?</p>
        <button class="btn btn-outline">
          <i class="fas fa-headset"></i> Contact Support
        </button>
      </div>
    </div>
  );
}

export default Register;
