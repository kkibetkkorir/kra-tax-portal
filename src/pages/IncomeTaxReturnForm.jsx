import React, { useState } from 'react';
import './IncomeTaxReturnForm.css';

const IncomeTaxReturnForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [incomes, setIncomes] = useState([
    { type: 'Employment Income', amount: '', source: '' },
    { type: 'Business Income', amount: '', source: '' },
  ]);
  const [formData, setFormData] = useState({
    pin: 'P000123456X',
    name: 'John Kamau Mwangi',
    id: '12345678',
    phone: '',
    email: '',
    address: '',
    nhif: '',
    nssf: '',
    insurance: '',
    mortgage: '',
    pension: '',
    donations: '',
    declaration: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleIncomeChange = (index, field, value) => {
    const updatedIncomes = [...incomes];
    updatedIncomes[index][field] = value;
    setIncomes(updatedIncomes);
  };

  const addIncomeRow = () => {
    setIncomes([
      ...incomes,
      { type: 'Employment Income', amount: '', source: '' },
    ]);
  };

  const removeIncomeRow = (index) => {
    if (incomes.length > 1) {
      const updatedIncomes = incomes.filter((_, i) => i !== index);
      setIncomes(updatedIncomes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.declaration) {
      alert(
        'Please confirm that the information provided is true and correct by checking the declaration box.'
      );
      return;
    }

    // In a real application, this would submit the form
    alert(
      'Your tax return has been submitted successfully! You will receive a confirmation email shortly.'
    );
  };

  const calculateTotals = () => {
    const totalIncome = incomes.reduce(
      (sum, income) => sum + (parseFloat(income.amount) || 0),
      0
    );
    const totalDeductions = Object.keys(formData)
      .filter((key) =>
        [
          'nhif',
          'nssf',
          'insurance',
          'mortgage',
          'pension',
          'donations',
        ].includes(key)
      )
      .reduce((sum, key) => sum + (parseFloat(formData[key]) || 0), 0);

    const taxableIncome = Math.max(0, totalIncome - totalDeductions);

    // Simple tax calculation (simplified for demo)
    let taxPayable = 0;
    if (taxableIncome > 0) {
      if (taxableIncome <= 288000) {
        taxPayable = taxableIncome * 0.1;
      } else if (taxableIncome <= 576000) {
        taxPayable = 28800 + (taxableIncome - 288000) * 0.15;
      } else if (taxableIncome <= 864000) {
        taxPayable = 28800 + 43200 + (taxableIncome - 576000) * 0.2;
      } else if (taxableIncome <= 1152000) {
        taxPayable = 28800 + 43200 + 57600 + (taxableIncome - 864000) * 0.25;
      } else {
        taxPayable =
          28800 + 43200 + 57600 + 72000 + (taxableIncome - 1152000) * 0.3;
      }
    }

    return {
      totalIncome,
      totalDeductions,
      taxableIncome,
      taxPayable,
    };
  };

  const { totalIncome, totalDeductions, taxableIncome, taxPayable } =
    calculateTotals();

  return (
    <div className="tax-form-container">
      <div className="tax-form-header">
        <div className="logo">
          <div className="logo-icon">
            <i className="fas fa-landmark"></i>
          </div>
          <div className="logo-text">KRA e-Filing</div>
        </div>
        <div className="form-title">Income Tax Return Form</div>
      </div>

      <div className="progress-container">
        <div className="progress-steps">
          <div className={`step ${activeStep === 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-text">Taxpayer Info</div>
          </div>
          <div className={`step ${activeStep === 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-text">Income</div>
          </div>
          <div className={`step ${activeStep === 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-text">Deductions</div>
          </div>
          <div className={`step ${activeStep === 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
            <div className="step-text">Review</div>
          </div>
        </div>
      </div>

      <form className="tax-form-body" onSubmit={handleSubmit}>
        <h2 className="section-title">Taxpayer Information</h2>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="pin">KRA PIN Number</label>
            <input
              type="text"
              id="pin"
              name="pin"
              value={formData.pin}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="id">National ID Number</label>
            <input type="text" id="id" name="id" value={formData.id} disabled />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. 0712 345 678"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
            <div className="form-hint">
              We'll send a copy of your filing confirmation to this address
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Physical Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your physical address"
            />
          </div>
        </div>

        <h2 className="section-title">Income Details</h2>

        <table className="income-table">
          <thead>
            <tr>
              <th>Income Type</th>
              <th>Amount (KSh)</th>
              <th>Source/Employer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income, index) => (
              <tr key={index}>
                <td>
                  <select
                    value={income.type}
                    onChange={(e) =>
                      handleIncomeChange(index, 'type', e.target.value)
                    }
                  >
                    <option value="Employment Income">Employment Income</option>
                    <option value="Business Income">Business Income</option>
                    <option value="Rental Income">Rental Income</option>
                    <option value="Investment Income">Investment Income</option>
                    <option value="Other Income">Other Income</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={income.amount}
                    onChange={(e) =>
                      handleIncomeChange(index, 'amount', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={
                      income.type === 'Employment Income'
                        ? 'Company name'
                        : 'Source name'
                    }
                    value={income.source}
                    onChange={(e) =>
                      handleIncomeChange(index, 'source', e.target.value)
                    }
                  />
                </td>
                <td>
                  {incomes.length > 1 && (
                    <i
                      className="fas fa-times remove-icon"
                      onClick={() => removeIncomeRow(index)}
                    ></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-row" onClick={addIncomeRow}>
          <i className="fas fa-plus"></i> Add another income source
        </div>

        <h2 className="section-title">Deductions & Reliefs</h2>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="nhif">NHIF Contributions (KSh)</label>
            <input
              type="number"
              id="nhif"
              name="nhif"
              value={formData.nhif}
              onChange={handleInputChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nssf">NSSF Contributions (KSh)</label>
            <input
              type="number"
              id="nssf"
              name="nssf"
              value={formData.nssf}
              onChange={handleInputChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="insurance">Insurance Premiums (KSh)</label>
            <input
              type="number"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleInputChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mortgage">Mortgage Interest (KSh)</label>
            <input
              type="number"
              id="mortgage"
              name="mortgage"
              value={formData.mortgage}
              onChange={handleInputChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pension">Pension Contributions (KSh)</label>
            <input
              type="number"
              id="pension"
              name="pension"
              value={formData.pension}
              onChange={handleInputChange}
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="donations">Charitable Donations (KSh)</label>
            <input
              type="number"
              id="donations"
              name="donations"
              value={formData.donations}
              onChange={handleInputChange}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="summary-card">
          <h3 style={{ marginBottom: '15px', color: '#2d3748' }}>
            Tax Summary
          </h3>

          <div className="summary-item">
            <div>Total Income:</div>
            <div>
              KSh{' '}
              {totalIncome.toLocaleString('en-KE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>

          <div className="summary-item">
            <div>Total Deductions:</div>
            <div>
              KSh{' '}
              {totalDeductions.toLocaleString('en-KE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>

          <div className="summary-item">
            <div>Taxable Income:</div>
            <div>
              KSh{' '}
              {taxableIncome.toLocaleString('en-KE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>

          <div className="summary-item summary-total">
            <div>Tax Payable:</div>
            <div>
              KSh{' '}
              {taxPayable.toLocaleString('en-KE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>

        <div className="form-group full-width declaration">
          <label htmlFor="declaration">
            <input
              type="checkbox"
              id="declaration"
              name="declaration"
              checked={formData.declaration}
              onChange={handleInputChange}
            />
            I declare that the information provided is true and correct to the
            best of my knowledge
          </label>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-outline">
            <i className="fas fa-save"></i> Save Draft
          </button>

          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Submit Return
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncomeTaxReturnForm;
