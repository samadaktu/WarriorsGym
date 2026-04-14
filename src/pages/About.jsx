import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageShared.css';
import './About.css';

export default function About({ onTrialClick }) {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1800&q=80&fm=webp')" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow">About Us</div>
          <h1>Our <span className="neon">Story</span></h1>
          <p>Dublin's premier boxing and fitness gym, built on passion, community and the relentless pursuit of excellence since 2010.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="reveal">
              <div className="eyebrow">Who We Are</div>
              <h2>More Than <span className="neon">A Gym</span></h2>
              <p>Warriors Gym Dublin was founded in 2010 by former Irish champion boxer Paddy "The Lion" McGrath in the heart of Tallaght, Dublin 24. What started as a small boxing club with a single ring and a dream has grown into one of Ireland's most respected combat sports facilities.</p>
              <p>We've produced multiple national champions, IABA-ranked fighters, and hundreds of everyday athletes who've used boxing and martial arts to transform their health, confidence and mindset.</p>
              <p>But beyond the champions, we're most proud of the community we've built. Warriors Gym is a place where a 60-year-old trying to stay fit trains alongside a teenager dreaming of a national title — and both are made to feel equally welcome and valued.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80&fm=webp"
                alt="Warriors Gym Dublin interior"
                className="about-story-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '15+', label: 'Years in Dublin' },
              { num: '800+', label: 'Active Members' },
              { num: '12', label: 'Expert Coaches' },
              { num: '50+', label: 'National Champions' },
              { num: '30+', label: 'Weekly Classes' },
              { num: '4', label: 'Boxing Rings' },
            ].map((s, i) => (
              <div key={i} className="stat-item reveal">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Our Values</div>
            <h2>The Warrior <span className="neon">Code</span></h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '💪', title: 'Discipline', desc: 'We believe consistent effort, shown up every day, is what separates those who succeed from those who wish they had.' },
              { icon: '🤝', title: 'Community', desc: 'No ego, no judgement. We look out for each other, celebrate each other\'s wins, and lift each other up when it\'s hard.' },
              { icon: '🎯', title: 'Excellence', desc: 'We pursue mastery in everything — from the quality of our coaching to the cleanliness of our facility.' },
              { icon: '❤️', title: 'Respect', desc: 'Respect for yourself, your training partners, your coaches, and the traditions of the sports we practise.' },
            ].map((v, i) => (
              <div key={i} className={`value-card card reveal reveal-delay-${i + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section facility-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Our Facility</div>
            <h2>World-Class <span className="neon">Equipment</span></h2>
            <p className="section-desc">Over 8,000 sq ft of dedicated boxing, martial arts and fitness space in the heart of Tallaght, Dublin 24.</p>
          </div>
          <div className="facility-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?w=600&q=80&fm=webp', label: '4 Full-Size Boxing Rings' },
              { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fm=webp', label: 'State-of-the-Art Weights Room' },
              { img: 'https://images.unsplash.com/photo-1592632789003-01f4c4c66e37?w=600&q=80&fm=webp', label: 'Heavy Bag Area (40+ bags)' },
              { img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80&fm=webp', label: 'Modern Cardio Suite' },
            ].map((f, i) => (
              <div key={i} className={`facility-card reveal reveal-delay-${i + 1}`}>
                <img src={f.img} alt={f.label} loading="lazy" />
                <div className="facility-label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container">
          <div className="page-cta-inner reveal">
            <h2>Ready to Join the <span className="neon">Warriors?</span></h2>
            <p>Start with a completely free trial session. No contracts, no pressure — just come in and train.</p>
            <div className="page-cta-btns">
              <button className="btn btn-primary" onClick={onTrialClick}>Book Free Trial →</button>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
