import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Guides.css';

const Guides = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const guides = [
    {
      id: 1,
      title: 'Personal Income Tax Guide',
      description:
        'Complete guide to understanding and filing personal income tax returns in Kenya',
      category: 'tax',
      icon: 'fas fa-file-invoice-dollar',
      readTime: '15 min read',
      level: 'Beginner',
      route: '/guides/personal-income-tax-guide',
    },
    {
      id: 2,
      title: 'Value Added Tax (VAT) Guide',
      description:
        'Everything you need to know about VAT registration, filing, and compliance',
      category: 'tax',
      icon: 'fas fa-receipt',
      readTime: '12 min read',
      level: 'Intermediate',
      route: '/guides/value-added-tax-guide',
    },
    {
      id: 3,
      title: 'Withholding Tax Guide',
      description:
        'Understanding withholding tax requirements and procedures for businesses',
      category: 'tax',
      icon: 'fas fa-hand-holding-usd',
      readTime: '14 min read',
      level: 'Intermediate',
      route: '/guides/withholding-tax-guide',
    },
    {
      id: 4,
      title: 'Rental Income Tax Guide',
      description:
        'How to declare and pay taxes on rental income from properties',
      category: 'tax',
      icon: 'fas fa-home',
      readTime: '10 min read',
      level: 'Beginner',
      route: '/guides/rental-income-tax-guide',
    },
    {
      id: 5,
      title: 'Digital Service Tax Guide',
      description: 'Guide to the new digital service tax for online businesses',
      category: 'digital',
      icon: 'fas fa-laptop-code',
      readTime: '8 min read',
      level: 'Beginner',
      route: '/guides/new-digital-service-tax',
    },
    {
      id: 6,
      title: 'Excise Duty Guide',
      description: 'Understanding excise duty on specific goods and services',
      category: 'tax',
      icon: 'fas fa-wine-bottle',
      readTime: '15 min read',
      level: 'Advanced',
      route: '/guides/exrcise-duty-guide',
    },
    {
      id: 7,
      title: 'Tax Compliance Certificate Guide',
      description:
        'How to obtain and maintain your tax compliance certificate (TCC)',
      category: 'compliance',
      icon: 'fas fa-file-certificate',
      readTime: '12 min read',
      level: 'Intermediate',
      route: '/guides/tax-compliance-certificate-guide',
    },
    {
      id: 8,
      title: 'iTax Platform Tutorial',
      description: 'Step-by-step guide to using the KRA iTax platform',
      category: 'digital',
      icon: 'fas fa-desktop',
      readTime: '20 min read',
      level: 'Beginner',
      route: '/support-center',
    },
    {
      id: 9,
      title: 'Tax Appeals Process Guide',
      description: 'How to appeal tax decisions and disputes with KRA',
      category: 'compliance',
      icon: 'fas fa-gavel',
      readTime: '18 min read',
      level: 'Advanced',
      route: '/support-center',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Guides', icon: 'fas fa-book' },
    { id: 'tax', name: 'Tax Guides', icon: 'fas fa-file-invoice' },
    { id: 'compliance', name: 'Compliance', icon: 'fas fa-check-circle' },
    { id: 'digital', name: 'Digital Services', icon: 'fas fa-laptop' },
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const [activeLevel, setActiveLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory =
      activeCategory === 'all' || guide.category === activeCategory;
    const matchesLevel =
      activeLevel === 'all' || guide.level.toLowerCase() === activeLevel;
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleGuideClick = (guide) => {
    if (guide.route) {
      navigate(guide.route);
    }
  };

  return (
    <div className="guides-container">
      <div className="guides-header">
        <h1>Tax Guides & Resources</h1>
        <p>
          Comprehensive guides to help you understand and comply with Kenyan tax
          regulations
        </p>
      </div>

      <div className="guides-controls">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Category:</label>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${
                    activeCategory === category.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <i className={category.icon}></i> {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Level:</label>
            <div className="filter-buttons">
              {levels.map((level) => (
                <button
                  key={level.id}
                  className={`filter-btn ${
                    activeLevel === level.id ? 'active' : ''
                  }`}
                  onClick={() => setActiveLevel(level.id)}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="guides-grid">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide) => (
            <div key={guide.id} className="guide-card">
              <div className="guide-icon">
                <i className={guide.icon}></i>
              </div>
              <div className="guide-content">
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <div className="guide-meta">
                  <span className="guide-level">{guide.level}</span>
                  <span className="guide-time">
                    <i className="fas fa-clock"></i> {guide.readTime}
                  </span>
                </div>
              </div>
              <div className="guide-actions">
                <button 
                  className="guide-btn primary"
                  onClick={() => handleGuideClick(guide)}
                >
                  <i className="fas fa-book-open"></i> Read Guide
                </button>
                <button className="guide-btn secondary">
                  <i className="fas fa-download"></i> Download
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No guides found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <div className="guides-featured">
        <h2>Featured Guides</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-badge">Most Popular</div>
            <i className="fas fa-file-invoice-dollar"></i>
            <h3>Complete Tax Filing Guide 2023</h3>
            <p>Step-by-step instructions for filing your annual tax returns</p>
            <button 
              className="btn primary"
              onClick={() => navigate('/guides/income-tax-return-form')}
            >
              Read Now
            </button>
          </div>

          <div className="featured-card">
            <div className="featured-badge">New</div>
            <i className="fas fa-mobile-alt"></i>
            <h3>Mobile Tax Services Guide</h3>
            <p>How to use KRA mobile services for tax compliance</p>
            <button 
              className="btn primary"
              onClick={() => navigate('/support-center')}
            >
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
