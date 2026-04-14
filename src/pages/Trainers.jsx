import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageShared.css';
import './Trainers.css';

const TRAINERS = [
  {
    name: 'Paddy McGrath',
    role: 'Head Coach & Founder',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fm=webp',
    exp: '25+ Years Experience',
    bio: 'Former Irish National Boxing Champion and two-time Leinster title holder. Paddy founded Warriors Gym in 2010 and has since produced over 50 national-level competitors. His no-nonsense approach and deep technical knowledge make him one of the most respected coaches in Irish boxing.',
    speciality: 'Boxing & Competition Prep',
    certs: ['IABA Level 3', 'IABA Head Coach', 'S&C Certified'],
  },
  {
    name: 'Siobhán O\'Sullivan',
    role: 'Muay Thai Head Instructor',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80&fm=webp',
    exp: '18 Years Experience',
    bio: 'Ireland\'s most decorated female Muay Thai fighter with multiple WBC Muay Thai European titles to her name. Siobhán brings authentic Thai training methods to Dublin, having trained extensively in Thailand with world-renowned Kru-level instructors.',
    speciality: 'Muay Thai & Kickboxing',
    certs: ['WBC Muay Thai Instructor', 'Kru Level 2', 'First Aid Certified'],
  },
  {
    name: 'Declan "The Bull" Burke',
    role: 'Strength & Conditioning Coach',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fm=webp',
    exp: '15 Years Experience',
    bio: 'Former professional rugby player turned elite S&C coach, Declan has worked with combat sports athletes at the highest level including UFC-ranked fighters. His evidence-based programming delivers explosive power gains and injury-proofing for serious athletes.',
    speciality: 'Strength, Power & Athletic Performance',
    certs: ['NSCA CSCS', 'UKSCA Accredited', 'Sports Nutrition Level 3'],
  },
  {
    name: 'Fionnuala Byrne',
    role: "Women's Boxing Coach",
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80&fm=webp',
    exp: '12 Years Experience',
    bio: "A passionate advocate for women in combat sports, Fionnuala has built Warriors' women's programme from the ground up. She creates a safe, empowering space where women of all fitness levels develop real boxing skills, confidence and lasting friendships.",
    speciality: "Women's Boxing & Beginner Development",
    certs: ['IABA Level 2', 'Women in Sport Certified', 'CPR/AED Certified'],
  },
  {
    name: 'Cormac Flanagan',
    role: 'Personal Training Lead',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80&fm=webp',
    exp: '10 Years Experience',
    bio: 'A sought-after personal trainer specialising in body composition, combat sports fitness and rehabilitation. Cormac holds advanced qualifications in sports massage and nutrition, and brings a holistic, science-backed approach to every 1-on-1 session.',
    speciality: 'Personal Training & Nutrition',
    certs: ['REPS Level 4 PT', 'Sports Massage Therapist', 'Precision Nutrition Level 1'],
  },
  {
    name: 'Aoife Nolan',
    role: 'Beginner Foundations Coach',
    img: 'https://images.unsplash.com/photo-1593766827959-c2bc5e3ddcc4?w=600&q=80&fm=webp',
    exp: '8 Years Experience',
    bio: 'Aoife is the first coach many Warriors members ever meet — and they couldn\'t be in better hands. Known for her patience, positivity and infectious enthusiasm, she specialises in making complete beginners feel capable, confident and excited to keep training.',
    speciality: 'Beginner Boxing & Youth Development',
    certs: ['IABA Level 2', 'Youth Coach Certified', 'Child Protection Certified'],
  },
];

export default function Trainers({ onTrialClick }) {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?w=1800&q=80&fm=webp')" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow">Our Team</div>
          <h1>Meet the <span className="neon">Coaches</span></h1>
          <p>Championship-level coaches with the experience, passion and credentials to take your training to the next level.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trainers-grid">
            {TRAINERS.map((t, i) => (
              <div key={i} className={`trainer-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="trainer-img">
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <div className="trainer-img-overlay" />
                </div>
                <div className="trainer-info">
                  <div className="trainer-exp-badge">{t.exp}</div>
                  <div className="trainer-name">{t.name}</div>
                  <div className="trainer-role">{t.role}</div>
                  <p className="trainer-bio">{t.bio}</p>
                  <div className="trainer-speciality">
                    <span className="spec-label">Speciality:</span> {t.speciality}
                  </div>
                  <div className="trainer-certs">
                    {t.certs.map((c, j) => (
                      <span key={j} className="cert-tag">✓ {c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section page-cta">
        <div className="container">
          <div className="page-cta-inner reveal">
            <div className="eyebrow">Train With the Best</div>
            <h2>Book a Session with <span className="neon">Our Coaches</span></h2>
            <p>Your first session is completely free. Come in, meet the team and experience the Warriors Gym difference for yourself.</p>
            <div className="page-cta-btns">
              <button className="btn btn-primary" onClick={onTrialClick}>Book Free Trial →</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
