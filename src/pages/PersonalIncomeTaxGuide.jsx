import React, { useState } from 'react';
import './PersonalIncomeTaxGuide.css';

const PersonalIncomeTaxGuide = () => {
  const [calculatorInputs, setCalculatorInputs] = useState({
    monthlyIncome: '',
    allowances: '',
    nssf: '1080',
    nhif: '',
    pension: '',
    insurance: '',
  });

  const [calculatorResult, setCalculatorResult] = useState({
    showResult: false,
    grossIncome: 0,
    totalDeductions: 0,
    taxableIncome: 0,
    taxAmount: 0,
    netPay: 0,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCalculatorInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const calculateTax = () => {
    // Get input values
    const monthlyIncome = parseFloat(calculatorInputs.monthlyIncome) || 0;
    const allowances = parseFloat(calculatorInputs.allowances) || 0;
    const nssf = parseFloat(calculatorInputs.nssf) || 0;
    const nhif = parseFloat(calculatorInputs.nhif) || 0;
    const pension = parseFloat(calculatorInputs.pension) || 0;
    const insurance = parseFloat(calculatorInputs.insurance) || 0;

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

    // Update results
    setCalculatorResult({
      showResult: true,
      grossIncome,
      totalDeductions,
      taxableIncome,
      taxAmount: finalTax,
      netPay,
    });
  };

  const formatCurrency = (amount) => {
    return (
      'KSh ' +
      amount.toLocaleString('en-KE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">
          Understanding Personal Income Tax in Kenya: A Complete Guide for
          Employees
        </h1>
        <div className="blog-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> September 12, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 15 min read
          </span>
          <span>
            <i className="fas fa-user"></i> By KRA Tax Education Department
          </span>
          <span>
            <i className="fas fa-folder"></i> Income Tax, PAYE, Personal Finance
          </span>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-hero">
          <i className="fas fa-file-invoice-dollar"></i>
          <div className="hero-caption">
            Understanding how income tax works is essential for every employee
            in Kenya
          </div>
        </div>

        <div className="blog-section">
          <p>
            Personal Income Tax, commonly administered through the Pay As You
            Earn (PAYE) system, is a fundamental component of Kenya's tax
            regime. For employees, understanding how income tax works is crucial
            for financial planning and compliance with tax laws.
          </p>

          <p>
            This comprehensive guide covers everything you need to know about
            personal income tax in Kenya—from how it's calculated and deducted
            to understanding tax bands, reliefs, and how to file returns.
            Whether you're starting your first job or looking to optimize your
            tax situation, this article will provide valuable insights.
          </p>
        </div>

        <div className="blog-section">
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

          <p>
            The PAYE system operates on the principle of cumulative taxation,
            where tax is calculated on the total income earned from January to
            the current month, considering the tax already paid in previous
            months.
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
        </div>

        <div className="blog-section">
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
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-hand-holding-usd"></i> Allowable Deductions and
            Reliefs
          </h2>

          <p>
            To reduce your taxable income, you can claim various deductions and
            reliefs:
          </p>

          <div className="blog-table">
            <table>
              <thead>
                <tr>
                  <th>Deduction/Relief</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Personal Relief</strong>
                  </td>
                  <td>KSh 2,880 per month</td>
                  <td>
                    Available to all resident individuals with income from
                    employment
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Insurance Relief</strong>
                  </td>
                  <td>15% of premium</td>
                  <td>
                    On life insurance and educational policies (max KSh 60,000
                    per year)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Owner Occupied Interest</strong>
                  </td>
                  <td>Actual interest paid</td>
                  <td>
                    Interest on mortgage for owner-occupied property (max KSh
                    300,000 per year)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>NSSF Contributions</strong>
                  </td>
                  <td>KSh 1,080 per month</td>
                  <td>
                    Mandatory contributions to the National Social Security Fund
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>NHIF Contributions</strong>
                  </td>
                  <td>Based on income</td>
                  <td>Contributions to the National Hospital Insurance Fund</td>
                </tr>
                <tr>
                  <td>
                    <strong>Pension Contributions</strong>
                  </td>
                  <td>Up to 30% of income</td>
                  <td>
                    Contributions to registered pension schemes (max KSh 240,000
                    per year)
                  </td>
                </tr>
              </tbody>
            </table>
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
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-calculator"></i> Income Tax Calculator
          </h2>

          <div className="calculator-box">
            <h3 className="calculator-title">
              <i className="fas fa-calculator"></i> Estimate Your Income Tax
            </h3>

            <div className="calculator-form">
              <div className="form-group">
                <label htmlFor="monthlyIncome">
                  Monthly Basic Salary (KSh)
                </label>
                <input
                  type="number"
                  id="monthlyIncome"
                  value={calculatorInputs.monthlyIncome}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label htmlFor="allowances">Monthly Allowances (KSh)</label>
                <input
                  type="number"
                  id="allowances"
                  value={calculatorInputs.allowances}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label htmlFor="nssf">Monthly NSSF Contribution (KSh)</label>
                <input
                  type="number"
                  id="nssf"
                  value={calculatorInputs.nssf}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nhif">Monthly NHIF Contribution (KSh)</label>
                <input
                  type="number"
                  id="nhif"
                  value={calculatorInputs.nhif}
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
                  value={calculatorInputs.pension}
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
                  value={calculatorInputs.insurance}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <button className="btn btn-primary" onClick={calculateTax}>
              <i className="fas fa-calculator"></i> Calculate Tax
            </button>

            {calculatorResult.showResult && (
              <div className="calculator-result">
                <div className="result-title">Your Tax Estimate</div>
                <div className="result-value">
                  {formatCurrency(calculatorResult.taxAmount)}
                </div>

                <div className="result-breakdown">
                  <div className="breakdown-item">
                    <div className="breakdown-label">Monthly Gross Income</div>
                    <div className="breakdown-value">
                      {formatCurrency(calculatorResult.grossIncome)}
                    </div>
                  </div>

                  <div className="breakdown-item">
                    <div className="breakdown-label">Total Deductions</div>
                    <div className="breakdown-value">
                      {formatCurrency(calculatorResult.totalDeductions)}
                    </div>
                  </div>

                  <div className="breakdown-item">
                    <div className="breakdown-label">Taxable Income</div>
                    <div className="breakdown-value">
                      {formatCurrency(calculatorResult.taxableIncome)}
                    </div>
                  </div>

                  <div className="breakdown-item">
                    <div className="breakdown-label">Net Monthly Pay</div>
                    <div className="breakdown-value">
                      {formatCurrency(calculatorResult.netPay)}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    marginTop: '20px',
                    fontSize: '0.9rem',
                    color: '#718096',
                  }}
                >
                  This is an estimate. Actual tax may vary based on your
                  specific circumstances.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="blog-section">
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
        </div>

        <div className="blog-section">
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

          <div className="blog-quote">
            "Filing your tax return is not just a legal requirement—it's an
            opportunity to regularize your tax affairs, claim refunds if
            applicable, and avoid penalties for non-compliance."
          </div>
        </div>

        <div className="blog-section">
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
        </div>

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
          <a href="#" className="btn btn-primary">
            <i className="fas fa-file-alt"></i> File Your Tax Return
          </a>
          <a href="#" className="btn btn-outline">
            <i className="fas fa-download"></i> Download Tax Guide
          </a>
          <a href="#" className="btn btn-outline">
            <i className="fas fa-question-circle"></i> Contact Tax Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalIncomeTaxGuide;
