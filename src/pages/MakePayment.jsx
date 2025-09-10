import React from 'react';
import './MakePayment.css';
// Simple page navigation for demo purposes
document.addEventListener('DOMContentLoaded', function () {
  // Form step functionality
  const steps = document.querySelectorAll('.step');
  const stepContents = document.querySelectorAll('.step-content');
  const progressBar = document.querySelector('.progress-bar');
  let currentStep = 1;

  function updateProgress() {
    // Update progress bar
    const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;

    // Update steps
    steps.forEach((step, index) => {
      step.classList.remove('active', 'completed');
      if (index + 1 < currentStep) {
        step.classList.add('completed');
      } else if (index + 1 === currentStep) {
        step.classList.add('active');
      }
    });

    // Show current step content
    stepContents.forEach((content, index) => {
      content.style.display = index + 1 === currentStep ? 'block' : 'none';
    });
  }

  document.querySelectorAll('.next-step').forEach((button) => {
    button.addEventListener('click', function () {
      if (currentStep < steps.length) {
        currentStep++;
        updateProgress();
      }
    });
  });

  document.querySelectorAll('.prev-step').forEach((button) => {
    button.addEventListener('click', function () {
      if (currentStep > 1) {
        currentStep--;
        updateProgress();
      }
    });
  });
  // Payment method selection
  const paymentMethods = document.querySelectorAll('.payment-method');
  paymentMethods.forEach((method) => {
    method.addEventListener('click', function () {
      paymentMethods.forEach((m) => m.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Form submission
  document
    .getElementById('payment-form')
    .addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Payment processing would be implemented here.');
    });
});

function MakePayment() {
  return (
    <div class="payment-container" id="payment-page">
      <h2 class="section-title">Make a Payment</h2>

      <div class="card">
        <div class="card-content">
          <h3 style={{ marginTop: 0, color: 'var(--kra-blue)' }}>
            Payment Summary
          </h3>

          <div class="summary-card">
            <div class="summary-item">
              <span>Tax Type:</span>
              <span>Income Tax</span>
            </div>
            <div class="summary-item">
              <span>Period:</span>
              <span>January - June 2025</span>
            </div>
            <div class="summary-item">
              <span>Reference Number:</span>
              <span>ITX-2025-087654</span>
            </div>
            <div class="summary-item summary-total">
              <span>Amount Due:</span>
              <span>KSh 24,500</span>
            </div>
          </div>

          <h3 style={{ color: 'var(--kra-blue)' }}>Select Payment Method</h3>

          <div class="payment-methods">
            <div class="payment-method selected">
              <div class="payment-icon">
                <i class="fas fa-credit-card"></i>
              </div>
              <div>Card Payment</div>
            </div>

            <div class="payment-method">
              <div class="payment-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div>Mobile Money</div>
            </div>

            <div class="payment-method">
              <div class="payment-icon">
                <i class="fas fa-university"></i>
              </div>
              <div>Bank Transfer</div>
            </div>

            <div class="payment-method">
              <div class="payment-icon">
                <i class="fas fa-qrcode"></i>
              </div>
              <div>QR Code</div>
            </div>
          </div>

          <form id="payment-form">
            <div class="form-row">
              <div class="form-group">
                <label for="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div class="form-group">
                <label for="card-name">Name on Card</label>
                <input type="text" id="card-name" placeholder="John Mwangi" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" placeholder="MM/YY" />
              </div>

              <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" />
                <div class="form-hint">3 digits on the back of your card</div>
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
              <div class="form-hint">
                Payment receipt will be sent to this email
              </div>
            </div>

            <div class="form-group">
              <label>
                <input type="checkbox" /> Save card for future payments
              </label>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button type="submit" class="btn btn-success">
                <i class="fas fa-lock"></i> Pay KSh 24,500
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h3 style={{ marginTop: 0, color: 'var(--kra-blue)' }}>Need Help?</h3>
          <p>
            If you encounter any issues with your payment, please contact our
            support team:
          </p>
          <ul>
            <li>Phone: +254 20 4 999 999</li>
            <li>Email: support@kra.go.ke</li>
            <li>Live Chat: Available during business hours</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MakePayment;
