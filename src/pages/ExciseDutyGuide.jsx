import React from 'react';
import './ExciseDutyGuide.css';

const ExciseDutyGuide = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">
          Understanding Excise Duty in Kenya: A Complete Guide for Businesses
        </h1>
        <div className="blog-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> December 5, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 15 min read
          </span>
          <span>
            <i className="fas fa-user"></i> By KRA Excise Duty Department
          </span>
          <span>
            <i className="fas fa-folder"></i> Excise Duty, Manufacturing,
            Importation
          </span>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-hero">
          <i className="fas fa-wine-bottle"></i>
          <div className="hero-caption">
            Excise Duty is a tax on specific goods manufactured or imported into
            Kenya
          </div>
        </div>

        <div className="blog-section">
          <p>
            Excise Duty is a consumption tax levied on specific goods produced
            or manufactured locally or imported into Kenya. Unlike Value Added
            Tax (VAT) which applies to most goods and services, Excise Duty
            targets specific products, typically those considered luxury items,
            harmful to health, or environmentally damaging.
          </p>

          <p>
            This comprehensive guide covers everything you need to know about
            Excise Duty in Kenya—from understanding which products are taxable
            and the applicable rates to compliance requirements and recent
            changes. Whether you're a manufacturer, importer, or distributor,
            this article will provide valuable insights into managing your
            Excise Duty obligations.
          </p>
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-info-circle"></i> What is Excise Duty?
          </h2>

          <p>
            Excise Duty is a tax imposed on specific goods manufactured in Kenya
            or imported into the country. It's typically applied to products
            that:
          </p>

          <ul>
            <li>
              Are considered <strong>luxury items</strong> (e.g., cosmetics,
              jewelry)
            </li>
            <li>
              Have <strong>negative health effects</strong> (e.g., alcohol,
              tobacco, sugary drinks)
            </li>
            <li>
              Cause <strong>environmental harm</strong> (e.g., plastics, fossil
              fuels)
            </li>
            <li>
              Are considered <strong>sin products</strong> (e.g., gambling
              services)
            </li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Key Concept
            </h4>
            <p>
              Excise Duty serves dual purposes: it generates government revenue
              and acts as a policy tool to discourage consumption of certain
              products that may have negative social, health, or environmental
              impacts.
            </p>
          </div>
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-boxes"></i> Products Subject to Excise Duty
          </h2>

          <p>
            Excise Duty in Kenya applies to a wide range of products and
            services. The main categories include:
          </p>

          <div className="category-section">
            <div className="category-header">
              <i className="fas fa-wine-glass-alt"></i> Alcoholic Beverages
            </div>
            <div className="product-grid">
              <div className="product-card">
                <div className="product-name">Beer</div>
                <div className="product-rate">KSh 100 per liter</div>
                <div className="product-description">
                  All malted beer and other beers
                </div>
              </div>

              <div className="product-card">
                <div className="product-name">Wines</div>
                <div className="product-rate">KSh 150 per liter</div>
                <div className="product-description">
                  Still and sparkling wines
                </div>
              </div>

              <div className="product-card">
                <div className="product-name">Spirits</div>
                <div className="product-rate">KSh 250 per liter</div>
                <div className="product-description">
                  Whisky, vodka, gin, etc.
                </div>
              </div>
            </div>
          </div>

          <div className="category-section">
            <div className="category-header">
              <i className="fas fa-smoking"></i> Tobacco Products
            </div>
            <div className="product-grid">
              <div className="product-card">
                <div className="product-name">Cigarettes</div>
                <div className="product-rate">KSh 2,500 per mille</div>
                <div className="product-description">
                  All types of cigarettes
                </div>
              </div>

              <div className="product-card">
                <div className="product-name">Cigars</div>
                <div className="product-rate">KSh 15,000 per kg</div>
                <div className="product-description">All types of cigars</div>
              </div>

              <div className="product-card">
                <div className="product-name">Other Tobacco</div>
                <div className="product-rate">KSh 2,000 per kg</div>
                <div className="product-description">
                  Pipe tobacco, chewing tobacco, etc.
                </div>
              </div>
            </div>
          </div>

          <div className="category-section">
            <div className="category-header">
              <i className="fas fa-gas-pump"></i> Petroleum Products
            </div>
            <div className="product-grid">
              <div className="product-card">
                <div className="product-name">Petrol</div>
                <div className="product-rate">KSh 20.30 per liter</div>
                <div className="product-description">
                  Super petrol and premium petrol
                </div>
              </div>

              <div className="product-card">
                <div className="product-name">Diesel</div>
                <div className="product-rate">KSh 10.90 per liter</div>
                <div className="product-description">Automotive diesel oil</div>
              </div>

              <div className="product-card">
                <div className="product-name">Kerosene</div>
                <div className="product-rate">KSh 6.85 per liter</div>
                <div className="product-description">Illuminating kerosene</div>
              </div>
            </div>
          </div>

          <div className="info-action">
            <h4>
              <i className="fas fa-check-circle"></i> Expanded Scope
            </h4>
            <p>
              In recent years, Kenya has expanded Excise Duty to include
              additional products such as plastic packaging materials, sugary
              beverages, and digital services. Always check the latest
              regulations for current taxable products and rates.
            </p>
          </div>
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-calculator"></i> Calculating Excise Duty
          </h2>

          <p>
            Excise Duty can be calculated using different methods depending on
            the product:
          </p>

          <div className="blog-table">
            <table>
              <thead>
                <tr>
                  <th>Calculation Method</th>
                  <th>Description</th>
                  <th>Example Products</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Specific Duty</strong>
                  </td>
                  <td>Fixed amount per unit of measurement</td>
                  <td>KSh per liter, KSh per kg, KSh per unit</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ad Valorem Duty</strong>
                  </td>
                  <td>Percentage of the product's value</td>
                  <td>10%, 15%, 20% of value</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mixed System</strong>
                  </td>
                  <td>Combination of specific and ad valorem</td>
                  <td>KSh X per unit + Y% of value</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Calculation
              Example
            </h4>
            <p>
              For a liter of spirits with a specific duty of KSh 250: <br />
              Excise Duty = 1 × KSh 250 = KSh 250
              <br />
              <br />
              For jewelry with 10% ad valorem duty and value of KSh 50,000:
              <br />
              Excise Duty = 10% × KSh 50,000 = KSh 5,000
            </p>
          </div>
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-file-invoice-dollar"></i> Excise Duty
            Compliance Process
          </h2>

          <p>Complying with Excise Duty requirements involves several steps:</p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-title">Registration</div>
              <div className="step-description">
                Register for Excise Duty through iTax if you manufacture or
                import excisable products
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-title">Record Keeping</div>
              <div className="step-description">
                Maintain detailed records of production, imports, and sales
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-title">Calculate Duty</div>
              <div className="step-description">
                Compute Excise Duty using the appropriate method and rate
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-title">File Return</div>
              <div className="step-description">
                File Excise Duty return through iTax by the 20th of the
                following month
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-title">Pay Duty</div>
              <div className="step-description">
                Remit the Excise Duty due by the deadline
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-title">Maintain Compliance</div>
              <div className="step-description">
                Keep up with changing regulations and rates
              </div>
            </div>
          </div>
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-exclamation-circle"></i> Common Compliance
            Challenges
          </h2>

          <p>
            Businesses often face several challenges with Excise Duty
            compliance:
          </p>

          <ul>
            <li>
              <strong>Frequent rate changes:</strong> Excise Duty rates often
              change during budget readings
            </li>
            <li>
              <strong>Product classification:</strong> Determining the correct
              category for products
            </li>
            <li>
              <strong>Valuation issues:</strong> Properly valuing goods for ad
              valorem duty
            </li>
            <li>
              <strong>Record keeping:</strong> Maintaining required production
              and sales records
            </li>
            <li>
              <strong>Timely filing:</strong> Meeting the monthly filing
              deadline
            </li>
            <li>
              <strong>System changes:</strong> Adapting to new digital systems
              like Excisable Goods Management System (EGMS)
            </li>
          </ul>

          <div className="blog-quote">
            "The introduction of the Excisable Goods Management System (EGMS)
            has significantly improved compliance and reduced counterfeit
            products in the market. All excisable products must now bear tax
            stamps for tracking purposes."
          </div>
        </div>

        <div className="blog-section">
          <h2>
            <i className="fas fa-sync-alt"></i> Recent Changes to Excise Duty
          </h2>

          <p>
            Kenya's Excise Duty regime has undergone significant changes in
            recent years:
          </p>

          <ul>
            <li>
              <strong>Expansion of taxable products</strong> to include plastic
              packaging, sugary beverages, and digital services
            </li>
            <li>
              <strong>Introduction of EGMS</strong> for better tracking of
              excisable goods
            </li>
            <li>
              <strong>Annual rate adjustments</strong> during budget readings
            </li>
            <li>
              <strong>Special provisions</strong> for manufacturers in export
              processing zones
            </li>
            <li>
              <strong>Enhanced enforcement</strong> measures against counterfeit
              products
            </li>
            <li>
              <strong>Digital services tax</strong> on specified digital
              services
            </li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Staying Updated
            </h4>
            <p>
              Subscribe to KRA updates and consult with tax professionals to
              stay informed about changes to Excise Duty regulations. The annual
              Finance Act typically introduces changes to Excise Duty rates and
              scope.
            </p>
          </div>
        </div>

        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-hashtag"></i> ExciseDuty
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> Manufacturing
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCompliance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KRAGuide
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KenyanBusiness
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxTips
          </span>
        </div>

        <div className="action-buttons">
          <a href="#" className="btn btn-primary">
            <i className="fas fa-file-alt"></i> File Excise Return
          </a>
          <a href="#" className="btn btn-outline">
            <i className="fas fa-download"></i> Download Excise Guide
          </a>
          <a href="#" className="btn btn-outline">
            <i className="fas fa-question-circle"></i> Contact Excise Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExciseDutyGuide;
