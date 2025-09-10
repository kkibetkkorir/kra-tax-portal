import React, { useState } from 'react';
import './RentalIncomeTaxGuide.css';

const RentalIncomeTaxGuide = () => {
  const [annualRent, setAnnualRent] = useState('');
  const [deductions, setDeductions] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [taxAmount, setTaxAmount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateTax = () => {
    const rent = parseFloat(annualRent) || 0;
    const deduct = parseFloat(deductions) || 0;
    const other = parseFloat(otherIncome) || 0;
    const personalRelief = 28800; // Standard personal relief

    // Calculate taxable income
    const taxableIncome = rent - deduct;

    // Calculate tax based on graduated rates
    let tax = 0;

    if (taxableIncome > 0) {
      if (taxableIncome <= 288000) {
        tax = taxableIncome * 0.1;
      } else if (taxableIncome <= 576000) {
        tax = 28800 + (taxableIncome - 288000) * 0.15;
      } else if (taxableIncome <= 864000) {
        tax = 28800 + 43200 + (taxableIncome - 576000) * 0.2;
      } else if (taxableIncome <= 1152000) {
        tax = 28800 + 43200 + 57600 + (taxableIncome - 864000) * 0.25;
      } else {
        tax = 28800 + 43200 + 57600 + 72000 + (taxableIncome - 1152000) * 0.3;
      }
    }

    // Apply personal relief
    const finalTax = Math.max(0, tax - personalRelief);

    // Set result
    setTaxAmount(finalTax);
    setShowResult(true);
  };

  return (
    <div className="rental-tax-container">
      <div className="rental-tax-header">
        <h1 className="rental-tax-title">Rental Income Tax Guide</h1>
        <div className="rental-tax-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> July 15, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 10 min read
          </span>
          <span>
            <i className="fas fa-user"></i> KRA Tax Advisory Team
          </span>
        </div>
      </div>

      <div className="rental-tax-content">
        <div className="rental-tax-hero">
          <i className="fas fa-building"></i>
          <p>
            Property owners must understand their tax obligations for rental
            income
          </p>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-info-circle"></i> What Constitutes Rental
            Income?
          </h2>

          <p>
            Rental income includes any payment you receive for the use or
            occupation of property. This encompasses:
          </p>

          <ul>
            <li>
              Rent from residential properties (houses, apartments, rooms)
            </li>
            <li>
              Rent from commercial properties (offices, retail spaces,
              warehouses)
            </li>
            <li>Advance rent payments</li>
            <li>Security deposits that are not refunded to tenants</li>
            <li>Payment for amenities or services included in the rent</li>
          </ul>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Important Note
            </h4>
            <p>
              Even if you rent out property to family members at below-market
              rates, you are still required to declare and pay taxes on the fair
              market value of the rental income.
            </p>
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-percentage"></i> Rental Income Tax Rates
          </h2>

          <p>
            Rental income tax in Kenya is calculated on a graduated scale based
            on your annual rental income:
          </p>

          <div className="rates-table-container">
            <div className="rates-table-header">
              <div>Annual Rental Income (KSh)</div>
              <div>Tax Rate</div>
              <div>Tax Calculation</div>
            </div>

            <div className="rates-table-row">
              <div>First 288,000</div>
              <div>10%</div>
              <div>10% of the amount</div>
            </div>

            <div className="rates-table-row">
              <div>Next 288,000</div>
              <div>15%</div>
              <div>15% of the amount</div>
            </div>

            <div className="rates-table-row">
              <div>Next 288,000</div>
              <div>20%</div>
              <div>20% of the amount</div>
            </div>

            <div className="rates-table-row">
              <div>Next 288,000</div>
              <div>25%</div>
              <div>25% of the amount</div>
            </div>

            <div className="rates-table-row">
              <div>Above 1,152,000</div>
              <div>30%</div>
              <div>30% of the amount</div>
            </div>
          </div>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Pro Tip
            </h4>
            <p>
              Remember that these rates apply to your taxable rental income,
              which is your gross rental income minus allowable deductions.
            </p>
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-receipt"></i> Allowable Deductions
          </h2>

          <p>
            To calculate your taxable rental income, you can deduct the
            following expenses from your gross rental income:
          </p>

          <ul>
            <li>
              <strong>Loan interest:</strong> Interest on mortgages used to
              acquire or improve the rental property
            </li>
            <li>
              <strong>Repairs and maintenance:</strong> Costs for fixing and
              maintaining the property
            </li>
            <li>
              <strong>Insurance premiums:</strong> Property insurance costs
            </li>
            <li>
              <strong>Management fees:</strong> Fees paid to property management
              companies
            </li>
            <li>
              <strong>Utilities:</strong> Water, electricity, and other
              utilities paid by the landlord
            </li>
            <li>
              <strong>Service charges:</strong> For apartments and gated
              communities
            </li>
            <li>
              <strong>Rates:</strong> Local authority rates
            </li>
            <li>
              <strong>Depreciation:</strong> Wear and tear on buildings (4% per
              year) and furniture (30% per year)
            </li>
          </ul>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Non-Deductible
              Expenses
            </h4>
            <p>
              You cannot deduct the cost of acquiring the property, personal
              expenses, or expenses that have been reimbursed by tenants.
            </p>
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-calculator"></i> Rental Income Tax Calculator
          </h2>

          <div className="calculator-box">
            <h3 className="calculator-title">
              <i className="fas fa-calculator"></i> Estimate Your Rental Tax
            </h3>

            <div className="calculator-form">
              <div className="form-group">
                <label htmlFor="annual-rent">Annual Rental Income (KSh)</label>
                <input
                  type="number"
                  id="annual-rent"
                  placeholder="Enter amount"
                  value={annualRent}
                  onChange={(e) => setAnnualRent(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="allowable-deductions">
                  Allowable Deductions (KSh)
                </label>
                <input
                  type="number"
                  id="allowable-deductions"
                  placeholder="Enter amount"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="other-income">Other Income (KSh)</label>
                <input
                  type="number"
                  id="other-income"
                  placeholder="Enter amount"
                  value={otherIncome}
                  onChange={(e) => setOtherIncome(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="personal-relief">Personal Relief (KSh)</label>
                <input
                  type="number"
                  id="personal-relief"
                  value="28800"
                  disabled
                />
              </div>
            </div>

            <button className="btn btn-primary" onClick={calculateTax}>
              <i className="fas fa-calculator"></i> Calculate Tax
            </button>

            {showResult && (
              <div className="calculator-result">
                <div className="result-title">Estimated Tax Payable:</div>
                <div className="result-value">
                  KSh{' '}
                  {taxAmount.toLocaleString('en-KE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                  This is an estimate. Actual tax may vary based on your
                  specific circumstances.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-file-alt"></i> How to File Rental Income Tax
            Returns
          </h2>

          <p>Filing your rental income tax return involves several steps:</p>

          <ol>
            <li>
              <strong>Register for a KRA PIN</strong> if you don't have one
              already
            </li>
            <li>
              <strong>Keep accurate records</strong> of all rental income and
              expenses
            </li>
            <li>
              <strong>File your return</strong> through the iTax platform by
              June 30th each year
            </li>
            <li>
              <strong>Pay any tax due</strong> by the deadline to avoid
              penalties
            </li>
          </ol>

          <div className="info-action">
            <h4>
              <i className="fas fa-check-circle"></i> Action Required
            </h4>
            <p>
              All landlords must file annual returns declaring their rental
              income, even if no tax is due or the property was vacant during
              the year.
            </p>
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-exclamation-circle"></i> Penalties for
            Non-Compliance
          </h2>

          <p>
            Failure to comply with rental income tax obligations can result in:
          </p>

          <ul>
            <li>
              <strong>Late filing penalty:</strong> 5% of tax due or KSh 10,000,
              whichever is higher
            </li>
            <li>
              <strong>Late payment interest:</strong> 1% per month on unpaid tax
            </li>
            <li>
              <strong>Tax assessments:</strong> KRA may estimate your income and
              issue an assessment
            </li>
            <li>
              <strong>Legal action:</strong> In severe cases, non-compliance can
              lead to legal proceedings
            </li>
          </ul>

          <div className="info-quote">
            "Voluntary compliance is always better than enforced compliance. The
            KRA encourages all landlords to regularly declare their rental
            income to avoid penalties." - KRA Commissioner
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-sync-alt"></i> Recent Changes to Rental Income
            Tax
          </h2>

          <p>
            Recent years have seen several important changes to rental income
            tax in Kenya:
          </p>

          <ul>
            <li>
              Introduction of the 10% tax rate for the first KSh 288,000 of
              annual rental income
            </li>
            <li>Simplification of the tax bands for easier calculation</li>
            <li>Enhanced digital services for easier filing and payment</li>
            <li>
              Increased data matching capabilities to identify non-compliant
              landlords
            </li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Staying Updated
            </h4>
            <p>
              Tax laws can change frequently. Subscribe to KRA updates or
              consult with a tax professional to ensure you're always compliant
              with the latest regulations.
            </p>
          </div>
        </div>

        <div className="rental-tax-section">
          <h2>
            <i className="fas fa-question-circle"></i> Need Help with Your
            Rental Income Tax?
          </h2>

          <p>
            If you need assistance with your rental income tax obligations, KRA
            offers several support channels:
          </p>

          <ul>
            <li>
              <strong>iTax Help Center:</strong> Comprehensive guides and
              tutorials on the iTax platform
            </li>
            <li>
              <strong>Customer Support:</strong> Call 020 4 999 999 for
              assistance with filing
            </li>
            <li>
              <strong>Tax Agents:</strong> Certified tax professionals who can
              help with compliance
            </li>
            <li>
              <strong>KRA Offices:</strong> Visit your nearest KRA office for
              in-person assistance
            </li>
          </ul>

          <p>
            Remember, complying with your tax obligations not only avoids
            penalties but also contributes to national development through
            provision of public services.
          </p>
        </div>

        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-hashtag"></i> RentalIncomeTax
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> PropertyTax
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KenyaRevenue
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> LandlordTips
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCompliance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> PropertyInvestment
          </span>
        </div>

        <div className="action-buttons">
          <button className="action-btn primary">
            <i className="fas fa-file-alt"></i> File Rental Return
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-download"></i> Download Guide
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-question-circle"></i> Get Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalIncomeTaxGuide;
