import React, { useState } from 'react';
import './SupportCenter.css';

const SupportCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Support categories and questions
  const supportData = {
    general: [
      {
        question: 'How do I register for a KRA PIN?',
        answer:
          'You can register for a KRA PIN online through the iTax platform by providing your personal details, identification documents, and contact information. The process typically takes 24-48 hours for approval.',
      },
      {
        question: 'What should I do if I forget my iTax password?',
        answer:
          "Click on the 'Forgot Password' link on the iTax login page. You'll need to provide your KRA PIN and email address to receive password reset instructions.",
      },
      {
        question: 'How can I update my contact information with KRA?',
        answer:
          "Log in to your iTax account, go to the 'Profile' section, and update your contact details. Remember to save the changes before exiting.",
      },
    ],
    filing: [
      {
        question: 'When is the deadline for filing income tax returns?',
        answer:
          'The deadline for individual income tax returns is June 30th of each year. Corporate returns are due within 6 months after the end of the financial year.',
      },
      {
        question: 'What documents do I need to file my tax return?',
        answer:
          "You'll need your KRA PIN, income statements (P9 form), receipts for deductible expenses, bank statements, and any other relevant financial documents.",
      },
      {
        question: 'How can I correct errors in a submitted return?',
        answer:
          "You can amend a submitted return within 5 years from the filing date. Log in to iTax, navigate to the 'Amend Return' section, and make the necessary corrections.",
      },
    ],
    payment: [
      {
        question: 'What payment methods are accepted by KRA?',
        answer:
          'KRA accepts MPesa, bank transfers, debit/credit cards, and payments through appointed banks. You can generate a payment slip on iTax for most payment methods.',
      },
      {
        question:
          'How long does it take for payments to reflect in my KRA account?',
        answer:
          "MPesa payments reflect within a few hours, while bank transfers may take 24-48 hours. If your payment hasn't reflected after 48 hours, contact KRA support.",
      },
      {
        question: 'What should I do if I overpay my taxes?',
        answer:
          'Overpaid taxes can be refunded or offset against future tax liabilities. Submit a refund request through iTax, and it will be processed within 90 days.',
      },
    ],
    certificates: [
      {
        question: 'How do I apply for a Tax Compliance Certificate?',
        answer:
          "Log in to iTax, navigate to the 'Applications' section, and select 'Tax Compliance Certificate'. Ensure all your tax obligations are up to date before applying.",
      },
      {
        question: 'How long does it take to get a TCC?',
        answer:
          'For compliant taxpayers, TCCs are typically issued immediately. If there are compliance issues, it may take longer while you resolve them.',
      },
      {
        question: 'What is the validity period of a TCC?',
        answer:
          "A Tax Compliance Certificate is valid for 12 months from the date of issue. You'll need to renew it annually.",
      },
    ],
  };

  const contactOptions = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      description: '+254 20 4 999 999',
      details: 'Monday-Friday, 8:00 AM - 5:00 PM',
      action: 'Call Now',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      description: 'support@kra.go.ke',
      details: 'Response within 24 hours',
      action: 'Send Email',
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      description: 'Available during business hours',
      details: 'Instant support from our agents',
      action: 'Start Chat',
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Office',
      description: 'Times Tower, Haile Selassie Ave',
      details: 'Nairobi, Kenya',
      action: 'Get Directions',
    },
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="support-center">
      <div className="support-header">
        <div className="container">
          <h1>KRA Support Center</h1>
          <p>
            Find answers to common questions or get help from our support team
          </p>

          <div className="search-box">
            <input type="text" placeholder="Search for help articles..." />
            <button>
              <i className="fas fa-search"></i> Search
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="support-content">
          <div className="support-main">
            <h2>Frequently Asked Questions</h2>
            <p>Browse through common questions organized by category</p>

            <div className="category-tabs">
              <button
                className={activeCategory === 'general' ? 'active' : ''}
                onClick={() => setActiveCategory('general')}
              >
                <i className="fas fa-question-circle"></i> General
              </button>
              <button
                className={activeCategory === 'filing' ? 'active' : ''}
                onClick={() => setActiveCategory('filing')}
              >
                <i className="fas fa-file-alt"></i> Filing
              </button>
              <button
                className={activeCategory === 'payment' ? 'active' : ''}
                onClick={() => setActiveCategory('payment')}
              >
                <i className="fas fa-credit-card"></i> Payments
              </button>
              <button
                className={activeCategory === 'certificates' ? 'active' : ''}
                onClick={() => setActiveCategory('certificates')}
              >
                <i className="fas fa-certificate"></i> Certificates
              </button>
            </div>

            <div className="faq-list">
              {supportData[activeCategory].map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeQuestion === index ? 'active' : ''
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className="faq-question">
                    <h3>{item.question}</h3>
                    <i
                      className={`fas ${
                        activeQuestion === index
                          ? 'fa-chevron-up'
                          : 'fa-chevron-down'
                      }`}
                    ></i>
                  </div>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                    {activeQuestion === index && (
                      <div className="faq-helpful">
                        <p>Was this helpful?</p>
                        <div className="helpful-buttons">
                          <button>
                            <i className="fas fa-thumbs-up"></i> Yes
                          </button>
                          <button>
                            <i className="fas fa-thumbs-down"></i> No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="additional-help">
              <h3>Need more help?</h3>
              <p>
                If you couldn't find the answer to your question, try these
                additional resources:
              </p>

              <div className="help-resources">
                <a href="#" className="help-card">
                  <i className="fas fa-book"></i>
                  <h4>User Guides</h4>
                  <p>Step-by-step instructions for using iTax</p>
                </a>

                <a href="#" className="help-card">
                  <i className="fas fa-video"></i>
                  <h4>Video Tutorials</h4>
                  <p>Watch how-to videos for common tasks</p>
                </a>

                <a href="#" className="help-card">
                  <i className="fas fa-download"></i>
                  <h4>Forms & Downloads</h4>
                  <p>Download tax forms and other documents</p>
                </a>

                <a href="#" className="help-card">
                  <i className="fas fa-calendar-alt"></i>
                  <h4>Tax Calendar</h4>
                  <p>Important tax dates and deadlines</p>
                </a>
              </div>
            </div>
          </div>

          <div className="support-sidebar">
            <div className="contact-options">
              <h3>Contact Support</h3>
              <p>Get in touch with our support team</p>

              {contactOptions.map((option, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <i className={option.icon}></i>
                  </div>
                  <div className="contact-info">
                    <h4>{option.title}</h4>
                    <p className="contact-desc">{option.description}</p>
                    <p className="contact-details">{option.details}</p>
                  </div>
                  <button className="contact-action">{option.action}</button>
                </div>
              ))}
            </div>

            <div className="support-status">
              <h3>System Status</h3>
              <div className="status-item">
                <span className="status-label">iTax Portal</span>
                <span className="status-indicator operational">
                  Operational
                </span>
              </div>
              <div className="status-item">
                <span className="status-label">Payment System</span>
                <span className="status-indicator operational">
                  Operational
                </span>
              </div>
              <div className="status-item">
                <span className="status-label">Mobile Services</span>
                <span className="status-indicator operational">
                  Operational
                </span>
              </div>
              <p className="status-update">Last updated: Today, 10:45 AM</p>
            </div>

            <div className="emergency-notice">
              <h4>
                <i className="fas fa-exclamation-triangle"></i> Important Notice
              </h4>
              <p>
                The iTax system will be unavailable on Sunday, 12th November
                from 2:00 AM to 6:00 AM for scheduled maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
