import React, { useState, useEffect } from 'react';
import './TrialModal.css';

export default function TrialModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '' });

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setSubmitted(false), 400);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setForm({ name: '', email: '', phone: '', interest: '' });
    }, 3500);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal-box ${isOpen ? 'show' : ''}`}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {!submitted ? (
          <>
            <div className="modal-eyebrow">🥊 Limited Spots Available</div>
            <h2 className="modal-title">Claim Your <span>Free</span> Trial</h2>
            <p className="modal-desc">Your first session is completely free. No commitment, no strings attached. Just come train with us in Dublin 24.</p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="modal-input"
                placeholder="Your full name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                className="modal-input"
                placeholder="Your email address"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="tel"
                className="modal-input"
                placeholder="Phone number (optional)"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              <select
                className="modal-input modal-select"
                value={form.interest}
                onChange={e => setForm({ ...form, interest: e.target.value })}
              >
                <option value="" disabled>Which class interests you?</option>
                <option>Boxing</option>
                <option>Muay Thai</option>
                <option>Strength &amp; Conditioning</option>
                <option>Personal Training</option>
                <option>Beginner Foundations</option>
                <option>Not sure yet</option>
              </select>
              <button type="submit" className="modal-submit">
                Book My Free Trial <span>→</span>
              </button>
            </form>

            <p className="modal-footer-note">No spam. No pressure. Just great training in Dublin.</p>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon">🥊</div>
            <h3>You're In, Warrior!</h3>
            <p>We'll be in touch within 24 hours to confirm your session. See you on the mats at Warriors Gym Dublin!</p>
          </div>
        )}
      </div>
    </div>
  );
}
