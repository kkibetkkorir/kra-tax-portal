import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [activeScreen, setActiveScreen] = useState('services');

  // Set initial screen on component mount
  useEffect(() => {
    // Set the initial active screen
    setActiveScreen('services');
  }, []);

  // Handle navigation between screens
  const handleNavigation = (screen) => {
    setActiveScreen(screen);
  };

  // Handle tax type item clicks
  const handleTaxTypeClick = (taxType) => {
    setActiveScreen(taxType);
  };

  return (
    <div className="container">
      <h1
        style={{ textAlign: 'center', marginBottom: '30px', color: '#1a365d' }}
      >
        KRA Tax Services Portal
      </h1>

      <div className="page-nav">
        <a
          href="#"
          className={`nav-btn ${activeScreen === 'services' ? 'active' : ''}`}
          onClick={() => handleNavigation('services')}
        >
          <i className="fas fa-concierge-bell"></i> All Services
        </a>
        <a
          href="#"
          className={`nav-btn ${activeScreen === 'tax-types' ? 'active' : ''}`}
          onClick={() => handleNavigation('tax-types')}
        >
          <i className="fas fa-money-bill-wave"></i> Tax Types
        </a>
        <a
          href="#"
          className={`nav-btn ${activeScreen === 'income-tax' ? 'active' : ''}`}
          onClick={() => handleNavigation('income-tax')}
        >
          <i className="fas fa-file-invoice-dollar"></i> Income Tax
        </a>
        <a
          href="#"
          className={`nav-btn ${activeScreen === 'vat' ? 'active' : ''}`}
          onClick={() => handleNavigation('vat')}
        >
          <i className="fas fa-receipt"></i> VAT
        </a>
        <a
          href="#"
          className={`nav-btn ${
            activeScreen === 'withholding' ? 'active' : ''
          }`}
          onClick={() => handleNavigation('withholding')}
        >
          <i className="fas fa-hand-holding-usd"></i> Withholding Tax
        </a>
      </div>

      {/* All Services Screen */}
      <div
        className={`screen-container ${
          activeScreen === 'services' ? 'active' : ''
        }`}
        id="services"
      >
        <div className="screen-header">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>
          <div className="screen-title">All Services</div>
        </div>

        <div className="screen-body">
          <h2 className="section-title">Tax Services</h2>

          <div className="card-grid">
            <div className="card">
              <div className="card-header">
                <i className="fas fa-file-invoice-dollar"></i> File Returns
              </div>
              <div className="card-body">
                <p>
                  Submit your tax returns online for various tax types including
                  income tax, VAT, and withholding tax.
                </p>
                <ul
                  style={{
                    marginTop: '15px',
                    paddingLeft: '20px',
                    color: '#4a5568',
                  }}
                >
                  <li>Income Tax Returns</li>
                  <li>VAT Returns</li>
                  <li>Withholding Tax Returns</li>
                  <li>Excise Duty Returns</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
                <a href="/guides/income-tax-return-form" className="btn btn-primary">
                  File Now
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <i className="fas fa-credit-card"></i> Make Payments
              </div>
              <div className="card-body">
                <p>
                  Pay your tax obligations through various methods including
                  mobile money, bank transfer, and credit card.
                </p>
                <ul
                  style={{
                    marginTop: '15px',
                    paddingLeft: '20px',
                    color: '#4a5568',
                  }}
                >
                  <li>Pay As You Earn (PAYE)</li>
                  <li>Corporate Tax</li>
                  <li>VAT Payments</li>
                  <li>Penalty Payments</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
                <a href="/dashboard" className="btn btn-primary">
                  Pay Now
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <i className="fas fa-file-certificate"></i> Certificates
              </div>
              <div className="card-body">
                <p>
                  Apply for and download various certificates including tax
                  compliance certificates and PIN certificates.
                </p>
                <ul
                  style={{
                    marginTop: '15px',
                    paddingLeft: '20px',
                    color: '#4a5568',
                  }}
                >
                  <li>Tax Compliance Certificate</li>
                  <li>PIN Registration Certificate</li>
                  <li>Withholding Tax Certificate</li>
                  <li>VAT Certificate</li>
                </ul>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
                <a href="/guides/tax-compliance-certificate-guide" className="btn btn-primary">
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <h2 className="section-title">Registration Services</h2>

          <div className="card-grid">
            <div className="card">
              <div className="card-header">
                <i className="fas fa-id-card"></i> PIN Registration
              </div>
              <div className="card-body">
                <p>
                  Register for a KRA PIN, update your details, or request a
                  replacement for lost PIN certificates.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span>Processing Time:</span>
                    <span>24-48 hours</span>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>Requirements:</span>
                    <span>National ID/Passport</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
                <a href="/register" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <i className="fas fa-store"></i> VAT Registration
              </div>
              <div className="card-body">
                <p>
                  Register for VAT, update your VAT details, or deregister if
                  you no longer meet the requirements.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span>Threshold:</span>
                    <span>KSh 5M annual turnover</span>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>Processing Time:</span>
                    <span>3-5 business days</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
                <a href="/guides/value-added-tax-guide" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <i className="fas fa-truck"></i> Excise Duty Registration
              </div>
              <div className="card-body">
                <p>
                  Register for excise duty if you manufacture or import
                  excisable goods in Kenya.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                    }}
                  >
                    <span>Applicable to:</span>
                    <span>Manufacturers/Importers</span>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>Processing Time:</span>
                    <span>5-7 business days</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
                <a href="/guides/exrcise-duty-guide" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Types Screen */}
      <div
        className={`screen-container ${
          activeScreen === 'tax-types' ? 'active' : ''
        }`}
        id="tax-types"
      >
        <div className="screen-header">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>
          <div className="screen-title">Tax Types</div>
        </div>

        <div className="screen-body">
          <h2 className="section-title">Direct Taxes</h2>

          <div className="tax-category">
            <div className="tax-type-list">
              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('income-tax')}
              >
                <div className="tax-icon">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Income Tax</div>
                  <div className="tax-desc">
                    Tax on income earned by individuals and businesses
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>

              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('corporate-tax')}
              >
                <div className="tax-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Corporate Tax</div>
                  <div className="tax-desc">
                    Tax on profits of companies and corporations
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>

              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('paye')}
              >
                <div className="tax-icon">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Pay As You Earn (PAYE)</div>
                  <div className="tax-desc">
                    Tax deducted from employment income
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <h2 className="section-title">Indirect Taxes</h2>

          <div className="tax-category">
            <div className="tax-type-list">
              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('vat')}
              >
                <div className="tax-icon">
                  <i className="fas fa-receipt"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Value Added Tax (VAT)</div>
                  <div className="tax-desc">
                    Tax on consumption of goods and services
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>

              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('excise-duty')}
              >
                <div className="tax-icon">
                  <i className="fas fa-wine-bottle"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Excise Duty</div>
                  <div className="tax-desc">
                    Tax on specific goods manufactured or imported
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>

              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('customs-duty')}
              >
                <div className="tax-icon">
                  <i className="fas fa-ship"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Customs Duty</div>
                  <div className="tax-desc">
                    Tax on goods imported into Kenya
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <h2 className="section-title">Other Taxes</h2>

          <div className="tax-category">
            <div className="tax-type-list">
              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('withholding')}
              >
                <div className="tax-icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Withholding Tax</div>
                  <div className="tax-desc">
                    Tax withheld at source on payments
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>

              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('rental-income')}
              >
                <div className="tax-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Rental Income Tax</div>
                  <div className="tax-desc">
                    Tax on income from rental properties
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>

              <div
                className="tax-type-item"
                onClick={() => handleTaxTypeClick('capital-gains')}
              >
                <div className="tax-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="tax-info">
                  <div className="tax-name">Capital Gains Tax</div>
                  <div className="tax-desc">
                    Tax on profit from disposal of property
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Income Tax Guide Screen */}
      <div
        className={`screen-container ${
          activeScreen === 'income-tax' ? 'active' : ''
        }`}
        id="income-tax"
      >
        <div className="screen-header">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>
          <div className="screen-title">Income Tax Guide</div>
        </div>

        <div className="screen-body">
          <div className="guide-content">
            <div className="guide-header">
              <div className="guide-icon">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <h2 className="guide-title">Income Tax Filing Guide</h2>
              <p className="guide-subtitle">
                Learn how to file your income tax returns correctly and on time
              </p>
            </div>

            <div className="guide-section">
              <h3>About Income Tax</h3>
              <p>
                Income tax is a tax on income earned by individuals, businesses,
                and other entities. In Kenya, income tax is administered under
                the Income Tax Act and is one of the principal sources of
                government revenue.
              </p>

              <div className="deadline-card">
                <div className="deadline-header">
                  <i className="fas fa-calendar-exclamation"></i>
                  <h4>Filing Deadline</h4>
                </div>
                <p>
                  Individual income tax returns must be filed by{' '}
                  <strong>30th June</strong> each year for the previous year's
                  income. Corporate tax returns are due within{' '}
                  <strong>6 months</strong> after the end of the financial year.
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3>Who Should File</h3>
              <p>You are required to file an income tax return if you:</p>
              <ul className="requirements-list">
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>
                    Have a KRA PIN and received income during the year
                  </span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Are employed and have tax deducted through PAYE</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Operate a business or practice a profession</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Earn rental income from properties</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>
                    Earn income from investments, dividends, or interest
                  </span>
                </li>
              </ul>
            </div>

            <div className="guide-section">
              <h3>How to File Income Tax Return</h3>
              <ol className="step-list">
                <li className="step-item">
                  <div className="step-title">Log in to iTax</div>
                  <p>
                    Visit the iTax portal and log in using your KRA credentials
                    (KRA PIN and password).
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Select Income Tax Return</div>
                  <p>
                    Navigate to the 'Returns' section and select 'Income Tax'
                    followed by the appropriate return form (IT1 for
                    individuals, IT2C for companies).
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Fill in Your Income Details</div>
                  <p>
                    Provide accurate information about your income from all
                    sources including employment, business, rental, and
                    investment income.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Claim Allowable Deductions</div>
                  <p>
                    Enter details of allowable deductions such as NHIF, NSSF,
                    insurance premiums, and mortgage interest.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Validate and Submit</div>
                  <p>
                    Review all information for accuracy, validate the return,
                    and submit. You will receive an acknowledgment receipt upon
                    successful submission.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Make Payment (If Applicable)</div>
                  <p>
                    If you have tax payable, generate a payment slip and make
                    payment through your preferred method.
                  </p>
                </li>
              </ol>
            </div>

            <div className="guide-section">
              <h3>Required Documents</h3>
              <ul className="requirements-list">
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-file-alt"></i>
                  </span>
                  <span>Employment payslips (P9 form)</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-file-alt"></i>
                  </span>
                  <span>Business income records</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-file-alt"></i>
                  </span>
                  <span>Rental income statements</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-file-alt"></i>
                  </span>
                  <span>Receipts for allowable deductions</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-file-alt"></i>
                  </span>
                  <span>Previous year's tax return (if applicable)</span>
                </li>
              </ul>
            </div>

            <div className="action-buttons">
              <a href="/guides/income-tax-return-form" className="btn btn-primary">
                <i className="fas fa-play"></i> Start Filing Now
              </a>
              <a href="/guides/personal-income-tax-guide" className="btn btn-outline">
                <i className="fas fa-download"></i> Download Guide
              </a>
              <a href="/support-center" className="btn btn-outline">
                <i className="fas fa-print"></i> Print This Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* VAT Guide Screen */}
      <div
        className={`screen-container ${activeScreen === 'vat' ? 'active' : ''}`}
        id="vat"
      >
        <div className="screen-header">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>
          <div className="screen-title">VAT Guide</div>
        </div>

        <div className="screen-body">
          <div className="guide-content">
            <div className="guide-header">
              <div className="guide-icon">
                <i className="fas fa-receipt"></i>
              </div>
              <h2 className="guide-title">Value Added Tax (VAT) Guide</h2>
              <p className="guide-subtitle">
                Learn how to register for, file, and pay VAT in Kenya
              </p>
            </div>

            <div className="guide-section">
              <h3>About Value Added Tax (VAT)</h3>
              <p>
                VAT is a consumption tax levied on the value added to goods and
                services at each stage of production or distribution. The
                standard VAT rate in Kenya is 16%.
              </p>

              <div className="deadline-card">
                <div className="deadline-header">
                  <i className="fas fa-calendar-exclamation"></i>
                  <h4>Filing Deadline</h4>
                </div>
                <p>
                  VAT returns must be filed by the <strong>20th day</strong> of
                  the following month. For example, January VAT return is due by
                  20th February.
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3>Who Should Register for VAT</h3>
              <p>You are required to register for VAT if you:</p>
              <ul className="requirements-list">
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>
                    Make taxable supplies exceeding KSh 5 million annual
                    turnover
                  </span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Voluntarily choose to register for VAT</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Import goods into Kenya</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>
                    Make zero-rated supplies and wish to claim input tax
                  </span>
                </li>
              </ul>
            </div>

            <div className="guide-section">
              <h3>How to File VAT Return</h3>
              <ol className="step-list">
                <li className="step-item">
                  <div className="step-title">Log in to iTax</div>
                  <p>Access the iTax portal using your KRA PIN and password.</p>
                </li>
                <li className="step-item">
                  <div className="step-title">Select VAT Return</div>
                  <p>
                    Navigate to the 'Returns' section and select 'VAT' followed
                    by the appropriate return form.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Enter Sales and Output VAT</div>
                  <p>
                    Provide details of your taxable sales and the output VAT
                    collected.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">
                    Enter Purchases and Input VAT
                  </div>
                  <p>
                    Provide details of your taxable purchases and the input VAT
                    paid.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">
                    Calculate VAT Payable/Refundable
                  </div>
                  <p>
                    The system will calculate the net VAT payable (output VAT
                    minus input VAT).
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Validate and Submit</div>
                  <p>
                    Review all information, validate the return, and submit.
                    Download the acknowledgment receipt.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Make Payment</div>
                  <p>
                    If you have VAT payable, generate a payment slip and make
                    payment through your preferred method.
                  </p>
                </li>
              </ol>
            </div>

            <div className="action-buttons">
              <a href="/guides/value-added-tax-guide" className="btn btn-primary">
                <i className="fas fa-play"></i> File VAT Return
              </a>
              <a href="/guides/value-added-tax-guide" className="btn btn-outline">
                <i className="fas fa-download"></i> Download VAT Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Withholding Tax Guide Screen */}
      <div
        className={`screen-container ${
          activeScreen === 'withholding' ? 'active' : ''
        }`}
        id="withholding"
      >
        <div className="screen-header">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>
          <div className="screen-title">Withholding Tax Guide</div>
        </div>

        <div className="screen-body">
          <div className="guide-content">
            <div className="guide-header">
              <div className="guide-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h2 className="guide-title">Withholding Tax Guide</h2>
              <p className="guide-subtitle">
                Learn about withholding tax rates, filing, and payment
                procedures
              </p>
            </div>

            <div className="guide-section">
              <h3>About Withholding Tax</h3>
              <p>
                Withholding tax (WHT) is tax deducted at source from payments
                made to residents and non-residents. The person making the
                payment (withholding agent) is required to deduct the tax and
                remit it to KRA.
              </p>

              <div className="deadline-card">
                <div className="deadline-header">
                  <i className="fas fa-calendar-exclamation"></i>
                  <h4>Filing Deadline</h4>
                </div>
                <p>
                  Withholding tax returns must be filed by the{' '}
                  <strong>20th day</strong> of the following month. For example,
                  January WHT return is due by 20th February.
                </p>
              </div>
            </div>

            <div className="guide-section">
              <h3>Withholding Tax Rates</h3>
              <p>Common withholding tax rates in Kenya:</p>
              <ul className="requirements-list">
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-percentage"></i>
                  </span>
                  <span>
                    Residents: 5% on services, 3% on rent of buildings
                  </span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-percentage"></i>
                  </span>
                  <span>Non-residents: 20% on services, 30% on dividends</span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-percentage"></i>
                  </span>
                  <span>
                    Interest: 15% for residents, 15% for non-residents
                  </span>
                </li>
                <li className="requirement-item">
                  <span className="requirement-icon">
                    <i className="fas fa-percentage"></i>
                  </span>
                  <span>
                    Royalties: 5% for residents, 20% for non-residents
                  </span>
                </li>
              </ul>
            </div>

            <div className="guide-section">
              <h3>How to File Withholding Tax Return</h3>
              <ol className="step-list">
                <li className="step-item">
                  <div className="step-title">Log in to iTax</div>
                  <p>Access the iTax portal using your KRA PIN and password.</p>
                </li>
                <li className="step-item">
                  <div className="step-title">
                    Select Withholding Tax Return
                  </div>
                  <p>
                    Navigate to the 'Returns' section and select 'Withholding
                    Tax'.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Enter Payment Details</div>
                  <p>
                    Provide details of payments made and tax withheld, including
                    recipient PINs.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Calculate Tax Withheld</div>
                  <p>
                    The system will calculate the total tax withheld based on
                    the rates applied.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Validate and Submit</div>
                  <p>
                    Review all information, validate the return, and submit.
                    Download the acknowledgment receipt.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Remit Tax Withheld</div>
                  <p>
                    Generate a payment slip and remit the tax withheld to KRA
                    through your preferred payment method.
                  </p>
                </li>
                <li className="step-item">
                  <div className="step-title">Issue Certificate</div>
                  <p>
                    Issue withholding tax certificates to the recipients from
                    whom you deducted tax.
                  </p>
                </li>
              </ol>
            </div>

            <div className="action-buttons">
              <a href="/guides/withholding-tax-guide" className="btn btn-primary">
                <i className="fas fa-play"></i> File WHT Return
              </a>
              <a href="/guides/withholding-tax-guide" className="btn btn-outline">
                <i className="fas fa-download"></i> Download WHT Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;