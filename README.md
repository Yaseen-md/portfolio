# Mohammed Yaseen — Portfolio

A personal portfolio website built with **React + Vite**, styled with **Tailwind CSS**, and animated using **Framer Motion**. The site showcases my journey as an aspiring Marine Data Scientist with expertise in AI/ML and environmental data solutions.

---

## Features

- **Sections:** Hero, About, Skills, Experience, Projects, Education, Certifications, Contact
- **Design:** Marine-themed with navy blue and aqua colours, smooth animations, and parallax scrolling
- **Animations:** Powered by Framer Motion with entrance and scroll-triggered effects
- **Contact Form:** EmailJS integration — no backend required
- **Responsive:** Fully optimised for desktop and mobile devices
- **Extras:** Scroll-to-top button, animated loader, dark/light theme support

---

## Tech Stack

| Category       | Libraries / Tools                                                         |
| -------------- | ------------------------------------------------------------------------- |
| **Framework**  | React 18, Vite                                                            |
| **Styling**    | Tailwind CSS, tailwindcss-animate                                         |
| **UI**         | Radix UI (dialog, tabs, toast, dropdown, …), lucide-react, react-icons   |
| **Animations** | Framer Motion                                                             |
| **Utilities**  | clsx, tailwind-merge, class-variance-authority                            |
| **Tooling**    | ESLint, PostCSS, Autoprefixer                                             |
| **Deployment** | Vercel                                                                    |

---

## Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/          # Page sections and reusable UI components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ui/              # Shared Radix-based components
│   ├── data/                # Static data (projects, skills, etc.)
│   ├── lib/                 # Utility helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example             # Environment variable template
├── Mohammed_Yaseen_Resume.pdf
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (see `.nvmrc` for the pinned version)
- **npm** ≥ 9

### Install & Run

```bash
git clone https://github.com/Yaseen-md/portfolio.git
cd portfolio
npm install
npm run dev
```

The development server starts at `http://localhost:5173`.

### Build & Preview

```bash
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values before running the contact form locally:

```env
# EmailJS — required for the contact form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics — optional
VITE_GA_ID=your_google_analytics_id
```

> **Note:** `.env` is listed in `.gitignore` and should never be committed. Only `.env.example` (with placeholder values) belongs in version control.

---

## Resume

A resume PDF is included in the repository root:

```
Mohammed_Yaseen_Resume.pdf
```

---

## Deployment

The site is deployed on **Vercel**. To deploy your own fork:

1. Push your changes to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Set the **Framework Preset** to **Vite**.
4. Add the environment variables from `.env.example` in the Vercel project settings.
5. Deploy — Vercel will run `npm run build` automatically.

---

## Contact

- **Email:** [mohd.yaseen.marinedata@gmail.com](mailto:mohd.yaseen.marinedata@gmail.com)
- **LinkedIn:** [linkedin.com/in/mohammed-yaseen-md](https://linkedin.com/in/mohammed-yaseen-md)
- **GitHub:** [github.com/Yaseen-md](https://github.com/Yaseen-md)

---

Built with 🌊 by Mohammed Yaseen, 2025.
