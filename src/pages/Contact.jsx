import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageShared.css';
import './Contact.css';

const HOURS = [
  { day: 'Monday – Friday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 4:00 PM' },
  { day: 'Public Holidays', hours: '10:00 AM – 2:00 PM' },
];

export default function Contact() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <div className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1800&q=80&fm=webp')" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow">Get In Touch</div>
          <h1>Contact <span className="neon">Us</span></h1>
          <p>Questions about membership, classes or coaching? We'd love to hear from you. Based in Tallaght, Dublin 24.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Info panel */}
            <div className="contact-info reveal">
              <h2 className="contact-info-title">Find Us in <span className="neon">Dublin 24</span></h2>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div>
                    <div className="info-label">Address</div>
                    <div className="info-value">Unit 14, Tallaght Business Park<br />Dublin 24, D24 XY12<br />Ireland</div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <div>
                    <div className="info-label">Phone</div>
                    <a href="tel:+35312345678" className="info-value info-link">+353 1 234 5678</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">✉️</div>
                  <div>
                    <div className="info-label">Email</div>
                    <a href="mailto:info@warriorsgym.ie" className="info-value info-link">info@warriorsgym.ie</a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">💬</div>
                  <div>
                    <div className="info-label">WhatsApp</div>
                    <a href="https://wa.me/35312345678" target="_blank" rel="noopener noreferrer" className="info-value info-link">Message Us on WhatsApp</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="opening-hours">
                <h3 className="hours-title">Opening Hours</h3>
                {HOURS.map((h, i) => (
                  <div key={i} className="hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-time">{h.hours}</span>
                  </div>
                ))}
              </div>

              {/* Map embed placeholder */}
              <div className="map-embed">
                <iframe
                  title="Warriors Gym Dublin Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.8!2d-6.3745!3d53.2862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE3JzEwLjMiTiA2wrAyMic0OC4yIlc!5e0!3m2!1sen!2sie!4v1620000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-overlay-label">
                  <span>📍 Tallaght Business Park, Dublin 24</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap reveal reveal-delay-2">
              <div className="contact-form-card">
                {!sent ? (
                  <>
                    <div className="eyebrow">Send a Message</div>
                    <h3 className="form-title">We'll Get Back to You <span className="neon">Within 24 Hours</span></h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            placeholder="Your full name"
                            required
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            placeholder="your@email.com"
                            required
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+353 (optional)"
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label>Subject</label>
                          <select
                            value={form.subject}
                            onChange={e => setForm({ ...form, subject: e.target.value })}
                          >
                            <option value="" disabled>Select a topic</option>
                            <option>Membership Enquiry</option>
                            <option>Class Information</option>
                            <option>Personal Training</option>
                            <option>Free Trial</option>
                            <option>Corporate / Group Packages</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Message *</label>
                        <textarea
                          placeholder="Tell us how we can help…"
                          rows={5}
                          required
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary form-submit">
                        Send Message →
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="form-success">
                    <div className="success-emoji">🥊</div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. A member of the Warriors Gym team will be in touch within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
