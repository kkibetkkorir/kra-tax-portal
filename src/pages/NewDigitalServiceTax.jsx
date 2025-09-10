import React, { useState } from 'react';
import './NewDigitalServiceTax.css';

const NewDigitalServiceTax = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dst-container">
      <div className="dst-header">
        <h1 className="dst-title">Digital Service Tax Guide</h1>
        <div className="dst-meta">
          <span>
            <i className="fas fa-calendar-alt"></i> June 28, 2023
          </span>
          <span>
            <i className="fas fa-clock"></i> 8 min read
          </span>
          <span>
            <i className="fas fa-user"></i> KRA Tax Policy Unit
          </span>
        </div>
      </div>

      <div className="dst-nav">
        <button
          className={`dst-nav-btn ${
            activeSection === 'overview' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('overview')}
        >
          <i className="fas fa-info-circle"></i> Overview
        </button>
        <button
          className={`dst-nav-btn ${
            activeSection === 'services' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('services')}
        >
          <i className="fas fa-laptop"></i> Services
        </button>
        <button
          className={`dst-nav-btn ${
            activeSection === 'compliance' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('compliance')}
        >
          <i className="fas fa-file-alt"></i> Compliance
        </button>
        <button
          className={`dst-nav-btn ${
            activeSection === 'impact' ? 'active' : ''
          }`}
          onClick={() => scrollToSection('impact')}
        >
          <i className="fas fa-chart-line"></i> Impact
        </button>
      </div>

      <div className="dst-content">
        <div className="dst-hero">
          <i className="fas fa-laptop-code"></i>
          <p>
            Digital Service Tax applies to various online services and platforms
          </p>
        </div>

        <section id="overview" className="dst-section">
          <h2>
            <i className="fas fa-info-circle"></i> What is Digital Service Tax?
          </h2>

          <p>
            Kenya's Digital Service Tax (DST) represents a significant shift in
            how the country taxes the digital economy. Introduced through the
            Finance Act, 2020, and effective from January 1, 2021, DST aims to
            ensure that digital businesses contribute their fair share to
            Kenya's tax revenue, regardless of their physical presence in the
            country.
          </p>

          <div className="info-quote">
            "The Digital Service Tax ensures that the digital economy
            contributes fairly to tax revenues, creating a level playing field
            for all businesses operating in Kenya." - KRA Commissioner General
          </div>

          <p>
            Digital Service Tax is a 1.5% tax on the gross transaction value of
            digital services provided in Kenya. It applies to revenue generated
            from services offered through digital marketplaces, streaming
            platforms, online advertising, and other digital channels.
          </p>
        </section>

        <section id="services" className="dst-section">
          <h2>
            <i className="fas fa-laptop"></i> Services Subject to DST
          </h2>

          <p>
            DST applies to both resident and non-resident entities that derive
            income from providing digital services in Kenya. This includes:
          </p>

          <ul>
            <li>
              <strong>Non-resident digital service providers</strong> without a
              permanent establishment in Kenya
            </li>
            <li>
              <strong>Local digital service providers</strong> with an annual
              turnover exceeding KSh 5 million
            </li>
            <li>
              <strong>Marketplace platforms</strong> that facilitate
              transactions between buyers and sellers
            </li>
            <li>
              <strong>Content streaming services</strong> providing music,
              video, or other digital content
            </li>
            <li>
              <strong>Online advertising services</strong> targeting Kenyan
              consumers
            </li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Important Tip
            </h4>
            <p>
              Even if your company is based outside Kenya, if you provide
              digital services to Kenyan customers, you are likely required to
              register for and pay Digital Service Tax.
            </p>
          </div>

          <h3>Types of Services Subject to DST</h3>

          <div className="services-table">
            <div className="table-header">
              <div>Service Category</div>
              <div>Examples</div>
              <div>Tax Rate</div>
            </div>

            <div className="table-row">
              <div>Streaming Services</div>
              <div>Video on demand, music streaming, gaming services</div>
              <div>1.5%</div>
            </div>

            <div className="table-row">
              <div>Digital Marketplaces</div>
              <div>
                E-commerce platforms, app stores, online booking services
              </div>
              <div>1.5%</div>
            </div>

            <div className="table-row">
              <div>Online Advertising</div>
              <div>Targeted ads, banner ads, social media advertising</div>
              <div>1.5%</div>
            </div>

            <div className="table-row">
              <div>Data Services</div>
              <div>Cloud storage, website hosting, database services</div>
              <div>1.5%</div>
            </div>

            <div className="table-row">
              <div>Subscription Media</div>
              <div>News portals, online magazines, educational content</div>
              <div>1.5%</div>
            </div>
          </div>
        </section>

        <section id="compliance" className="dst-section">
          <h2>
            <i className="fas fa-file-alt"></i> Compliance Requirements
          </h2>

          <h3>Registration Process</h3>
          <p>
            Registration for Digital Service Tax is done through the KRA iTax
            platform:
          </p>

          <ol>
            <li>
              <strong>Log in to iTax</strong> using your KRA credentials
            </li>
            <li>
              Navigate to the <strong>Registration</strong> section
            </li>
            <li>
              Select <strong>Add Tax Obligation</strong>
            </li>
            <li>
              Choose <strong>Digital Service Tax</strong> from the list of taxes
            </li>
            <li>
              Complete the registration form with details about your digital
              services
            </li>
            <li>Submit the application and wait for confirmation from KRA</li>
          </ol>

          <div className="info-warning">
            <h4>
              <i className="fas fa-exclamation-triangle"></i> Compliance Warning
            </h4>
            <p>
              Failure to register for DST when required can result in penalties
              and interest on unpaid taxes. Non-resident entities should note
              that KRA has implemented international data sharing agreements to
              identify non-compliant digital service providers.
            </p>
          </div>

          <h3>Filing and Payment Process</h3>
          <p>
            Digital Service Tax returns are filed monthly, with the following
            timeline:
          </p>

          <ul>
            <li>
              <strong>Filing Period:</strong> Monthly (1st to last day of the
              month)
            </li>
            <li>
              <strong>Deadline:</strong> 20th day of the following month
            </li>
            <li>
              <strong>Payment Methods:</strong> Through iTax using various
              payment options
            </li>
          </ul>

          <p>To file your DST return:</p>

          <ol>
            <li>Log in to your iTax account</li>
            <li>
              Select <strong>Returns</strong> then <strong>File Return</strong>
            </li>
            <li>
              Choose <strong>Digital Service Tax</strong> as the tax type
            </li>
            <li>
              Enter the gross value of your digital services provided in Kenya
            </li>
            <li>The system will automatically calculate the 1.5% tax</li>
            <li>Validate and submit the return</li>
            <li>Generate a payment slip and make payment</li>
          </ol>

          <div className="info-action">
            <h4>
              <i className="fas fa-check-circle"></i> Action Required
            </h4>
            <p>
              If you provide digital services in Kenya, ensure you're registered
              for DST and filing returns monthly. Use the KRA iTax platform for
              all compliance activities to avoid penalties.
            </p>
          </div>

          <h3>Record Keeping Requirements</h3>
          <p>
            Businesses registered for DST must maintain accurate records for at
            least five years, including:
          </p>

          <ul>
            <li>
              Detailed records of all digital services provided to Kenyan
              customers
            </li>
            <li>Transaction values and dates</li>
            <li>Customer information (where applicable)</li>
            <li>DST returns filed and payments made</li>
            <li>Any exemptions or special treatments applied</li>
          </ul>
        </section>

        <section id="impact" className="dst-section">
          <h2>
            <i className="fas fa-chart-line"></i> Impact on Consumers and
            Businesses
          </h2>

          <p>
            The introduction of DST has several implications for different
            stakeholders:
          </p>

          <h3>For Consumers:</h3>
          <p>
            Most digital service providers may pass on the tax cost to
            consumers, potentially leading to slightly higher prices for digital
            services. However, the 1.5% rate is designed to minimize the impact
            on end-users.
          </p>

          <h3>For Local Businesses:</h3>
          <p>
            Kenyan digital service providers now operate on a more level playing
            field with international competitors, who previously may not have
            been subject to Kenyan taxes.
          </p>

          <h3>For International Providers:</h3>
          <p>
            Non-resident digital service providers must now comply with Kenyan
            tax laws, adding an administrative burden but ensuring fair
            contribution to the Kenyan economy.
          </p>

          <h3>Future Developments</h3>
          <p>
            The digital taxation landscape continues to evolve. Kenya is
            actively participating in international discussions led by the OECD
            to develop a consensus-based solution for taxing the digital
            economy. Businesses should stay informed about:
          </p>

          <ul>
            <li>Potential changes to DST rates or scope</li>
            <li>International agreements that might affect DST application</li>
            <li>Technological solutions for DST compliance</li>
            <li>Expansion of digital services covered by the tax</li>
          </ul>

          <div className="info-tip">
            <h4>
              <i className="fas fa-lightbulb"></i> Staying Updated
            </h4>
            <p>
              Subscribe to KRA newsletters or consult with tax professionals to
              stay informed about changes to digital service tax regulations.
            </p>
          </div>
        </section>

        <section className="dst-section">
          <h2>
            <i className="fas fa-check-circle"></i> Conclusion
          </h2>

          <p>
            Kenya's Digital Service Tax represents an important step in
            modernizing the tax system to keep pace with digital transformation.
            While it adds a compliance requirement for digital service
            providers, it ensures that all businesses operating in the Kenyan
            market contribute fairly to public revenues.
          </p>

          <p>
            Whether you're a local startup or a global tech giant, understanding
            and complying with DST regulations is essential for operating
            successfully in Kenya's digital economy. The KRA continues to
            provide resources and support to help businesses meet their DST
            obligations efficiently.
          </p>
        </section>

        <div className="tags-container">
          <span className="tag">
            <i className="fas fa-hashtag"></i> DigitalServiceTax
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxCompliance
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> DigitalEconomy
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> KRA
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> TaxKenya
          </span>
          <span className="tag">
            <i className="fas fa-hashtag"></i> Ecommerce
          </span>
        </div>

        <div className="action-buttons">
          <button className="action-btn primary">
            <i className="fas fa-file-alt"></i> File DST Return
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

export default NewDigitalServiceTax;
