import React, { useState } from 'react';
import './ValueAddedTaxGuide.css';

const ValueAddedTaxGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="vat-container">
      <div className="vat-header">
        <h1 className="vat-title">Value Added Tax Guide</h1>
        <div className="vat-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> August 5, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 12 min read
          </span>
          <span>
            <i className="fas fa-user"></i> KRA VAT Department
          </span>
        </div>
      </div>

      <div className="vat-nav">
        <button
          className={`vat-nav-btn ${
            activeSection === 'overview' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('overview')}
        >
          <i className="fas fa-info-circle"></i> Overview
        </button>
        <button
          className={`vat-nav-btn ${
            activeSection === 'registration' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('registration')}
        >
          <i className="fas fa-clipboard-list"></i> Registration
        </button>
        <button
          className={`vat-nav-btn ${activeSection === 'rates' ? 'active' : ''}`}
          onClick={() => scrollToSection('rates')}
        >
          <i className="fas fa-percentage"></i> Rates
        </button>
        <button
          className={`vat-nav-btn ${
            activeSection === 'filing' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('filing')}
        >
          <i className="fas fa-file-invoice-dollar"></i> Filing
        </button>
        <button
          className={`vat-nav-btn ${
            activeSection === 'refunds' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('refunds')}
        >
          <i className="fas fa-hand-holding-usd"></i> Refunds
        </button>
      </div>

      <div className="vat-content">
        <div className="vat-hero">
          <i className="fas fa-receipt"></i>
          <p>
            VAT is a consumption tax levied on the value added to goods and
            services at each stage of production or distribution
          </p>
        </div>

        <section id="overview" className="vat-section">
          <h2>
            <i className="fas fa-info-circle"></i> What is VAT and How Does It
            Work?
          </h2>

          <p>
            VAT is a consumption tax levied on the value added to goods and
            services at each stage of production or distribution. The standard
            VAT rate in Kenya is <strong>16%</strong>, applied to taxable
            supplies of goods and services.
          </p>

          <p>
            The VAT system operates on the principle of input tax credit, where
            businesses can claim credit for VAT paid on their purchases (input
            tax) against VAT collected on their sales (output tax).
          </p>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> How VAT Works Example
            </h4>
            <p>
              A manufacturer buys raw materials for KSh 1,000 + VAT (KSh 160).
              They manufacture a product and sell it to a retailer for KSh 2,000
              + VAT (KSh 320). The manufacturer remits KSh 160 to KRA (KSh 320
              output tax minus KSh 160 input tax). The retailer then sells to
              consumers for KSh 3,000 + VAT (KSh 480) and remits KSh 160 to KRA
              (KSh 480 output tax minus KSh 320 input tax).
            </p>
          </div>
        </section>

        <section id="registration" className="vat-section">
          <h2>
            <i className="fas fa-clipboard-list"></i> VAT Registration
            Requirements
          </h2>

          <p>
            You must register for VAT if your business meets any of the
            following conditions:
          </p>

          <ul>
            <li>
              <strong>Annual turnover</strong> of KSh 5 million or more from
              taxable supplies
            </li>
            <li>
              <strong>Voluntary registration</strong> even if below the
              threshold
            </li>
            <li>
              <strong>Importation of goods</strong> into Kenya
            </li>
            <li>
              <strong>Making zero-rated supplies</strong> and wishing to claim
              input tax
            </li>
            <li>
              <strong>Specific sectors</strong> regardless of turnover (e.g.,
              advocates, accountants, architects)
            </li>
          </ul>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Important Note
            </h4>
            <p>
              Businesses that meet the registration requirements must apply for
              VAT registration within 30 days of becoming liable. Failure to
              register can result in penalties of up to KSh 10,000 plus
              potential back-dated tax liabilities.
            </p>
          </div>
        </section>

        <section id="rates" className="vat-section">
          <h2>
            <i className="fas fa-percentage"></i> VAT Rates in Kenya
          </h2>

          <p>
            Kenya has three VAT rates that apply to different categories of
            goods and services:
          </p>

          <div className="rates-table">
            <div className="table-header">
              <div>VAT Rate</div>
              <div>Application</div>
              <div>Examples</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Standard Rate (16%)</strong>
              </div>
              <div>Most goods and services</div>
              <div>Electronics, furniture, professional services, vehicles</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Zero Rate (0%)</strong>
              </div>
              <div>Exports and specific items</div>
              <div>
                Export of goods, agricultural pest control, medical equipment
              </div>
            </div>

            <div className="table-row">
              <div>
                <strong>Exempt (NIL)</strong>
              </div>
              <div>Specific goods and services</div>
              <div>
                Unprocessed foods, educational services, medical services
              </div>
            </div>
          </div>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Key Difference
            </h4>
            <p>
              Zero-rated and exempt supplies both result in no VAT charged to
              the consumer, but with zero-rated supplies, businesses can claim
              input VAT on related purchases, while with exempt supplies, they
              cannot.
            </p>
          </div>
        </section>

        <section id="filing" className="vat-section">
          <h2>
            <i className="fas fa-file-invoice-dollar"></i> VAT Filing Process
          </h2>

          <p>
            VAT registered persons are required to file returns monthly through
            the KRA iTax system. The process involves:
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Record Keeping</h3>
                <p>Maintain records of all taxable supplies and purchases</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Calculate VAT</h3>
                <p>Determine output tax and input tax for the period</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>File Return</h3>
                <p>Submit VAT return through iTax by 20th of next month</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Pay VAT Due</h3>
                <p>Remit any net VAT payable to KRA</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Claim Refund</h3>
                <p>If input tax exceeds output tax, claim refund</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Keep Records</h3>
                <p>Maintain documents for at least 5 years</p>
              </div>
            </div>
          </div>

          <div className="info-action">
            <h4>
              <i className="fas fa-check-circle"></i> Filing Deadline
            </h4>
            <p>
              VAT returns must be filed by the{' '}
              <strong>20th day of the following month</strong>. For example,
              January VAT return is due by February 20th. Late filing attracts a
              penalty of KSh 10,000 or 5% of the tax due, whichever is higher.
            </p>
          </div>

          <h3>
            <i className="fas fa-receipt"></i> VAT Invoicing Requirements
          </h3>

          <p>
            VAT registered businesses must issue tax invoices for all taxable
            supplies. A proper tax invoice must contain:
          </p>

          <ul>
            <li>
              <strong>Supplier's name, address, and VAT PIN</strong>
            </li>
            <li>
              <strong>Invoice number and date</strong>
            </li>
            <li>
              <strong>Customer's name and address</strong>
            </li>
            <li>
              <strong>
                Description, quantity, and price of goods/services
              </strong>
            </li>
            <li>
              <strong>VAT amount charged</strong> (separately stated)
            </li>
            <li>
              <strong>Total amount payable</strong>
            </li>
            <li>
              <strong>For exports</strong>, indicate "0% VAT - Export"
            </li>
          </ul>

          <div className="info-quote">
            Proper invoicing is not just a compliance requirement but also
            essential for your customers to claim input VAT. Ensure all tax
            invoices contain the required information to avoid disputes.
          </div>
        </section>

        <section id="refunds" className="vat-section">
          <h2>
            <i className="fas fa-hand-holding-usd"></i> Claiming VAT Refunds
          </h2>

          <p>
            When your input VAT exceeds your output VAT in a tax period, you can
            claim a refund from KRA. The refund process involves:
          </p>

          <ul>
            <li>
              <strong>Filing a VAT return</strong> showing a refund claim
            </li>
            <li>
              <strong>Submitting supporting documentation</strong> for review
            </li>
            <li>
              <strong>KRA verification process</strong> which may include a
              audit
            </li>
            <li>
              <strong>Receiving payment</strong> either through direct deposit
              or offset against other tax liabilities
            </li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Speeding Up Refunds
            </h4>
            <p>
              To expedite your VAT refund claims, ensure all documentation is
              complete and accurate. Common reasons for delayed refunds include
              missing invoices, mismatched information, and incomplete
              supporting documents.
            </p>
          </div>

          <h3>
            <i className="fas fa-sync-alt"></i> Recent Changes to VAT
            Regulations
          </h3>

          <p>
            Kenya's VAT system has undergone several important changes in recent
            years:
          </p>

          <ul>
            <li>
              <strong>Digital Service Tax</strong> introduced for non-resident
              suppliers of digital services
            </li>
            <li>
              <strong>Electronic Tax Invoice Management System (eTIMS)</strong>{' '}
              implementation
            </li>
            <li>
              <strong>Expansion of zero-rated supplies</strong> to include
              additional agricultural inputs
            </li>
            <li>
              <strong>Enhanced compliance measures</strong> for claiming VAT
              refunds
            </li>
            <li>
              <strong>Increased data matching</strong> between customs and
              domestic VAT systems
            </li>
          </ul>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Compliance Update
            </h4>
            <p>
              With the implementation of eTIMS, all VAT registered taxpayers are
              required to use KRA-approved electronic tax registers or
              compatible software for invoicing. This aims to reduce VAT fraud
              and improve compliance.
            </p>
          </div>
        </section>

        <section className="vat-section">
          <h2>
            <i className="fas fa-exclamation-circle"></i> Common VAT Mistakes to
            Avoid
          </h2>

          <p>
            Many businesses make avoidable errors in VAT compliance. Watch out
            for these common mistakes:
          </p>

          <ul>
            <li>
              <strong>Late registration</strong> after exceeding the threshold
            </li>
            <li>
              <strong>Incorrect charging</strong> of VAT on exempt or zero-rated
              supplies
            </li>
            <li>
              <strong>Failure to issue</strong> proper tax invoices
            </li>
            <li>
              <strong>Claiming input VAT</strong> without valid tax invoices
            </li>
            <li>
              <strong>Missing filing deadlines</strong> resulting in penalties
            </li>
            <li>
              <strong>Poor record keeping</strong> leading to compliance issues
            </li>
          </ul>

          <div className="info-quote">
            VAT compliance is not just about meeting legal requirements—it's
            also about good business practice. Proper VAT management can improve
            your cash flow and prevent costly penalties.
          </div>
        </section>

        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-hashtag"></i> VATKenya
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCompliance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> BusinessTax
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KRAGuide
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> ValueAddedTax
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxTips
          </span>
        </div>

        <div className="action-buttons">
          <button className="action-btn primary">
            <i className="fas fa-file-alt"></i> File VAT Return
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-download"></i> Download VAT Guide
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-question-circle"></i> Contact VAT Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValueAddedTaxGuide;
