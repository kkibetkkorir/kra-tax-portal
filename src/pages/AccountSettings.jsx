import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './AccountSettings.css';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({});
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { 
    currentUser, 
    userProfile, 
    updateUserProfile, 
    updateUserPassword, 
    deleteAccount,
    logout 
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfile) {
      setProfileData({
        firstName: userProfile.firstName || '',
        lastName: userProfile.lastName || '',
        phone: userProfile.phone || '',
        address: userProfile.address || '',
        kraPin: userProfile.kraPin || '',
        userType: userProfile.userType || ''
      });
    }
  }, [userProfile]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const displayName = `${profileData.firstName} ${profileData.lastName}`;
      await updateUserProfile({
        ...profileData,
        displayName
      });
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Profile update error:', error);
      setMessage('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage('New passwords do not match');
      setLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      await updateUserPassword(passwordData.newPassword);
      setMessage('Password updated successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Password update error:', error);
      switch (error.code) {
        case 'auth/requires-recent-login':
          setMessage('Please log out and log back in before changing your password');
          break;
        case 'auth/weak-password':
          setMessage('Password is too weak');
          break;
        default:
          setMessage('Failed to update password. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    setMessage('');

    try {
      await deleteAccount();
      navigate('/');
    } catch (error) {
      console.error('Account deletion error:', error);
      if (error.code === 'auth/requires-recent-login') {
        setMessage('Please log out and log back in before deleting your account');
      } else {
        setMessage('Failed to delete account. Please try again.');
      }
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="account-settings">
      <div className="settings-header">
        <div className="container">
          <h1>Account Settings</h1>
          <p>Manage your profile, security, and preferences</p>
        </div>
      </div>

      <div className="container">
        <div className="settings-container">
          <div className="settings-sidebar">
            <div className="user-info">
              <div className="user-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="user-details">
                <h3>{userProfile?.firstName} {userProfile?.lastName}</h3>
                <p>{currentUser?.email}</p>
                <span className="user-type">{userProfile?.userType || 'Individual'}</span>
              </div>
            </div>

            <nav className="settings-nav">
              <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="fas fa-user"></i> Profile Information
              </button>
              <button
                className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <i className="fas fa-shield-alt"></i> Security
              </button>
              <button
                className={`nav-item ${activeTab === 'preferences' ? 'active' : ''}`}
                onClick={() => setActiveTab('preferences')}
              >
                <i className="fas fa-cog"></i> Preferences
              </button>
              <button
                className={`nav-item ${activeTab === 'danger' ? 'active' : ''}`}
                onClick={() => setActiveTab('danger')}
              >
                <i className="fas fa-exclamation-triangle"></i> Account
              </button>
            </nav>
          </div>

          <div className="settings-content">
            {message && (
              <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="settings-section">
                <h2>Profile Information</h2>
                <p>Update your personal information and contact details</p>

                <form onSubmit={handleProfileUpdate} className="settings-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName || ''}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={currentUser?.email || ''}
                      disabled
                    />
                    <small>Email cannot be changed. Contact support if needed.</small>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={profileData.phone || ''}
                        onChange={handleInputChange}
                        placeholder="+254 712 345 678"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="kraPin">KRA PIN</label>
                      <input
                        type="text"
                        id="kraPin"
                        name="kraPin"
                        value={profileData.kraPin || ''}
                        onChange={handleInputChange}
                        placeholder="A123456789X"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={profileData.address || ''}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="userType">User Type</label>
                    <select
                      id="userType"
                      name="userType"
                      value={profileData.userType || ''}
                      onChange={handleInputChange}
                    >
                      <option value="individual">Individual Taxpayer</option>
                      <option value="business">Business Owner</option>
                      <option value="employer">Employer</option>
                      <option value="taxAgent">Tax Agent</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    <i className={loading ? "fas fa-spinner fa-spin" : "fas fa-save"}></i>
                    {loading ? 'Updating...' : 'Update Profile'}
                  </button>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="settings-section">
                <h2>Security Settings</h2>
                <p>Manage your password and account security</p>

                <form onSubmit={handlePasswordUpdate} className="settings-form">
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordInputChange}
                      placeholder="Enter new password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordInputChange}
                      placeholder="Confirm new password"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    <i className={loading ? "fas fa-spinner fa-spin" : "fas fa-key"}></i>
                    {loading ? 'Updating...' : 'Update Password'}
                  </button>
                </form>

                <div className="security-info">
                  <h3>Account Information</h3>
                  <div className="info-item">
                    <span>Account Created:</span>
                    <span>{userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="info-item">
                    <span>Last Updated:</span>
                    <span>{userProfile?.updatedAt ? new Date(userProfile.updatedAt).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="info-item">
                    <span>Email Verified:</span>
                    <span className={currentUser?.emailVerified ? 'verified' : 'unverified'}>
                      {currentUser?.emailVerified ? 'Verified' : 'Not Verified'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="settings-section">
                <h2>Preferences</h2>
                <p>Customize your experience and notification settings</p>

                <div className="preferences-form">
                  <div className="preference-group">
                    <h3>Notifications</h3>
                    <div className="checkbox-group">
                      <label>
                        <input type="checkbox" defaultChecked />
                        Email notifications for tax deadlines
                      </label>
                      <label>
                        <input type="checkbox" defaultChecked />
                        SMS alerts for important updates
                      </label>
                      <label>
                        <input type="checkbox" />
                        Marketing communications
                      </label>
                    </div>
                  </div>

                  <div className="preference-group">
                    <h3>Language & Region</h3>
                    <div className="form-group">
                      <label htmlFor="language">Preferred Language</label>
                      <select id="language">
                        <option value="en">English</option>
                        <option value="sw">Kiswahili</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="timezone">Timezone</label>
                      <select id="timezone">
                        <option value="Africa/Nairobi">East Africa Time (EAT)</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn btn-primary">
                    <i className="fas fa-save"></i> Save Preferences
                  </button>
                </div>
              </div>
            )}

            {/* Danger Zone Tab */}
            {activeTab === 'danger' && (
              <div className="settings-section">
                <h2>Account Management</h2>
                <p>Manage your account status and data</p>

                <div className="danger-zone">
                  <h3>Danger Zone</h3>
                  
                  <div className="danger-item">
                    <div className="danger-info">
                      <h4>Delete Account</h4>
                      <p>Permanently delete your account and all associated data. This action cannot be undone.</p>
                    </div>
                    <button 
                      className="btn btn-danger"
                      onClick={() => setShowDeleteConfirm(true)}
                    >
                      <i className="fas fa-trash"></i> Delete Account
                    </button>
                  </div>
                </div>

                {showDeleteConfirm && (
                  <div className="delete-confirmation">
                    <h4>Are you sure you want to delete your account?</h4>
                    <p>This will permanently delete your account and all associated data. This action cannot be undone.</p>
                    
                    <div className="confirmation-actions">
                      <button 
                        className="btn btn-outline"
                        onClick={() => setShowDeleteConfirm(false)}
                      >
                        Cancel
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={handleDeleteAccount}
                        disabled={loading}
                      >
                        <i className={loading ? "fas fa-spinner fa-spin" : "fas fa-trash"}></i>
                        {loading ? 'Deleting...' : 'Yes, Delete Account'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;