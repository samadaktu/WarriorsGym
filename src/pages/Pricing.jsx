import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PageShared.css';
import './Pricing.css';

const PLANS = [
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    desc: 'Perfect for beginners taking their first steps.',
    features: [
      '2 classes per week',
      'Access to beginner sessions',
      'Locker room access',
      'Member app access',
      'Free hand wraps (first pair)',
    ],
    notIncluded: ['Unlimited classes', 'Open gym access', 'Sparring sessions', 'Nutrition coaching'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Warrior',
    price: { monthly: 79, annual: 65 },
    desc: 'Our most popular plan for committed members.',
    features: [
      'Unlimited group classes',
      'All programme access',
      'Open gym access (6AM–10PM)',
      'Sparring sessions included',
      'Member app & progress tracking',
      'One free PT session/month',
      'Warriors merchandise discount (15%)',
    ],
    notIncluded: ['Nutrition coaching', 'Competition coaching'],
    cta: 'Join Now',
    highlight: true,
    tag: 'Most Popular',
  },
  {
    name: 'Champion',
    price: { monthly: 119, annual: 99 },
    desc: 'Everything you need to compete at the highest level.',
    features: [
      'Everything in Warrior',
      'Unlimited PT sessions (2/month)',
      'Competition prep coaching',
      'Nutrition coaching included',
      'Priority class booking',
      'Guest passes (4/month)',
      'Warriors merchandise discount (25%)',
      'Recovery suite access',
    ],
    notIncluded: [],
    cta: 'Go Champion',
    highlight: false,
  },
];

const FAQS = [
  { q: 'Is there a joining fee?', a: 'No joining fees, ever. What you see is what you pay. We believe in transparent pricing with no hidden costs.' },
  { q: 'Can I freeze my membership?', a: 'Yes — you can freeze your membership for up to 3 months per year at no charge. Just give us 7 days\' notice.' },
  { q: 'Do you offer student or family discounts?', a: 'We offer a 10% student discount (valid student ID required) and family plans from €130/month for 2+ family members. Contact us for details.' },
  { q: 'What\'s included in the free trial?', a: 'Your free trial covers a full group class of your choice. You\'ll train alongside our members, receive expert coaching, and get a full tour of the facility — completely free, no strings attached.' },
  { q: 'Are there contracts?', a: 'Monthly memberships are rolling — cancel anytime with 30 days notice. Annual memberships are paid upfront at a discounted rate.' },
  { q: 'What should I bring to my first session?', a: 'Just comfortable workout clothing and a water bottle. We provide gloves and wraps for trial sessions. We\'ll guide you through everything else on arrival.' },
];

export default function Pricing({ onTrialClick }) {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593766827959-c2bc5e3ddcc4?w=1800&q=80&fm=webp')" }} />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="eyebrow">Membership</div>
          <h1>Simple, Honest <span className="neon">Pricing</span></h1>
          <p>No hidden fees, no long contracts. Choose the plan that fits your goals and start training today.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Toggle */}
          <div className="pricing-toggle-wrap reveal">
            <span className={!annual ? 'toggle-label active' : 'toggle-label'}>Monthly</span>
            <button
              className={`toggle-switch ${annual ? 'on' : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
            >
              <span className="toggle-knob" />
            </button>
            <span className={annual ? 'toggle-label active' : 'toggle-label'}>
              Annual <span className="save-badge">Save 18%</span>
            </span>
          </div>

          {/* Plans */}
          <div className="pricing-grid">
            {PLANS.map((plan, i) => (
              <div key={plan.name} className={`pricing-card reveal reveal-delay-${i + 1} ${plan.highlight ? 'highlighted' : ''}`}>
                {plan.tag && <div className="plan-tag">{plan.tag}</div>}
                <div className="plan-header">
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-price">
                    <span className="price-currency">€</span>
                    <span className="price-amount">{annual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="price-period">/mo</span>
                  </div>
                  {annual && (
                    <div className="price-note">Billed annually — saving €{(plan.price.monthly - plan.price.annual) * 12}/yr</div>
                  )}
                  <p className="plan-desc">{plan.desc}</p>
                </div>

                <div className="plan-features">
                  {plan.features.map((f, j) => (
                    <div key={j} className="feature-item included">
                      <span className="feature-check">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((f, j) => (
                    <div key={j} className="feature-item excluded">
                      <span className="feature-cross">✕</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} plan-btn`}
                  onClick={onTrialClick}
                >
                  {plan.cta} →
                </button>
              </div>
            ))}
          </div>

          <p className="pricing-note reveal">All prices include VAT. First session always free — no card required.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">FAQ</div>
            <h2>Common <span className="neon">Questions</span></h2>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item reveal ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container">
          <div className="page-cta-inner reveal">
            <div className="eyebrow">Still Unsure?</div>
            <h2>Try Before You <span className="neon">Commit</span></h2>
            <p>Your first session is completely free. No credit card, no contract, no pressure. Just great training in Dun Laoghaire.</p>
            <div className="page-cta-btns">
              <button className="btn btn-primary" onClick={onTrialClick}>Book My Free Trial →</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
