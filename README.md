# Warriors Gym Dublin — React Website

A professional, fully responsive React website for Warriors Gym Dublin — an elite boxing and fitness gym based in Tallaght, Dublin 24, Ireland.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000`

### Production Build

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── App.js                    # Root app with React Router
├── index.js                  # Entry point
├── index.css                 # Global styles & design tokens
│
├── components/
│   ├── Navbar.jsx            # Professional fixed navbar with logo
│   ├── Navbar.css
│   ├── Footer.jsx            # Full footer with links & social icons
│   ├── Footer.css
│   ├── TrialModal.jsx        # Free trial booking modal
│   └── TrialModal.css
│
├── hooks/
│   └── useScrollReveal.js    # Intersection Observer scroll animations
│
└── pages/
    ├── Home.jsx              # Landing page (hero, about, programs, why us, testimonials, CTA)
    ├── Home.css
    ├── About.jsx             # About page (story, stats, values, facility)
    ├── About.css
    ├── Classes.jsx           # Classes page (6 programmes with schedules)
    ├── Classes.css
    ├── Trainers.jsx          # Trainers page (6 coach profiles)
    ├── Trainers.css
    ├── Pricing.jsx           # Pricing page (3 tiers, monthly/annual toggle, FAQs)
    ├── Pricing.css
    ├── Contact.jsx           # Contact page (form + info + map)
    ├── Contact.css
    └── PageShared.css        # Shared styles for inner pages
```

---

## 🎨 Design System

- **Primary Color:** `#A6FF00` (neon green)
- **Background:** `#0D0D0D` (near-black)
- **Display Font:** Bebas Neue
- **UI Font:** Oswald
- **Body Font:** Plus Jakarta Sans

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, programs, testimonials, CTA |
| `/about` | About — story, values, facility gallery |
| `/classes` | Classes — 6 programmes with schedules |
| `/trainers` | Trainers — 6 coach profiles |
| `/pricing` | Pricing — 3 tiers + monthly/annual toggle + FAQ |
| `/contact` | Contact — form, hours, map |

---

## ✨ Features

- ✅ React Router v6 multi-page navigation
- ✅ Professional navbar with shield logo and phone number
- ✅ Smooth scroll reveal animations on all sections
- ✅ Free trial modal with auto-popup (once per session)
- ✅ WhatsApp floating button
- ✅ Monthly/Annual pricing toggle
- ✅ Interactive FAQ accordion
- ✅ Class schedule toggles
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Real Unsplash images throughout
- ✅ Dublin-specific content (Tallaght, Irish names, Irish pricing)

---

## 📦 Dependencies

- `react` + `react-dom` — UI framework
- `react-router-dom` — Client-side routing
- `react-scripts` — Build tooling (Create React App)

No other third-party dependencies.

---

© 2025 Warriors Gym Dublin
