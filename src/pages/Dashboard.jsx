import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [activePage, setActivePage] = useState('dashboard');

  // Sample data for the dashboard
  const dashboardData = {
    taxOverview: {
      totalPaid: 42150,
      pendingPayments: 0,
      complianceStatus: 'Compliant',
    },
    recentFiling: {
      type: 'Income Tax Return',
      period: 'Jan - Jun 2023',
      status: 'Processed',
    },
    importantDates: {
      nextDeadline: '20 Jul 2023',
      daysRemaining: 12,
      lastFiling: '30 Jun 2023',
    },
  };

  const documents = [
    {
      name: 'Income Tax Return - Jan to Jun 2023',
      date: 'Submitted: 30 Jun 2023',
      type: 'pdf',
    },
    {
      name: 'Payment Receipt - ITX20230630',
      date: 'Paid: 15 Jun 2023',
      type: 'pdf',
    },
    {
      name: 'Tax Compliance Certificate',
      date: 'Valid until: 15 Jan 2024',
      type: 'certificate',
    },
    {
      name: 'PIN Registration Certificate',
      date: 'Issued: 10 Mar 2020',
      type: 'contract',
    },
  ];

  const notifications = [
    {
      title: 'Tax Return Processed',
      content:
        'Your income tax return for Jan-Jun 2023 has been successfully processed.',
      time: 'Today, 10:23 AM',
      unread: true,
    },
    {
      title: 'Upcoming Deadline',
      content: 'Reminder: VAT return for June 2023 is due on 20th July.',
      time: 'Yesterday, 3:45 PM',
      unread: false,
    },
    {
      title: 'Compliance Certificate',
      content: 'Your Tax Compliance Certificate is ready for download.',
      time: '2 days ago',
      unread: false,
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <i className="fas fa-landmark"></i>
              </div>
              <div className="logo-text">KRA Portal</div>
            </div>

            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    className={activePage === 'dashboard' ? 'active' : ''}
                    onClick={() => handlePageChange('dashboard')}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activePage === 'services' ? 'active' : ''}
                    onClick={() => handlePageChange('services')}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activePage === 'guide' ? 'active' : ''}
                    onClick={() => handlePageChange('guide')}
                  >
                    Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activePage === 'blog' ? 'active' : ''}
                    onClick={() => handlePageChange('blog')}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activePage === 'account' ? 'active' : ''}
                    onClick={() => handlePageChange('account')}
                  >
                    Account
                  </a>
                </li>
              </ul>
            </nav>

            <div className="auth-buttons">
              <button className="btn btn-outline">Login</button>
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* Page Navigation */}
        <div className="page-nav">
          <a
            href="#"
            className={activePage === 'dashboard' ? 'active' : ''}
            onClick={() => handlePageChange('dashboard')}
          >
            <i className="fas fa-th-large"></i> Dashboard
          </a>
          <a
            href="#"
            className={activePage === 'services' ? 'active' : ''}
            onClick={() => handlePageChange('services')}
          >
            <i className="fas fa-concierge-bell"></i> Services
          </a>
          <a
            href="#"
            className={activePage === 'guide' ? 'active' : ''}
            onClick={() => handlePageChange('guide')}
          >
            <i className="fas fa-book"></i> Guides
          </a>
          <a
            href="#"
            className={activePage === 'account' ? 'active' : ''}
            onClick={() => handlePageChange('account')}
          >
            <i className="fas fa-user"></i> Account
          </a>
        </div>

        {/* Dashboard Page */}
        {activePage === 'dashboard' && (
          <div className="screen-container active">
            <div className="screen-body">
              <h2 className="section-title">Taxpayer Dashboard</h2>

              <div className="card-grid">
                <div className="card">
                  <div className="card-header">
                    <i className="fas fa-receipt"></i> Tax Overview
                  </div>
                  <div className="card-body">
                    <p>View your tax status, payments, and filing history</p>
                    <div className="dashboard-stats">
                      <div className="stat-item">
                        <span>Total Paid (2023):</span>
                        <span className="stat-value">
                          KSh{' '}
                          {dashboardData.taxOverview.totalPaid.toLocaleString()}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span>Pending Payments:</span>
                        <span className="stat-value">
                          KSh{' '}
                          {dashboardData.taxOverview.pendingPayments.toLocaleString()}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span>Compliance Status:</span>
                        <span className="status-badge status-active">
                          {dashboardData.taxOverview.complianceStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-outline">
                      View History
                    </a>
                    <a href="#" className="btn btn-primary">
                      Make Payment
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <i className="fas fa-file-invoice"></i> Recent Filing
                  </div>
                  <div className="card-body">
                    <p>Your most recent tax filing submission</p>
                    <div className="dashboard-stats">
                      <div className="stat-item">
                        <span>Type:</span>
                        <span>{dashboardData.recentFiling.type}</span>
                      </div>
                      <div className="stat-item">
                        <span>Period:</span>
                        <span>{dashboardData.recentFiling.period}</span>
                      </div>
                      <div className="stat-item">
                        <span>Status:</span>
                        <span className="status-badge status-active">
                          {dashboardData.recentFiling.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-outline">
                      View Details
                    </a>
                    <a href="#" className="btn btn-primary">
                      File Return
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <i className="fas fa-calendar-alt"></i> Important Dates
                  </div>
                  <div className="card-body">
                    <p>Upcoming deadlines and events</p>
                    <div className="dashboard-stats">
                      <div className="stat-item">
                        <span>Next Filing Deadline:</span>
                        <span>{dashboardData.importantDates.nextDeadline}</span>
                      </div>
                      <div className="stat-item">
                        <span>Days Remaining:</span>
                        <span className="stat-value">
                          {dashboardData.importantDates.daysRemaining} days
                        </span>
                      </div>
                      <div className="stat-item">
                        <span>Last Filing:</span>
                        <span>{dashboardData.importantDates.lastFiling}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-outline">
                      View Calendar
                    </a>
                    <a href="#" className="btn btn-primary">
                      Set Reminder
                    </a>
                  </div>
                </div>
              </div>

              <h2 className="section-title">Quick Actions</h2>

              <div className="card-grid">
                <div className="card">
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <div className="quick-action-icon">
                      <i className="fas fa-file-import"></i>
                    </div>
                    <h3>File Return</h3>
                    <p>Submit your tax returns online</p>
                    <a href="#" className="btn btn-primary">
                      Start Filing
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <div className="quick-action-icon">
                      <i className="fas fa-credit-card"></i>
                    </div>
                    <h3>Make Payment</h3>
                    <p>Pay your tax obligations</p>
                    <a href="#" className="btn btn-primary">
                      Pay Now
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <div className="quick-action-icon">
                      <i className="fas fa-file-certificate"></i>
                    </div>
                    <h3>Certificates</h3>
                    <p>Download compliance certificates</p>
                    <a href="#" className="btn btn-primary">
                      View Certificates
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <div className="quick-action-icon">
                      <i className="fas fa-question-circle"></i>
                    </div>
                    <h3>Get Help</h3>
                    <p>Find answers to your questions</p>
                    <a href="#" className="btn btn-primary">
                      Support Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Page */}
        {activePage === 'services' && (
          <div className="screen-container active">
            <div className="screen-body">
              <h2 className="section-title">KRA Services</h2>

              <div className="card">
                <div className="card-content">
                  <h3>Tax Filing</h3>
                  <p>
                    File your income tax returns electronically with our
                    simplified process. Stay compliant with KRA regulations.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Access Service <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>Payment Solutions</h3>
                  <p>
                    Make secure payments for taxes, fines, and other KRA
                    services through multiple payment options.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Access Service <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>PIN Registration</h3>
                  <p>
                    Apply for a KRA PIN, update your details, or request
                    replacement for lost PIN certificates.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Access Service <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>Tax Compliance Certificate</h3>
                  <p>
                    Apply for and download your tax compliance certificate
                    online.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Access Service <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>Withholding Tax</h3>
                  <p>
                    File withholding tax returns and access related services.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Access Service <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guide Page */}
        {activePage === 'guide' && (
          <div className="screen-container active">
            <div className="screen-body">
              <h2 className="section-title">KRA User Guides</h2>

              <div className="card">
                <div className="card-content">
                  <h3>First Time Filing</h3>
                  <p>
                    Step-by-step guide for first-time tax filers. Understand the
                    process and requirements to successfully file your returns.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>Using iTax</h3>
                  <p>
                    Comprehensive guide to using the iTax platform for all your
                    tax needs, from registration to filing returns.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>Tax Compliance</h3>
                  <p>
                    Learn how to remain tax compliant and avoid penalties.
                    Understand your obligations as a taxpayer.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>Payment Methods</h3>
                  <p>
                    Detailed guide on all available payment methods for settling
                    your tax obligations with KRA.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3>FAQs</h3>
                  <p>
                    Find answers to frequently asked questions about KRA
                    services, procedures, and requirements.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="read-more">
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Account Page */}
        {activePage === 'account' && (
          <div className="screen-container active">
            <div className="screen-body">
              <div className="account-header">
                <div className="avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="account-info">
                  <h2>John Mwangi</h2>
                  <p>john.mwangi@example.com</p>
                  <p>KRA PIN: A003456789X</p>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <h3>3</h3>
                  <p>Pending Actions</p>
                </div>
                <div className="stat-card">
                  <h3>8</h3>
                  <p>Completed Filings</p>
                </div>
                <div className="stat-card">
                  <h3>KSh 42,150</h3>
                  <p>Total Payments</p>
                </div>
                <div className="stat-card">
                  <h3>100%</h3>
                  <p>Compliance Rate</p>
                </div>
              </div>

              <div className="tabs">
                <div
                  className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => handleTabChange('profile')}
                >
                  Profile
                </div>
                <div
                  className={`tab ${activeTab === 'documents' ? 'active' : ''}`}
                  onClick={() => handleTabChange('documents')}
                >
                  Documents
                </div>
                <div
                  className={`tab ${activeTab === 'history' ? 'active' : ''}`}
                  onClick={() => handleTabChange('history')}
                >
                  History
                </div>
                <div
                  className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => handleTabChange('settings')}
                >
                  Settings
                </div>
              </div>

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="tab-content active">
                  <div className="form-container" style={{ maxWidth: '100%' }}>
                    <form>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '1.5rem',
                        }}
                      >
                        <div className="form-group">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            type="text"
                            id="firstname"
                            defaultValue="John"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="lastname">Last Name</label>
                          <input
                            type="text"
                            id="lastname"
                            defaultValue="Mwangi"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          defaultValue="john.mwangi@example.com"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          defaultValue="+254 712 345 678"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          id="address"
                          defaultValue="123 Main Street, Nairobi"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Update Profile
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <div className="tab-content active">
                  {documents.map((doc, index) => (
                    <div className="card" key={index}>
                      <div className="card-content">
                        <h3>{doc.name}</h3>
                        <p>{doc.date}</p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="read-more">
                          Download <i className="fas fa-download"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div className="tab-content active">
                  <div className="card">
                    <div className="card-content">
                      <h3>Income Tax Return</h3>
                      <p>Filed on: 30 Jun 2023 | Status: Processed</p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <h3>Payment Receipt</h3>
                      <p>Paid on: 15 Jun 2023 | Amount: KSh 15,200</p>
                    </div>
                    <div className="card-footer">
                      <a href="#" className="read-more">
                        View Details <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <h3>PIN Update</h3>
                      <p>Requested on: 5 May 2023 | Status: Completed</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="tab-content active">
                  <div className="form-container" style={{ maxWidth: '100%' }}>
                    <h3 style={{ marginTop: 0 }}>Account Settings</h3>

                    <div className="form-group">
                      <label>Email Notifications</label>
                      <div>
                        <label>
                          <input type="checkbox" defaultChecked /> Filing
                          reminders
                        </label>
                      </div>
                      <div>
                        <label>
                          <input type="checkbox" defaultChecked /> Payment
                          confirmations
                        </label>
                      </div>
                      <div>
                        <label>
                          <input type="checkbox" /> Newsletters
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="language">Language Preference</label>
                      <select id="language">
                        <option>English</option>
                        <option>Kiswahili</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Security</label>
                      <div>
                        <a
                          href="#"
                          style={{
                            color: 'var(--kra-light-blue)',
                            textDecoration: 'none',
                          }}
                        >
                          Change Password
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          style={{
                            color: 'var(--kra-light-blue)',
                            textDecoration: 'none',
                          }}
                        >
                          Two-Factor Authentication
                        </a>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Save Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About KRA</h3>
              <p>
                The Kenya Revenue Authority is the premier revenue collection
                agency in Kenya. Our mission is to efficiently collect revenue
                on behalf of the government.
              </p>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">User Guides</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Information</h3>
              <ul className="footer-links">
                <li>
                  <i className="fas fa-phone"></i> +254 20 4 999 999
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@kra.go.ke
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> Times Tower, Haile
                  Selassie Ave, Nairobi
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            &copy; 2023 Kenya Revenue Authority. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="bottom-nav">
        <div className="nav-items">
          <a
            href="#"
            className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => handlePageChange('dashboard')}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a
            href="#"
            className={`nav-item ${activePage === 'services' ? 'active' : ''}`}
            onClick={() => handlePageChange('services')}
          >
            <i className="fas fa-concierge-bell"></i>
            <span>Services</span>
          </a>
          <a
            href="#"
            className={`nav-item ${activePage === 'guide' ? 'active' : ''}`}
            onClick={() => handlePageChange('guide')}
          >
            <i className="fas fa-book"></i>
            <span>Guides</span>
          </a>
          <a
            href="#"
            className={`nav-item ${activePage === 'account' ? 'active' : ''}`}
            onClick={() => handlePageChange('account')}
          >
            <i className="fas fa-user"></i>
            <span>Account</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
