import React, { useState } from 'react';
import './WithholdingTaxGuide.css';

const WithholdingTaxGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="wht-guide-container">
      <div className="wht-header">
        <h1 className="wht-title">Withholding Tax Guide</h1>
        <div className="wht-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> October 8, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 14 min read
          </span>
          <span>
            <i className="fas fa-user"></i> KRA Tax Department
          </span>
        </div>
      </div>

      <div className="wht-tabs">
        <button
          className={`wht-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleTabChange('overview')}
        >
          <i className="fas fa-info-circle"></i> Overview
        </button>
        <button
          className={`wht-tab ${activeTab === 'rates' ? 'active' : ''}`}
          onClick={() => handleTabChange('rates')}
        >
          <i className="fas fa-percentage"></i> Rates
        </button>
        <button
          className={`wht-tab ${activeTab === 'process' ? 'active' : ''}`}
          onClick={() => handleTabChange('process')}
        >
          <i className="fas fa-cogs"></i> Process
        </button>
      </div>

      <div className="wht-content">
        <div className="wht-hero">
          <i className="fas fa-hand-holding-usd"></i>
          <p>
            Businesses deduct tax at source from certain payments and remit to
            KRA
          </p>
        </div>

        {activeTab === 'overview' && (
          <div className="wht-section">
            <h2>
              <i className="fas fa-info-circle"></i> What is Withholding Tax?
            </h2>

            <p>
              Withholding Tax (WHT) is an important component of Kenya's tax
              system, serving as an advance collection mechanism for various
              taxes.
            </p>

            <div className="info-tip">
              <h4>
                <i className="fas fa-lightbulb"></i> Key Concept
              </h4>
              <p>
                Withholding Tax ensures regular revenue flow to the government
                and expands the tax net by capturing income that might otherwise
                go unreported.
              </p>
            </div>

            <div className="wht-types">
              <div className="type-card">
                <div className="type-icon">
                  <i className="fas fa-flag-checkered"></i>
                </div>
                <h3>Final Tax</h3>
                <p>
                  The tax deducted is the final tax liability on that income.
                </p>
              </div>

              <div className="type-card">
                <div className="type-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3>Advance Tax</h3>
                <p>
                  The tax deducted is credited against the recipient's total tax
                  liability.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rates' && (
          <div className="wht-section">
            <h2>
              <i className="fas fa-percentage"></i> Withholding Tax Rates
            </h2>

            <p>
              Rates vary depending on the type of payment and the residency
              status of the recipient:
            </p>

            <div className="rates-table-container">
              <div className="rates-table-header">
                <div>Type of Payment</div>
                <div>Resident</div>
                <div>Non-Resident</div>
              </div>

              <div className="rates-table-row">
                <div>Professional Services</div>
                <div>5%</div>
                <div>20%</div>
              </div>

              <div className="rates-table-row">
                <div>Rent of buildings</div>
                <div>10%</div>
                <div>30%</div>
              </div>

              <div className="rates-table-row">
                <div>Rent of equipment</div>
                <div>5%</div>
                <div>20%</div>
              </div>

              <div className="rates-table-row">
                <div>Interest</div>
                <div>15%</div>
                <div>15%</div>
              </div>

              <div className="rates-table-row">
                <div>Dividends</div>
                <div>5%</div>
                <div>10%</div>
              </div>
            </div>

            <div className="info-warning">
              <h4>
                <i className="fas fa-exclamation-triangle"></i> Important Note
              </h4>
              <p>
                Rates are current as of October 2023. Always check for the
                latest rates on the KRA website.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="wht-section">
            <h2>
              <i className="fas fa-cogs"></i> Withholding Tax Process
            </h2>

            <p>
              The process of deducting and remitting Withholding Tax involves
              several steps:
            </p>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Identify Payments</h3>
                  <p>Determine which payments are subject to Withholding Tax</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Deduct Correct Rate</h3>
                  <p>Deduct the appropriate WHT rate based on payment type</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Issue Certificate</h3>
                  <p>Provide recipient with a Withholding Tax certificate</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>File Return</h3>
                  <p>File WHT return through iTax by the 20th of the month</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Remit Tax</h3>
                  <p>Pay withheld tax to KRA by the deadline</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Maintain Records</h3>
                  <p>Keep records of all WHT deductions for five years</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="wht-actions">
          <button className="wht-action-btn primary">
            <i className="fas fa-file-alt"></i> File WHT Return
          </button>
          <button className="wht-action-btn secondary">
            <i className="fas fa-download"></i> Download Guide
          </button>
          <button className="wht-action-btn secondary">
            <i className="fas fa-question-circle"></i> Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithholdingTaxGuide;
