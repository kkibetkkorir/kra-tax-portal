import React, { useState } from 'react';
import './TaxComplianceCertificateGuide.css';

const TaxComplianceCertificateGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="tcc-container">
      <div className="tcc-header">
        <h1 className="tcc-title">Tax Compliance Certificate Guide</h1>
        <div className="tcc-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> November 15, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 12 min read
          </span>
          <span>
            <i className="fas fa-user"></i> KRA Compliance Department
          </span>
        </div>
      </div>

      <div className="tcc-nav">
        <button
          className={`tcc-nav-btn ${
            activeSection === 'overview' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('overview')}
        >
          <i className="fas fa-info-circle"></i> Overview
        </button>
        <button
          className={`tcc-nav-btn ${
            activeSection === 'requirements' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('requirements')}
        >
          <i className="fas fa-clipboard-list"></i> Requirements
        </button>
        <button
          className={`tcc-nav-btn ${
            activeSection === 'application' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('application')}
        >
          <i className="fas fa-file-alt"></i> Application
        </button>
        <button
          className={`tcc-nav-btn ${
            activeSection === 'benefits' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('benefits')}
        >
          <i className="fas fa-award"></i> Benefits
        </button>
        <button
          className={`tcc-nav-btn ${
            activeSection === 'maintenance' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('maintenance')}
        >
          <i className="fas fa-sync-alt"></i> Maintenance
        </button>
      </div>

      <div className="tcc-content">
        <div className="tcc-hero">
          <i className="fas fa-file-certificate"></i>
          <p>
            A Tax Compliance Certificate (TCC) is proof that a business or
            individual is compliant with tax obligations
          </p>
        </div>

        <section id="overview" className="tcc-section">
          <h2>
            <i className="fas fa-info-circle"></i> What is a Tax Compliance
            Certificate?
          </h2>

          <p>
            A Tax Compliance Certificate (TCC) is an official document issued by
            the Kenya Revenue Authority (KRA) that confirms a taxpayer has met
            all their tax obligations for a specific period. It serves as proof
            that you are compliant with Kenya's tax laws.
          </p>

          <p>The TCC contains important information including:</p>

          <ul>
            <li>
              <strong>Taxpayer's name</strong> and <strong>KRA PIN</strong>
            </li>
            <li>
              <strong>Certificate validity period</strong> (usually one year)
            </li>
            <li>
              <strong>Unique certificate number</strong>
            </li>
            <li>
              <strong>Issue date</strong> and <strong>expiry date</strong>
            </li>
            <li>
              <strong>QR code</strong> for verification purposes
            </li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Key Concept
            </h4>
            <p>
              The TCC is not just a document—it's a key that unlocks business
              opportunities. Many organizations require a valid TCC before
              engaging in business relationships, making it essential for
              commercial success in Kenya.
            </p>
          </div>
        </section>

        <section id="requirements" className="tcc-section">
          <h2>
            <i className="fas fa-clipboard-list"></i> Who Needs a Tax Compliance
            Certificate?
          </h2>

          <p>
            The following entities typically require a Tax Compliance
            Certificate:
          </p>

          <div className="requirements-table">
            <div className="table-header">
              <div>Entity Type</div>
              <div>Primary Use Cases</div>
              <div>Validity Period</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Businesses</strong> (Companies, Partnerships)
              </div>
              <div>Government tenders, trade licensing, bank accounts</div>
              <div>1 year</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Individual Contractors</strong>
              </div>
              <div>Contract awards, professional services</div>
              <div>1 year</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Importers/Exporters</strong>
              </div>
              <div>Customs clearance, trade permits</div>
              <div>1 year</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Landlords</strong>
              </div>
              <div>Property transactions, rental agreements</div>
              <div>1 year</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Professionals</strong> (Doctors, Lawyers, etc.)
              </div>
              <div>Professional licensing, practice registration</div>
              <div>1 year</div>
            </div>
          </div>

          <div className="info-action">
            <h4>
              <i className="fas fa-check-circle"></i> Mandatory Requirement
            </h4>
            <p>
              As of 2018, all businesses bidding for government tenders must
              have a valid TCC. This requirement has been extended to many
              private sector transactions as well, making the TCC essential for
              most commercial activities in Kenya.
            </p>
          </div>
        </section>

        <section id="application" className="tcc-section">
          <h2>
            <i className="fas fa-file-alt"></i> How to Apply for a TCC
          </h2>

          <p>
            The process of applying for a Tax Compliance Certificate involves
            several steps:
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Ensure Compliance</h3>
                <p>File all pending returns and pay any outstanding taxes</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Log in to iTax</h3>
                <p>Access your iTax account using your KRA credentials</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Navigate to TCC Section</h3>
                <p>Go to Applications > Tax Compliance Certificate</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Complete Application</h3>
                <p>Fill in all required information and declare compliance</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Submit Application</h3>
                <p>Review and submit your TCC application</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Download Certificate</h3>
                <p>Once approved, download your TCC from iTax</p>
              </div>
            </div>
          </div>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Application
              Rejection
            </h4>
            <p>
              Your TCC application may be rejected if you have unfiled returns,
              outstanding tax debts, or other compliance issues. Address all
              compliance matters before applying to avoid delays.
            </p>
          </div>
        </section>

        <section id="benefits" className="tcc-section">
          <h2>
            <i className="fas fa-award"></i> Benefits of Having a TCC
          </h2>

          <p>
            Holding a valid Tax Compliance Certificate offers numerous
            advantages:
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="benefit-title">Business Opportunities</div>
              <div className="benefit-description">
                Enables participation in government tenders and contracts
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="benefit-title">Corporate Requirements</div>
              <div className="benefit-description">
                Required for opening and maintaining corporate bank accounts
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-file-contract"></i>
              </div>
              <div className="benefit-title">Licensing & Permits</div>
              <div className="benefit-description">
                Necessary for various business licenses and permits
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="benefit-title">Compliance Proof</div>
              <div className="benefit-description">
                Demonstrates your commitment to tax compliance
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-unlock"></i>
              </div>
              <div className="benefit-title">Market Access</div>
              <div className="benefit-description">
                Often required by large corporations before engaging suppliers
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="benefit-title">Streamlined Processes</div>
              <div className="benefit-description">
                Facilitates faster processing of various government services
              </div>
            </div>
          </div>
        </section>

        <section id="maintenance" className="tcc-section">
          <h2>
            <i className="fas fa-sync-alt"></i> Maintaining Your TCC Validity
          </h2>

          <p>
            A Tax Compliance Certificate is typically valid for one year from
            the date of issue. To maintain continuous compliance:
          </p>

          <ol>
            <li>
              <strong>File returns on time:</strong> Submit all required returns
              by their due dates
            </li>
            <li>
              <strong>Pay taxes promptly:</strong> Settle any tax liabilities by
              the prescribed deadlines
            </li>
            <li>
              <strong>Update your details:</strong> Keep your contact and
              business information current in iTax
            </li>
            <li>
              <strong>Respond to notices:</strong> Address any KRA
              communications promptly
            </li>
            <li>
              <strong>Renew early:</strong> Apply for renewal at least 30 days
              before expiration
            </li>
            <li>
              <strong>Keep records:</strong> Maintain proper business and tax
              records
            </li>
          </ol>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Pro Tip
            </h4>
            <p>
              Set calendar reminders for important tax deadlines and your TCC
              expiration date. This proactive approach will help you maintain
              continuous compliance and avoid business disruptions.
            </p>
          </div>

          <h3>
            <i className="fas fa-exclamation-circle"></i> Common Reasons for TCC
            Rejection
          </h3>

          <p>
            Understanding why TCC applications get rejected can help you avoid
            common pitfalls:
          </p>

          <ul>
            <li>
              <strong>Unfiled tax returns:</strong> All returns must be filed up
              to the most recent period
            </li>
            <li>
              <strong>Outstanding tax debt:</strong> Any owed taxes must be paid
              in full
            </li>
            <li>
              <strong>Pending disputes:</strong> Ongoing tax disputes may affect
              your application
            </li>
            <li>
              <strong>Incomplete information:</strong> Missing or incorrect
              details in your application
            </li>
            <li>
              <strong>Non-compliance history:</strong> Previous compliance
              issues may delay approval
            </li>
            <li>
              <strong>Registration issues:</strong> Problems with your business
              registration details
            </li>
          </ul>

          <div className="info-quote">
            "The most common reason for TCC rejection is unfiled returns. Before
            applying, ensure all your returns are filed and any tax due is paid.
            A little preparation can save you significant time and frustration."
          </div>
        </section>

        <section className="tcc-section">
          <h2>
            <i className="fas fa-question-circle"></i> TCC Frequently Asked
            Questions
          </h2>

          <h3>
            <i className="fas fa-question"></i> How long does it take to get a
            TCC?
          </h3>
          <p>
            For compliant taxpayers, the TCC is typically issued immediately
            upon application through iTax. If there are compliance issues, it
            may take longer as you resolve them.
          </p>

          <h3>
            <i className="fas fa-question"></i> Can I get a TCC with payment
            arrangements?
          </h3>
          <p>
            Yes, if you have a valid payment arrangement with KRA and are
            adhering to its terms, you may still qualify for a TCC.
          </p>

          <h3>
            <i className="fas fa-question"></i> What if my TCC application is
            rejected?
          </h3>
          <p>
            If your application is rejected, iTax will provide reasons for the
            rejection. Address these issues and reapply once all compliance
            matters are resolved.
          </p>

          <h3>
            <i className="fas fa-question"></i> Is a TCC required for individual
            taxpayers?
          </h3>
          <p>
            While primarily for businesses, individuals may need a TCC for
            certain transactions like property transfers or large contracts.
          </p>
        </section>

        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCompliance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TCC
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> BusinessRequirements
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KRAGuide
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCertificate
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KenyanBusiness
          </span>
        </div>

        <div className="action-buttons">
          <button className="action-btn primary">
            <i className="fas fa-file-certificate"></i> Apply for TCC
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-download"></i> Download TCC Guide
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-question-circle"></i> Check Compliance Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxComplianceCertificateGuide;
