import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from './AuthModal.module.css';

const AuthModal = ({ isOpen, onClose, initialView = 'login' }) => {
  const { login, signup } = useAuth();
  const [view, setView] = useState(initialView);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (view === 'login') {
      const res = login(formData.email, formData.password);
      if (res.success) {
        onClose();
      } else {
        setError(res.message);
      }
    } else {
      const res = signup(formData.name, formData.email, formData.password);
      if (res.success) {
        onClose();
      } else {
        setError(res.message);
      }
    }
  };

  const toggleView = () => {
    setView(view === 'login' ? 'signup' : 'login');
    setError('');
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <h2 className={styles.title}>{view === 'login' ? 'Welcome Back' : 'Create an Account'}</h2>

        {error && <p className={styles.errorMsg}>{error}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          {view === 'signup' && (
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
            {view === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className={styles.toggleText}>
          {view === 'login' ? "Don't have an account?" : "Already have an account?"}
          <button className={styles.toggleBtn} onClick={toggleView} type="button">
            {view === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
