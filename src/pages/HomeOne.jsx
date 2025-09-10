import React from 'react';
import './HomeOne.css';

const HomeOne = () => {
  const handleGetStarted = () => {
    alert('Get Started button clicked!');
  };

  const handleCardClick = (type) => {
    // In a real app, this would navigate to the appropriate page
    alert(`Navigating to ${type}`);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Kenya Revenue Authority Services Portal</h1>
          <p>
            Access all KRA services, guides, and information in one convenient
            platform. File returns, make payments, and stay updated with the
            latest tax news.
          </p>
          <button className="btn btn-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container">
        {/* Services Section */}
        <section>
          <h2 className="section-title">Our Services</h2>
          <div className="card-grid">
            <div className="card" onClick={() => handleCardClick('Tax Filing')}>
              <div className="card-img">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <div className="card-content">
                <h3>Tax Filing</h3>
                <p>
                  File your income tax returns electronically with our
                  simplified process. Stay compliant with KRA regulations.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  View Service <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              onClick={() => handleCardClick('Payment Solutions')}
            >
              <div className="card-img">
                <i className="fas fa-credit-card"></i>
              </div>
              <div className="card-content">
                <h3>Payment Solutions</h3>
                <p>
                  Make secure payments for taxes, fines, and other KRA services
                  through multiple payment options.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  View Service <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              onClick={() => handleCardClick('PIN Registration')}
            >
              <div className="card-img">
                <i className="fas fa-id-card"></i>
              </div>
              <div className="card-content">
                <h3>PIN Registration</h3>
                <p>
                  Apply for a KRA PIN, update your details, or request
                  replacement for lost PIN certificates.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  View Service <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* User Guide Section */}
        <section>
          <h2 className="section-title">User Guides</h2>
          <div className="card-grid">
            <div
              className="card"
              onClick={() => handleCardClick('First Time Filing')}
            >
              <div className="card-img">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="card-content">
                <h3>First Time Filing</h3>
                <p>
                  Step-by-step guide for first-time tax filers. Understand the
                  process and requirements.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  Read Guide <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="card" onClick={() => handleCardClick('Using iTax')}>
              <div className="card-img">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="card-content">
                <h3>Using iTax</h3>
                <p>
                  Comprehensive guide to using the iTax platform for all your
                  tax needs.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  Read Guide <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="card" onClick={() => handleCardClick('FAQs')}>
              <div className="card-img">
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="card-content">
                <h3>FAQs</h3>
                <p>
                  Find answers to frequently asked questions about KRA services
                  and procedures.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  Read Guide <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="section-title">From Our Blog</h2>
          <div className="card-grid">
            <div
              className="card"
              onClick={() => handleCardClick('Tax Deadlines')}
            >
              <div className="card-img">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="card-content">
                <h3>Tax Deadlines for 2023</h3>
                <p>
                  Important dates and deadlines for filing returns and making
                  payments in 2023.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  Read Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              onClick={() => handleCardClick('New Tax Regulations')}
            >
              <div className="card-img">
                <i className="fas fa-gavel"></i>
              </div>
              <div className="card-content">
                <h3>New Tax Regulations</h3>
                <p>
                  Learn about the latest changes to tax laws and how they might
                  affect you.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  Read Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="card"
              onClick={() => handleCardClick('Tax Saving Tips')}
            >
              <div className="card-img">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="card-content">
                <h3>Tax Saving Tips</h3>
                <p>
                  Legitimate ways to minimize your tax liability while remaining
                  compliant.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="read-more">
                  Read Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeOne;
