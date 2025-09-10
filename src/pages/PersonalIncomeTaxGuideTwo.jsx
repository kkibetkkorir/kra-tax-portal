import React, { useState } from 'react';
import './PersonalIncomeTaxGuideTwo.css';

const PersonalIncomeTaxGuideTwo = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [calculatorData, setCalculatorData] = useState({
    monthlyIncome: '',
    allowances: '',
    nssf: '1080',
    nhif: '',
    pension: '',
    insurance: '',
  });
  const [calculatorResult, setCalculatorResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTax = () => {
    const monthlyIncome = parseFloat(calculatorData.monthlyIncome) || 0;
    const allowances = parseFloat(calculatorData.allowances) || 0;
    const nssf = parseFloat(calculatorData.nssf) || 0;
    const nhif = parseFloat(calculatorData.nhif) || 0;
    const pension = parseFloat(calculatorData.pension) || 0;
    const insurance = parseFloat(calculatorData.insurance) || 0;

    // Calculate gross income
    const grossIncome = monthlyIncome + allowances;

    // Calculate insurance relief (15% of annual premium, converted to monthly)
    const insuranceRelief = (insurance * 0.15) / 12;

    // Calculate total deductions
    const totalDeductions = nssf + nhif + pension + insuranceRelief;

    // Calculate taxable income
    const taxableIncome = Math.max(0, grossIncome - totalDeductions);

    // Calculate annual taxable income for tax bands
    const annualTaxableIncome = taxableIncome * 12;

    // Calculate tax based on graduated rates
    let annualTax = 0;

    if (annualTaxableIncome > 288000) {
      annualTax += 288000 * 0.1;

      if (annualTaxableIncome > 576000) {
        annualTax += 288000 * 0.15;

        if (annualTaxableIncome > 864000) {
          annualTax += 288000 * 0.2;

          if (annualTaxableIncome > 1152000) {
            annualTax += 288000 * 0.25;
            annualTax += (annualTaxableIncome - 1152000) * 0.3;
          } else {
            annualTax += (annualTaxableIncome - 864000) * 0.25;
          }
        } else {
          annualTax += (annualTaxableIncome - 576000) * 0.2;
        }
      } else {
        annualTax += (annualTaxableIncome - 288000) * 0.15;
      }
    } else {
      annualTax += annualTaxableIncome * 0.1;
    }

    // Convert to monthly tax
    const monthlyTax = annualTax / 12;

    // Apply personal relief (KSh 2,880 per month)
    const finalTax = Math.max(0, monthlyTax - 2880);

    // Calculate net pay
    const netPay = grossIncome - finalTax - nssf - nhif - pension;

    // Set results
    setCalculatorResult({
      grossIncome,
      totalDeductions,
      taxableIncome,
      finalTax,
      netPay,
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pit-container">
      <div className="pit-header">
        <h1 className="pit-title">Personal Income Tax Guide</h1>
        <div className="pit-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> September 12, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 15 min read
          </span>
          <span>
            <i className="fas fa-user"></i> KRA Tax Education Department
          </span>
        </div>
      </div>

      <div className="pit-nav">
        <button
          className={`pit-nav-btn ${
            activeSection === 'overview' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('overview')}
        >
          <i className="fas fa-info-circle"></i> Overview
        </button>
        <button
          className={`pit-nav-btn ${activeSection === 'rates' ? 'active' : ''}`}
          onClick={() => scrollToSection('rates')}
        >
          <i className="fas fa-chart-bar"></i> Tax Rates
        </button>
        <button
          className={`pit-nav-btn ${
            activeSection === 'deductions' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('deductions')}
        >
          <i className="fas fa-hand-holding-usd"></i> Deductions
        </button>
        <button
          className={`pit-nav-btn ${
            activeSection === 'calculator' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('calculator')}
        >
          <i className="fas fa-calculator"></i> Calculator
        </button>
        <button
          className={`pit-nav-btn ${
            activeSection === 'filing' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('filing')}
        >
          <i className="fas fa-file-alt"></i> Filing
        </button>
      </div>

      <div className="pit-content">
        <div className="pit-hero">
          <i className="fas fa-file-invoice-dollar"></i>
          <p>
            Understanding how income tax works is essential for every employee
            in Kenya
          </p>
        </div>

        <section id="overview" className="pit-section">
          <h2>
            <i className="fas fa-info-circle"></i> What is PAYE and How Does It
            Work?
          </h2>

          <p>
            Pay As You Earn (PAYE) is a system where employers deduct income tax
            from employees' salaries or wages throughout the income year. The
            deducted tax is then remitted to the Kenya Revenue Authority (KRA)
            by the employer on behalf of the employee.
          </p>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> How PAYE Works
            </h4>
            <p>
              Each month, your employer calculates tax on your cumulative income
              for the year, subtracts the tax already paid in previous months,
              and deducts the difference from your current month's pay. This
              ensures that your tax liability is spread evenly throughout the
              year.
            </p>
          </div>
        </section>

        <section id="rates" className="pit-section">
          <h2>
            <i className="fas fa-chart-bar"></i> Personal Income Tax Rates
          </h2>

          <p>
            Kenya uses a graduated tax rate system for personal income. The tax
            rates for 2023 are as follows:
          </p>

          <div className="tax-brackets">
            <div className="bracket">
              <div className="bracket-range">First KSh 288,000 per year</div>
              <div className="bracket-details">
                <div className="bracket-rate">10%</div>
                <div className="bracket-description">
                  The first KSh 24,000 of your monthly income is taxed at 10%
                </div>
              </div>
            </div>

            <div className="bracket">
              <div className="bracket-range">Next KSh 288,000 per year</div>
              <div className="bracket-details">
                <div className="bracket-rate">15%</div>
                <div className="bracket-description">
                  The next KSh 24,000 of your monthly income is taxed at 15%
                </div>
              </div>
            </div>

            <div className="bracket">
              <div className="bracket-range">Next KSh 288,000 per year</div>
              <div className="bracket-details">
                <div className="bracket-rate">20%</div>
                <div className="bracket-description">
                  The next KSh 24,000 of your monthly income is taxed at 20%
                </div>
              </div>
            </div>

            <div className="bracket">
              <div className="bracket-range">Next KSh 288,000 per year</div>
              <div className="bracket-details">
                <div className="bracket-rate">25%</div>
                <div className="bracket-description">
                  The next KSh 24,000 of your monthly income is taxed at 25%
                </div>
              </div>
            </div>

            <div className="bracket">
              <div className="bracket-range">Above KSh 1,152,000 per year</div>
              <div className="bracket-details">
                <div className="bracket-rate">30%</div>
                <div className="bracket-description">
                  Any amount above KSh 96,000 monthly is taxed at 30%
                </div>
              </div>
            </div>
          </div>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Important Note
            </h4>
            <p>
              These tax rates apply to your taxable income, which is your gross
              income minus allowable deductions and personal relief. The tax
              bands are cumulative, meaning different portions of your income
              are taxed at different rates.
            </p>
          </div>
        </section>

        <section id="deductions" className="pit-section">
          <h2>
            <i className="fas fa-hand-holding-usd"></i> Allowable Deductions and
            Reliefs
          </h2>

          <p>
            To reduce your taxable income, you can claim various deductions and
            reliefs:
          </p>

          <div className="deductions-table">
            <div className="table-header">
              <div>Deduction/Relief</div>
              <div>Amount</div>
              <div>Description</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Personal Relief</strong>
              </div>
              <div>KSh 2,880 per month</div>
              <div>
                Available to all resident individuals with income from
                employment
              </div>
            </div>

            <div className="table-row">
              <div>
                <strong>Insurance Relief</strong>
              </div>
              <div>15% of premium</div>
              <div>
                On life insurance and educational policies (max KSh 60,000 per
                year)
              </div>
            </div>

            <div className="table-row">
              <div>
                <strong>Owner Occupied Interest</strong>
              </div>
              <div>Actual interest paid</div>
              <div>
                Interest on mortgage for owner-occupied property (max KSh
                300,000 per year)
              </div>
            </div>

            <div className="table-row">
              <div>
                <strong>NSSF Contributions</strong>
              </div>
              <div>KSh 1,080 per month</div>
              <div>
                Mandatory contributions to the National Social Security Fund
              </div>
            </div>

            <div className="table-row">
              <div>
                <strong>NHIF Contributions</strong>
              </div>
              <div>Based on income</div>
              <div>Contributions to the National Hospital Insurance Fund</div>
            </div>

            <div className="table-row">
              <div>
                <strong>Pension Contributions</strong>
              </div>
              <div>Up to 30% of income</div>
              <div>
                Contributions to registered pension schemes (max KSh 240,000 per
                year)
              </div>
            </div>
          </div>

          <div className="info-action">
            <h4>
              <i className="fas fa-check-circle"></i> Claiming Reliefs
            </h4>
            <p>
              Most reliefs are automatically applied by your employer through
              the PAYE system. However, you may need to provide supporting
              documents for certain deductions like mortgage interest or
              additional pension contributions.
            </p>
          </div>
        </section>

        <section id="calculator" className="pit-section">
          <h2>
            <i className="fas fa-calculator"></i> Income Tax Calculator
          </h2>

          <div className="calculator-box">
            <h3 className="calculator-title">
              <i className="fas fa-calculator"></i> Estimate Your Income Tax
            </h3>

            <div className="calculator-form">
              <div className="form-group">
                <label htmlFor="monthly-income">
                  Monthly Basic Salary (KSh)
                </label>
                <input
                  type="number"
                  id="monthly-income"
                  name="monthlyIncome"
                  value={calculatorData.monthlyIncome}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label htmlFor="allowances">Monthly Allowances (KSh)</label>
                <input
                  type="number"
                  id="allowances"
                  name="allowances"
                  value={calculatorData.allowances}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label htmlFor="nssf">Monthly NSSF Contribution (KSh)</label>
                <input
                  type="number"
                  id="nssf"
                  name="nssf"
                  value={calculatorData.nssf}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nhif">Monthly NHIF Contribution (KSh)</label>
                <input
                  type="number"
                  id="nhif"
                  name="nhif"
                  value={calculatorData.nhif}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pension">
                  Monthly Pension Contribution (KSh)
                </label>
                <input
                  type="number"
                  id="pension"
                  name="pension"
                  value={calculatorData.pension}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label htmlFor="insurance">
                  Annual Insurance Premium (KSh)
                </label>
                <input
                  type="number"
                  id="insurance"
                  name="insurance"
                  value={calculatorData.insurance}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <button className="btn btn-primary" onClick={calculateTax}>
              <i className="fas fa-calculator"></i> Calculate Tax
            </button>

            {calculatorResult && (
              <div className="calculator-result">
                <div className="result-title">Your Tax Estimate</div>
                <div className="result-value">
                  KSh{' '}
                  {calculatorResult.finalTax.toLocaleString('en-KE', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>

                <div className="result-breakdown">
                  <div className="breakdown-item">
                    <div className="breakdown-label">Monthly Gross Income</div>
                    <div className="breakdown-value">
                      KSh{' '}
                      {calculatorResult.grossIncome.toLocaleString('en-KE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>

                  <div className="breakdown-item">
                    <div className="breakdown-label">Total Deductions</div>
                    <div className="breakdown-value">
                      KSh{' '}
                      {calculatorResult.totalDeductions.toLocaleString(
                        'en-KE',
                        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                      )}
                    </div>
                  </div>

                  <div className="breakdown-item">
                    <div className="breakdown-label">Taxable Income</div>
                    <div className="breakdown-value">
                      KSh{' '}
                      {calculatorResult.taxableIncome.toLocaleString('en-KE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>

                  <div className="breakdown-item">
                    <div className="breakdown-label">Net Monthly Pay</div>
                    <div className="breakdown-value">
                      KSh{' '}
                      {calculatorResult.netPay.toLocaleString('en-KE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                </div>

                <p className="result-disclaimer">
                  This is an estimate. Actual tax may vary based on your
                  specific circumstances.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="filing" className="pit-section">
          <h2>
            <i className="fas fa-file-alt"></i> Filing Income Tax Returns
          </h2>

          <p>
            Even if you're employed and your tax is deducted through PAYE, you
            are still required to file an annual income tax return by June 30th
            of the following year. The process involves:
          </p>

          <ol>
            <li>
              <strong>Log in to iTax</strong> using your KRA credentials
            </li>
            <li>
              <strong>Select Income Tax Return</strong> from the returns menu
            </li>
            <li>
              <strong>Choose the appropriate form</strong> (IT1 for employed
              individuals)
            </li>
            <li>
              <strong>Declare all income</strong> including employment, rental,
              business, and investment income
            </li>
            <li>
              <strong>Claim all allowable deductions</strong> and reliefs
            </li>
            <li>
              <strong>Review and submit</strong> your return
            </li>
            <li>
              <strong>Download acknowledgment</strong> for your records
            </li>
          </ol>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Penalties for
              Non-Filing
            </h4>
            <p>
              Failure to file your income tax return by the deadline attracts a
              penalty of KSh 10,000 or 5% of the tax due, whichever is higher.
              Additionally, you may lose out on tax refunds if you don't file
              returns.
            </p>
          </div>
        </section>

        <section className="pit-section">
          <h2>
            <i className="fas fa-exclamation-circle"></i> Common Mistakes to
            Avoid
          </h2>

          <p>
            Many taxpayers make avoidable errors when it comes to income tax.
            Watch out for these common mistakes:
          </p>

          <ul>
            <li>
              <strong>Not filing returns</strong> because tax is deducted at
              source
            </li>
            <li>
              <strong>Failing to declare</strong> all sources of income
            </li>
            <li>
              <strong>Not claiming</strong> all allowable deductions and reliefs
            </li>
            <li>
              <strong>Incorrect information</strong> on tax returns
            </li>
            <li>
              <strong>Missing deadlines</strong> for filing returns
            </li>
            <li>
              <strong>Poor record keeping</strong> of income and expenses
            </li>
          </ul>

          <div className="info-quote">
            "Filing your tax return is not just a legal requirement—it's an
            opportunity to regularize your tax affairs, claim refunds if
            applicable, and avoid penalties for non-compliance."
          </div>
        </section>

        <section className="pit-section">
          <h2>
            <i className="fas fa-question-circle"></i> Frequently Asked
            Questions
          </h2>

          <h3>
            <i className="fas fa-question"></i> Do I need to file a return if my
            employer deducts PAYE?
          </h3>
          <p>
            Yes, all individuals with a KRA PIN are required to file an annual
            income tax return, even if tax is deducted through PAYE. This allows
            you to declare all income sources and claim any applicable reliefs.
          </p>

          <h3>
            <i className="fas fa-question"></i> What happens if I overpay tax?
          </h3>
          <p>
            If you overpay tax through the PAYE system, you can claim a refund
            by filing your income tax return. KRA will process the refund after
            verifying your claim.
          </p>

          <h3>
            <i className="fas fa-question"></i> Can I file my return after the
            deadline?
          </h3>
          <p>
            Yes, you can file after the deadline, but you will incur penalties.
            It's best to file before June 30th to avoid these penalties.
          </p>

          <h3>
            <i className="fas fa-question"></i> What records should I keep for
            tax purposes?
          </h3>
          <p>
            You should keep records of all income, payslips, deduction claims,
            and supporting documents for at least five years after filing your
            return.
          </p>
        </section>

        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-hashtag"></i> IncomeTaxKenya
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> PAYE
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCompliance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> PersonalFinance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KRAGuide
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxTips
          </span>
        </div>

        <div className="action-buttons">
          <button className="action-btn primary">
            <i className="fas fa-file-alt"></i> File Your Tax Return
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-download"></i> Download Tax Guide
          </button>
          <button className="action-btn secondary">
            <i className="fas fa-question-circle"></i> Contact Tax Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalIncomeTaxGuideTwo;
