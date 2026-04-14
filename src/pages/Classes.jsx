import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageShared.css';
import './Classes.css';

const CLASSES = [
  {
    id: 'boxing',
    tag: 'Most Popular',
    title: 'Boxing',
    level: 'All Levels',
    duration: '60 min',
    capacity: '20 per class',
    img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=700&q=80&fm=webp',
    desc: 'Master the sweet science with our technical boxing programme. From fundamentals — stance, footwork, jab/cross/hook — to advanced combination work, sparring and competition prep. Suitable for total beginners through to competitive fighters.',
    schedule: ['Mon 7:00 AM', 'Mon 6:30 PM', 'Wed 7:00 AM', 'Wed 6:30 PM', 'Fri 7:00 AM', 'Fri 6:30 PM', 'Sat 10:00 AM'],
  },
  {
    id: 'muaythai',
    tag: '',
    title: 'Muay Thai',
    level: 'All Levels',
    duration: '75 min',
    capacity: '16 per class',
    img: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=700&q=80&fm=webp',
    desc: 'Authentic Muay Thai training covering the full 8-limb system — punches, kicks, elbows and knees. Learn traditional Thai techniques under certified Kru-level instructors. Classes include pad work, bag work and technical drilling.',
    schedule: ['Tue 7:00 AM', 'Tue 7:00 PM', 'Thu 7:00 AM', 'Thu 7:00 PM', 'Sat 12:00 PM'],
  },
  {
    id: 'sc',
    tag: '',
    title: 'Strength & Conditioning',
    level: 'Intermediate–Advanced',
    duration: '60 min',
    capacity: '18 per class',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80&fm=webp',
    desc: 'Performance-focused strength and conditioning designed specifically for combat sports athletes. Covers Olympic lifting, functional strength, explosive power, interval conditioning and recovery — all programmed to complement your boxing or Muay Thai training.',
    schedule: ['Mon 5:30 PM', 'Wed 5:30 PM', 'Fri 5:30 PM', 'Sat 9:00 AM'],
  },
  {
    id: 'pt',
    tag: 'Premium',
    title: 'Personal Training',
    level: 'All Levels',
    duration: '60 min',
    capacity: '1-on-1',
    img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=700&q=80&fm=webp',
    desc: '1-on-1 coaching sessions tailored entirely to your individual goals, schedule and current level. Our certified personal trainers design bespoke programmes covering boxing technique, strength training, nutrition guidance and mental performance.',
    schedule: ['Available 7 days', 'Morning: 6–10 AM', 'Afternoon: 12–3 PM', 'Evening: 5–9 PM'],
  },
  {
    id: 'beginners',
    tag: 'Start Here',
    title: 'Beginner Foundations',
    level: 'Beginners Only',
    duration: '60 min',
    capacity: '12 per class',
    img: 'https://images.unsplash.com/photo-1592632789003-01f4c4c66e37?w=700&q=80&fm=webp',
    desc: 'Never trained before? This is your starting point. Our 8-week beginner programme covers everything you need to know — safety, basic boxing stance and movement, fundamental punches, wrapping your hands, and gym etiquette. A brilliant first step into combat sports.',
    schedule: ['Tue 6:30 PM', 'Thu 6:30 PM', 'Sat 11:00 AM'],
  },
  {
    id: 'womens',
    tag: 'Women Only',
    title: "Women's Boxing",
    level: 'All Levels',
    duration: '60 min',
    capacity: '16 per class',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&fm=webp',
    desc: 'A dedicated women-only boxing class offering a safe, supportive and empowering environment. Build real strength, learn practical self-defence, improve fitness and confidence — coached by our female instructors with years of competition experience.',
    schedule: ['Mon 10:00 AM', 'Wed 10:00 AM', 'Fri 10:00 AM', 'Sun 10:00 AM'],
  },
];

export default function Classes({ onTrialClick }) {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [active, setActive] = useState(null);

  return (
    <div className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1800&q=80&fm=webp')" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow">Our Classes</div>
          <h1>Find Your <span className="neon">Programme</span></h1>
          <p>Six world-class programmes for every level, goal and schedule — all under one roof in Tallaght, Dublin 24.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="classes-grid">
            {CLASSES.map((cls, i) => (
              <div key={cls.id} className={`class-card reveal reveal-delay-${(i % 3) + 1} ${active === cls.id ? 'expanded' : ''}`}>
                <div className="class-img-wrap">
                  <img src={cls.img} alt={cls.title} loading="lazy" />
                  {cls.tag && <span className="class-tag">{cls.tag}</span>}
                </div>
                <div className="class-body">
                  <div className="class-meta">
                    <span className="class-meta-item">⏱ {cls.duration}</span>
                    <span className="class-meta-item">👥 {cls.capacity}</span>
                    <span className="class-meta-item level-badge">{cls.level}</span>
                  </div>
                  <h3 className="class-title">{cls.title}</h3>
                  <p className="class-desc">{cls.desc}</p>

                  <div className={`class-schedule ${active === cls.id ? 'open' : ''}`}>
                    <h4 className="schedule-label">Class Schedule</h4>
                    <div className="schedule-slots">
                      {cls.schedule.map((slot, j) => (
                        <span key={j} className="schedule-slot">{slot}</span>
                      ))}
                    </div>
                  </div>

                  <div className="class-actions">
                    <button
                      className="btn btn-primary"
                      onClick={onTrialClick}
                    >
                      Book Free Trial →
                    </button>
                    <button
                      className="schedule-toggle"
                      onClick={() => setActive(active === cls.id ? null : cls.id)}
                    >
                      {active === cls.id ? 'Hide Schedule ↑' : 'View Schedule ↓'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable CTA */}
      <section className="section timetable-cta">
        <div className="container">
          <div className="timetable-inner reveal">
            <div className="eyebrow">Not Sure Where to Start?</div>
            <h2>Try Any Class <span className="neon">For Free</span></h2>
            <p>Your first session at Warriors Gym Dublin is completely free, regardless of which programme you choose. Come in, meet the coaches, and see if we're the right fit for you.</p>
            <button className="btn btn-primary" onClick={onTrialClick}>
              Book My Free Session →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
