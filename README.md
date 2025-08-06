![Developer coding animation](./public/123.gif)

Mohammed Yaseen Portfolio

A professional portfolio website showcasing my journey as an aspiring Marine Data Scientist with expertise in AI/ML and environmental data solutions. Built with React, Tailwind CSS, Framer Motion, and Firebase, this single-page application features a modern design with smooth animations, a responsive layout, and a functional contact form.

Features





Sections: Home, About, Skills, Experience, Projects, Contact



Design: Marine-themed with navy blue and aqua colors, wave animations, and parallax scrolling



Interactivity: Dark mode toggle, scroll-to-top button, and hover effects



Contact Form: Powered by Firebase Cloud Functions for sending messages



Responsive: Optimized for desktop and mobile devices



Deployment: Hosted on Vercel for fast and reliable access

Technologies





Frontend: React, Tailwind CSS, Framer Motion



Backend: Firebase Cloud Functions (contact form)



Tools: Git, GitHub, Vercel



CDNs: React, Firebase, Framer Motion, Tailwind CSS

Prerequisites





Node.js (for local server, optional)



Git (for version control)



Firebase Account (for contact form functionality)



Vercel Account (for deployment)

Setup Instructions

1. Clone the Repository

git clone https://github.com/[yourname]/your-portfolio.git
cd your-portfolio

2. Update Placeholders





Replace placeholders in index.html:





[Your Name]: Your full name



[yourname@email.com]: Your email



[linkedin.com/in/yourname]: Your LinkedIn URL



[github.com/yourname]: Your GitHub URL



[yourportfolio.com]: Your portfolio domain (if applicable)



Profile picture and project screenshot URLs (replace https://via.placeholder.com links)



Add resume.pdf to the project root for the "Download Resume" link.

3. Set Up Firebase





Create a Firebase project at console.firebase.google.com.



Copy your Firebase config object from Project Settings and replace the placeholder in index.html:

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};



Set up a Firebase Cloud Function for the contact form:





Install Firebase CLI:

npm install -g firebase-tools
firebase login



Initialize Functions:

firebase init functions



In functions/index.js, add:

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: '[your-email@gmail.com]', pass: '[your-app-password]' }
});
exports.sendMessage = functions.https.onCall(async (data, context) => {
  const { name, email, message } = data;
  await transporter.sendMail({
    from: '[your-email@gmail.com]',
    to: '[yourname@email.com]',
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  });
  return { status: 'Message sent' };
});



Install dependencies:

cd functions
npm install nodemailer



Deploy:

firebase deploy --only functions

4. Run Locally





Use a local server to test:

npm install -g http-server
http-server .



Open http://localhost:8080 in your browser.



Alternatively, use Python:

python -m http.server 8000



Test the contact form and animations.

5. Deploy to Vercel





Push to GitHub:

git add .
git commit -m "Initial portfolio commit"
git push origin main



Log in to vercel.com.



Create a new project and import your GitHub repository.



Configure:





Framework Preset: Other



Root Directory: .



Build Settings: No build step needed



Deploy and access your site at your-portfolio.vercel.app.

Folder Structure

your-portfolio/
├── index.html       # Main portfolio file
├── resume.pdf       # (Optional) Resume for download
└── README.md        # This file

Customization





Images: Upload profile and project images to AWS S3 or Imgur and update URLs in index.html.



Education Section: Add an Education section by including your B.Tech details (institution, year).



Blog Section: Add a blog section using Firebase Firestore for dynamic posts (optional).

Notes





Ensure an active internet connection for CDN-loaded dependencies (React, Firebase, etc.).



Test responsiveness on mobile devices using browser developer tools.



For a more scalable setup, convert to a Vite-based React project:

npm create vite@latest my-portfolio -- --template react
npm install tailwindcss@latest postcss@latest autoprefixer@latest framer-motion
npm run dev

Contact





Email: [yourname@email.com]



LinkedIn: [linkedin.com/in/yourname]



GitHub: [github.com/yourname]



Built with 🌊 by [Your Name], 2025.