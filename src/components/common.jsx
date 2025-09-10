import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import './Footer.css';
import './BottomNav.css';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set active nav based on current location
    const path = location.pathname;
    if (path === '/') setActiveNav('Home');
    else if (path === '/services') setActiveNav('Services');
    else if (path.includes('/guides')) setActiveNav('Guides');
    else if (path === '/blog') setActiveNav('Blog');
    else if (path === '/dashboard') setActiveNav('Account');
  }, []);

  const handleNavClick = (item) => {
    setActiveNav(item);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div
              style={{
                width: '40px',
                height: '40px',
                background: 'var(--kra-blue)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
              }}
            >
              <i className="fas fa-landmark"></i>
            </div>
            <div className="logo-text">KRA Portal</div>
          </div>

          <nav>
            <ul>
              {[
                {
                  title: 'Home',
                  path: '/',
                },
                {
                  title: 'Services',
                  path: '/services',
                },
                {
                  title: 'Guides',
                  path: '/guides',
                },
                {
                  title: 'Blog',
                  path: '/blog',
                },
                {
                  title: 'Account',
                  path: '/dashboard',
                },
              ].map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={(e) => {
                      //e.preventDefault();
                      handleNavClick(item.title);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="auth-buttons">
            {currentUser ? (
              <>
                <span style={{ 
                  color: 'var(--kra-gray)', 
                  fontSize: '0.9rem',
                  marginRight: '0.5rem'
                }}>
                  Welcome, {userProfile?.firstName || currentUser.displayName || 'User'}
                </span>
                <button className="btn btn-outline" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="btn btn-outline">
                  <i className="fas fa-sign-in-alt"></i> Login
                </a>
                <a href="/register" className="btn btn-primary">
                  <i className="fas fa-user-plus"></i> Register
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About KRA</h3>
            <p>
              The Kenya Revenue Authority is the premier revenue collection
              agency in Kenya. Our mission is to efficiently collect revenue on
              behalf of the government.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {[
                {
                  title: 'Home',
                  path: '/',
                },
                {
                  title: 'Services',
                  path: '/services',
                },
                {
                  title: 'Guide',
                  path: '/guides',
                },
                {
                  title: 'Blog',
                  path: '/blog',
                },
                {
                  title: 'Account',
                  path: '/account',
                },
              ].map((link) => (
                <li key={link.title}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Information</h3>
            <ul className="footer-links">
              <li>
                <i className="fas fa-phone"></i> +254 20 4 999 999
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@kra.go.ke
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Times Tower, Haile
                Selassie Ave, Nairobi
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          &copy; 2025 Kenya Revenue Authority. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: 'fas fa-home', label: 'Home', path: '/' },
    { icon: 'fas fa-concierge-bell', label: 'Services', path: '/services' },
    { icon: 'fas fa-book', label: 'Guides', path: '/guides' },
    { icon: 'fas fa-newspaper', label: 'Blog', path: '/blog' },
    { icon: 'fas fa-user', label: 'Account', path: '/dashboard' },
  ];

  return (
    <div className="bottom-nav">
      <div className="nav-items">
        {navItems.map((item) => (
          <a
            href={item.path}
            key={item.label}
            className={`nav-item ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
