import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Personal Income Tax in Kenya: A Complete Guide for Employees',
      excerpt: 'Personal Income Tax, commonly administered through the Pay As You Earn (PAYE) system, is a fundamental component of Kenya\'s tax regime.',
      category: 'income-tax',
      readTime: '15 min read',
      publishDate: '2023-09-12',
      author: 'KRA Tax Education Department',
      tags: ['IncomeTax', 'PAYE', 'TaxCompliance', 'PersonalFinance'],
      featured: true,
      component: 'PersonalIncomeTaxGuide'
    },
    {
      id: 2,
      title: 'Understanding Kenya\'s New Digital Service Tax: What You Need to Know',
      excerpt: 'Kenya\'s Digital Service Tax represents a significant shift in how the country taxes the digital economy.',
      category: 'digital-tax',
      readTime: '8 min read',
      publishDate: '2023-06-28',
      author: 'KRA Tax Policy Unit',
      tags: ['DigitalServiceTax', 'TaxCompliance', 'DigitalEconomy'],
      featured: true,
      component: 'NewDigitalServiceTax'
    },
    {
      id: 3,
      title: 'Understanding Withholding Tax in Kenya: A Complete Guide for Businesses',
      excerpt: 'Withholding Tax is an important component of Kenya\'s tax system, serving as an advance collection mechanism for various taxes.',
      category: 'withholding-tax',
      readTime: '14 min read',
      publishDate: '2023-10-08',
      author: 'KRA Withholding Tax Department',
      tags: ['WithholdingTax', 'TaxCompliance', 'BusinessTax'],
      featured: false,
      component: 'WithholdingTaxGuide'
    },
    {
      id: 4,
      title: 'Understanding Excise Duty in Kenya: A Complete Guide for Businesses',
      excerpt: 'Excise Duty is a consumption tax levied on specific goods produced or manufactured locally or imported into Kenya.',
      category: 'excise-duty',
      readTime: '15 min read',
      publishDate: '2023-12-05',
      author: 'KRA Excise Duty Department',
      tags: ['ExciseDuty', 'Manufacturing', 'TaxCompliance'],
      featured: false,
      component: 'ExciseDutyGuide'
    },
    {
      id: 5,
      title: 'Value Added Tax Guide: Everything You Need to Know',
      excerpt: 'VAT is a consumption tax levied on the value added to goods and services at each stage of production or distribution.',
      category: 'vat',
      readTime: '12 min read',
      publishDate: '2023-08-05',
      author: 'KRA VAT Department',
      tags: ['VATKenya', 'TaxCompliance', 'BusinessTax'],
      featured: false,
      component: 'ValueAddedTaxGuide'
    },
    {
      id: 6,
      title: 'Rental Income Tax Guide: A Complete Guide for Property Owners',
      excerpt: 'Property owners must understand their tax obligations for rental income to ensure compliance with KRA regulations.',
      category: 'rental-tax',
      readTime: '10 min read',
      publishDate: '2023-07-15',
      author: 'KRA Tax Advisory Team',
      tags: ['RentalIncomeTax', 'PropertyTax', 'TaxCompliance'],
      featured: false,
      component: 'RentalIncomeTaxGuide'
    },
    {
      id: 7,
      title: 'Tax Compliance Certificate Guide: Your Key to Business Success',
      excerpt: 'A Tax Compliance Certificate is proof that a business or individual is compliant with tax obligations.',
      category: 'compliance',
      readTime: '12 min read',
      publishDate: '2023-11-15',
      author: 'KRA Compliance Department',
      tags: ['TaxCompliance', 'TCC', 'BusinessRequirements'],
      featured: false,
      component: 'TaxComplianceCertificateGuide'
    },
    {
      id: 8,
      title: 'Income Tax Return Form: Step-by-Step Filing Guide',
      excerpt: 'Learn how to properly fill and submit your income tax return form through the iTax platform.',
      category: 'filing',
      readTime: '18 min read',
      publishDate: '2023-05-20',
      author: 'KRA e-Filing Department',
      tags: ['TaxFiling', 'iTax', 'IncomeTax'],
      featured: false,
      component: 'IncomeTaxReturnForm'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'fas fa-newspaper' },
    { id: 'income-tax', name: 'Income Tax', icon: 'fas fa-file-invoice-dollar' },
    { id: 'vat', name: 'VAT', icon: 'fas fa-receipt' },
    { id: 'withholding-tax', name: 'Withholding Tax', icon: 'fas fa-hand-holding-usd' },
    { id: 'digital-tax', name: 'Digital Tax', icon: 'fas fa-laptop-code' },
    { id: 'excise-duty', name: 'Excise Duty', icon: 'fas fa-wine-bottle' },
    { id: 'rental-tax', name: 'Rental Tax', icon: 'fas fa-home' },
    { id: 'compliance', name: 'Compliance', icon: 'fas fa-check-circle' },
    { id: 'filing', name: 'Filing', icon: 'fas fa-file-alt' }
  ];

  const handleBlogClick = (post) => {
    // Navigate to the specific guide page based on the component
    const routeMap = {
      'PersonalIncomeTaxGuide': '/guides/personal-income-tax-guide',
      'NewDigitalServiceTax': '/guides/new-digital-service-tax',
      'WithholdingTaxGuide': '/guides/withholding-tax-guide',
      'ExciseDutyGuide': '/guides/exrcise-duty-guide',
      'ValueAddedTaxGuide': '/guides/value-added-tax-guide',
      'RentalIncomeTaxGuide': '/guides/rental-income-tax-guide',
      'TaxComplianceCertificateGuide': '/guides/tax-compliance-certificate-guide',
      'IncomeTaxReturnForm': '/guides/income-tax-return-form'
    };

    const route = routeMap[post.component];
    if (route) {
      navigate(route);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'oldest':
        return new Date(a.publishDate) - new Date(b.publishDate);
      case 'popular':
        return b.featured ? 1 : -1;
      case 'shortest':
        return parseInt(a.readTime) - parseInt(b.readTime);
      case 'longest':
        return parseInt(b.readTime) - parseInt(a.readTime);
      default:
        return 0;
    }
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="container">
          <h1>KRA Tax Blog & Resources</h1>
          <p>Stay informed with the latest tax guides, updates, and compliance information</p>
          
          <div className="blog-search">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search articles, guides, and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Featured Posts Section */}
        {searchTerm === '' && activeCategory === 'all' && (
          <section className="featured-section">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <div 
                  key={post.id} 
                  className="featured-card"
                  onClick={() => handleBlogClick(post)}
                >
                  <div className="featured-badge">Featured</div>
                  <div className="featured-content">
                    <div className="featured-meta">
                      <span className="featured-category">{post.category.replace('-', ' ')}</span>
                      <span className="featured-date">{formatDate(post.publishDate)}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="featured-footer">
                      <div className="featured-author">
                        <i className="fas fa-user"></i>
                        {post.author}
                      </div>
                      <div className="featured-read-time">
                        <i className="fas fa-clock"></i>
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Filters and Controls */}
        <div className="blog-controls">
          <div className="filter-section">
            <h3>Filter by Category</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <i className={category.icon}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-section">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="shortest">Shortest Read</option>
              <option value="longest">Longest Read</option>
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <section className="blog-posts-section">
          <div className="posts-header">
            <h2 className="section-title">
              {activeCategory === 'all' ? 'All Articles' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <div className="posts-count">
              {sortedPosts.length} article{sortedPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {sortedPosts.length > 0 ? (
            <div className="blog-grid">
              {sortedPosts.map(post => (
                <article 
                  key={post.id} 
                  className="blog-card"
                  onClick={() => handleBlogClick(post)}
                >
                  <div className="blog-card-header">
                    <div className="blog-category">
                      <i className={categories.find(c => c.id === post.category)?.icon || 'fas fa-file-alt'}></i>
                      {post.category.replace('-', ' ')}
                    </div>
                    {post.featured && <div className="featured-indicator">Featured</div>}
                  </div>

                  <div className="blog-card-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    
                    <div className="blog-tags">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="blog-tag">#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="blog-card-footer">
                    <div className="blog-meta">
                      <div className="blog-author">
                        <i className="fas fa-user"></i>
                        {post.author}
                      </div>
                      <div className="blog-date">
                        <i className="fas fa-calendar"></i>
                        {formatDate(post.publishDate)}
                      </div>
                    </div>
                    <div className="blog-read-time">
                      <i className="fas fa-clock"></i>
                      {post.readTime}
                    </div>
                  </div>

                  <div className="blog-card-action">
                    <span className="read-more">
                      Read Article <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h3>Stay Updated with Tax News</h3>
              <p>Get the latest tax updates, guides, and compliance tips delivered to your inbox.</p>
              
              <form className="newsletter-form" onSubmit={(e) => {
                e.preventDefault();
                alert('Newsletter signup functionality would be implemented here.');
              }}>
                <div className="newsletter-input">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-envelope"></i>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="newsletter-icon">
              <i className="fas fa-bell"></i>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="quick-links-section">
          <h2 className="section-title">Quick Access</h2>
          <div className="quick-links-grid">
            <a href="/guides" className="quick-link-card">
              <i className="fas fa-book"></i>
              <h4>All Guides</h4>
              <p>Browse comprehensive tax guides</p>
            </a>
            
            <a href="/services" className="quick-link-card">
              <i className="fas fa-concierge-bell"></i>
              <h4>Tax Services</h4>
              <p>Access KRA online services</p>
            </a>
            
            <a href="/support-center" className="quick-link-card">
              <i className="fas fa-question-circle"></i>
              <h4>Support Center</h4>
              <p>Get help with tax questions</p>
            </a>
            
            <a href="/dashboard" className="quick-link-card">
              <i className="fas fa-user"></i>
              <h4>My Account</h4>
              <p>Manage your tax affairs</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;