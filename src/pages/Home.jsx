import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [activeService, setActiveService] = useState(null);

  const handleGetStarted = () => {
    alert('Get Started button clicked!');
  };

  const handleCardClick = (index, type) => {
    setActiveService(`${type}-${index}`);
    // In a real application, you would navigate to the appropriate page
  };

  const services = [
    {
      icon: 'fas fa-file-invoice-dollar',
      title: 'Tax Filing',
      description:
        'File your income tax returns electronically with our simplified process. Stay compliant with KRA regulations.',
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Payment Solutions',
      description:
        'Make secure payments for taxes, fines, and other KRA services through multiple payment options.',
    },
    {
      icon: 'fas fa-id-card',
      title: 'PIN Registration',
      description:
        'Apply for a KRA PIN, update your details, or request replacement for lost PIN certificates.',
    },
  ];

  const guides = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'First Time Filing',
      description:
        'Step-by-step guide for first-time tax filers. Understand the process and requirements.',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Using iTax',
      description:
        'Comprehensive guide to using the iTax platform for all your tax needs.',
    },
    {
      icon: 'fas fa-question-circle',
      title: 'FAQs',
      description:
        'Find answers to frequently asked questions about KRA services and procedures.',
    },
  ];

  const blogPosts = [
    {
      icon: 'fas fa-chart-line',
      title: 'Tax Deadlines for 2023',
      description:
        'Important dates and deadlines for filing returns and making payments in 2023.',
    },
    {
      icon: 'fas fa-gavel',
      title: 'New Tax Regulations',
      description:
        'Learn about the latest changes to tax laws and how they might affect you.',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Tax Saving Tips',
      description:
        'Legitimate ways to minimize your tax liability while remaining compliant.',
    },
  ];

  return (
    <div className="home">
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

      <main className="container">
        {/* Services Section */}
        <section>
          <h2 className="section-title">Our Services</h2>
          <div className="card-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card ${
                  activeService === `service-${index}` ? 'active' : ''
                }`}
                onClick={() => handleCardClick(index, 'service')}
              >
                <div className="card-img">
                  <i className={service.icon}></i>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="read-more"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Service <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Guide Section */}
        <section>
          <h2 className="section-title">User Guides</h2>
          <div className="card-grid">
            {guides.map((guide, index) => (
              <div
                key={index}
                className={`card ${
                  activeService === `guide-${index}` ? 'active' : ''
                }`}
                onClick={() => handleCardClick(index, 'guide')}
              >
                <div className="card-img">
                  <i className={guide.icon}></i>
                </div>
                <div className="card-content">
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="read-more"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="section-title">From Our Blog</h2>
          <div className="card-grid">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`card ${
                  activeService === `blog-${index}` ? 'active' : ''
                }`}
                onClick={() => handleCardClick(index, 'blog')}
              >
                <div className="card-img">
                  <i className={post.icon}></i>
                </div>
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="read-more"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read Article <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
