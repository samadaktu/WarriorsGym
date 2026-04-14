import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

const STRIP_ITEMS = [
  'Elite Boxing', 'Muay Thai', 'Strength & Conditioning', 'Personal Training',
  'Beginner Classes', 'Dublin 24', 'Expert Coaches', 'Free Trial',
];

const WHY_ITEMS = [
  { icon: '🥊', title: 'Expert Coaches', desc: 'Our trainers are certified professionals with championship backgrounds and decades of coaching experience.' },
  { icon: '🏋️', title: 'State-of-the-Art Facility', desc: 'Fully equipped gym with professional boxing rings, heavy bags, weight rooms and modern cardio equipment.' },
  { icon: '🏅', title: 'All Levels Welcome', desc: 'From complete beginners to competitive fighters — we have structured programmes for every level.' },
  { icon: '🤝', title: 'Community Spirit', desc: 'Join a tight-knit community of warriors who support and push each other to new heights every session.' },
  { icon: '📅', title: 'Flexible Schedule', desc: 'Early mornings to late evenings, 7 days a week. We work around your life, not the other way around.' },
  { icon: '📍', title: 'Based in Dublin 24', desc: 'Conveniently located in Tallaght with ample parking and easy access from all areas of Dublin.' },
  { icon: '🔒', title: 'Safe Environment', desc: 'A respectful, inclusive space where everyone trains hard but looks out for each other at all times.' },
  { icon: '🎯', title: 'Results-Driven', desc: 'Structured progression paths, fitness tracking, and expert guidance to ensure you reach your goals.' },
];

const TESTIMONIALS = [
  { name: 'Ciarán Murphy', since: 'Member since 2022', text: 'Warriors Gym completely changed my life. I started as a total beginner and now I compete at national level. The coaching here is second to none in Dublin.', initials: 'CM' },
  { name: 'Aoife Brennan', since: 'Member since 2021', text: 'Brilliant atmosphere, world-class trainers. The women\'s boxing classes gave me confidence I never had before. Highly recommend to anyone in Dublin 24!', initials: 'AB' },
  { name: 'Seán O\'Brien', since: 'Member since 2023', text: 'The S&C programme combined with boxing training transformed my fitness. Lost 15kg in 6 months. The community here keeps you motivated every single session.', initials: 'SO' },
  { name: 'Niamh Kelly', since: 'Member since 2020', text: 'I\'ve trained at gyms across Dublin but Warriors is on another level. Professional, welcoming, and the results speak for themselves. Best gym in Tallaght.', initials: 'NK' },
  { name: 'Darragh Flynn', since: 'Member since 2022', text: 'After my first free trial I knew this was the place. Great facilities, expert coaches and an unbeatable Dublin gym culture. Wouldn\'t train anywhere else.', initials: 'DF' },
  { name: 'Laura Doherty', since: 'Member since 2023', text: 'As someone who was nervous about starting boxing, the coaches here made me feel so welcome. Six months in and I\'m fitter and more confident than ever.', initials: 'LD' },
];

export default function Home({ onTrialClick }) {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="hero-eyebrow">🇮🇪 Dublin's Premier Boxing & Fitness Gym</div>
          <h1>
            Train Like
            <span className="hero-accent">A Warrior</span>
          </h1>
          <p className="hero-sub">
            Join hundreds of members who've transformed their bodies, minds and lives at Warriors Gym — Tallaght's most respected boxing and fitness facility.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={onTrialClick}>
              Start Free Trial <span className="btn-icon">→</span>
            </button>
            <Link to="/classes" className="btn btn-outline">
              View Classes
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">15+</div>
              <div className="hero-stat-label">Years in Dublin</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">800+</div>
              <div className="hero-stat-label">Active Members</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">12</div>
              <div className="hero-stat-label">Expert Coaches</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">30+</div>
              <div className="hero-stat-label">Classes Per Week</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="about-strip">
        <div className="strip-inner">
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, i) => (
            <div key={i} className="strip-item">
              {item}
              <div className="strip-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fm=webp"
                alt="Warriors Gym Dublin training facility"
                loading="lazy"
              />
              <div className="about-img-badge">
                <div className="badge-num">15+</div>
                <div className="badge-text">Years serving Dublin</div>
              </div>
            </div>
            <div className="about-content">
              <div className="eyebrow">About Warriors Gym</div>
              <h2>Dublin's <em>Finest</em> Combat Sports Facility</h2>
              <p>
                Founded in Tallaght in 2010, Warriors Gym has grown to become Dublin's most respected boxing and combat sports facility. We're not just a gym — we're a community of dedicated athletes, weekend warriors, and fitness enthusiasts united by one thing: the will to be better.
              </p>
              <p>
                Whether you're stepping into a ring for the first time or training to compete at the highest level, our expert coaching staff, world-class facilities, and unmatched community atmosphere will take your training to the next level.
              </p>
              <div className="about-pillars">
                {['Championship Coaches', 'Pro Boxing Rings', 'Dublin Community', 'All Skill Levels'].map((pillar) => (
                  <div key={pillar} className="pillar">
                    <span className="pillar-check">✓</span>
                    {pillar}
                  </div>
                ))}
              </div>
              <div className="about-btns">
                <Link to="/about" className="btn btn-primary">
                  Our Story <span className="btn-icon">→</span>
                </Link>
                <Link to="/trainers" className="btn btn-outline">Meet the Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Our Programs</div>
            <h2>Train. Fight. <span className="accent">Conquer.</span></h2>
            <p className="section-desc">World-class training across boxing, combat sports and fitness disciplines — all under one roof in Dublin 24.</p>
          </div>
          <div className="programs-grid">
            <div className="program-card large reveal" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=900&q=80&fm=webp')" }}>
              <div className="program-overlay" />
              <div className="program-content">
                <div className="program-tag">Most Popular</div>
                <h3>Boxing</h3>
                <p>Master the sweet science. Technical boxing for all levels from beginner to competitive fighter.</p>
                <Link to="/classes" className="program-link">Explore →</Link>
              </div>
            </div>
            <div className="program-card reveal reveal-delay-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800&q=80&fm=webp')" }}>
              <div className="program-overlay" />
              <div className="program-content">
                <h3>Muay Thai</h3>
                <p>The art of 8 limbs. Authentic Muay Thai training with proven techniques.</p>
                <Link to="/classes" className="program-link">Explore →</Link>
              </div>
            </div>
            <div className="program-card reveal reveal-delay-2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fm=webp')" }}>
              <div className="program-overlay" />
              <div className="program-content">
                <h3>Strength & Conditioning</h3>
                <p>Build the engine. Performance-focused S&C tailored for fighters and fitness enthusiasts alike.</p>
                <Link to="/classes" className="program-link">Explore →</Link>
              </div>
            </div>
            <div className="program-card reveal reveal-delay-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80&fm=webp')" }}>
              <div className="program-overlay" />
              <div className="program-content">
                <h3>Personal Training</h3>
                <p>1-on-1 expert coaching tailored entirely to your goals and schedule.</p>
                <Link to="/classes" className="program-link">Explore →</Link>
              </div>
            </div>
          </div>
          <div className="programs-cta reveal">
            <Link to="/classes" className="btn btn-outline">View All Classes →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Why Warriors Gym?</div>
            <h2>Where Dublin <span className="accent">Warriors</span> Are Made</h2>
          </div>
          <div className="why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className={`why-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Member Reviews</div>
            <h2>What Our <span className="accent">Warriors</span> Say</h2>
            <p className="section-desc">Don't take our word for it — hear from the hundreds of Dubliners who've transformed their lives at Warriors Gym.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-since">{t.since}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-bg" />
        <div className="cta-glow-l" />
        <div className="cta-glow-r" />
        <div className="container cta-inner reveal">
          <div className="eyebrow">Ready to Start?</div>
          <h2>
            Your First Session
            <span className="cta-accent"> Is Free</span>
          </h2>
          <p>No contracts. No commitment. Just come in, train with our expert coaches, and experience Warriors Gym Dublin for yourself.</p>
          <div className="cta-btns">
            <button className="btn btn-primary" onClick={onTrialClick}>
              Claim Free Trial <span className="btn-icon">→</span>
            </button>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
