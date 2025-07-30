import heroImage from '../../assets/AIML.webp'; // Placeholder — replace with actual web dev hero image
import react from '../../assets/A-android.png'; // Use same as Android for now
import htmlcssjs from '../../assets/A-java.png'; // Placeholder for HTML/CSS/JS
import wordpress from '../../assets/A-flutter.png'; // Placeholder for WordPress
import node from '../../assets/A-kotlin.png'; // Placeholder for Node.js
import express from '../../assets/A-swift.png'; // Placeholder for Express.js
import angular from '../../assets/A-ios.png'; // Placeholder for Angular

const webDevelopmentData = {
  heroTitle: 'Web Solutions That Convert & Scale',
  heroDescription:
    'From static sites to dynamic web apps, we create performance-focused, user-friendly web solutions that drive business growth. Whether you need a landing page or a custom dashboard—we’ve got you covered.',
  heroImage,

  industriesTitle: 'Industries That Benefit from our Web Development Services',
  industriesDescription:
    'We’ve developed web solutions across various industries, including:',
  industries: [
    'Healthcare Portals',
    'E-commerce & Retail',
    'Education & E-learning',
    'Finance & Banking',
    'Hospitality & Travel',
    'Logistics & Supply Chain',
    'Media & Entertainment',
  ],

  contactCtaDescription:
    'Looking to launch a fast, responsive, and scalable website that drives results? Whether you need a landing page, an e-commerce store, or a full-stack web app, our expert developers ensure it’s built for performance, security, and long-term growth. We bring deep expertise across modern frameworks and CMS platforms to craft digital experiences that engage and convert.',

  contactCtaText: 'Start Your Web Project',

  reasons: [
    {
      title: 'Responsive & Modern UI',
      desc: 'We build interfaces that look great and work perfectly across all screen sizes and devices.',
    },
    {
      title: 'Scalable & Maintainable Code',
      desc: 'Our codebase is clean, modular, and ready to scale as your business grows.',
    },
    {
      title: 'SEO & Speed Optimized',
      desc: 'We ensure your site loads fast and is optimized for search engines right from day one.',
    },
  ],

  techStackTitle: 'Web Technologies We Use',
  techStackDescription:
    'Our stack includes modern frameworks, backend APIs, and CMS tools to build powerful web apps and dynamic websites.',
  techs: [
    { name: 'React JS', icon: react },
    { name: 'HTML / CSS / JS', icon: htmlcssjs },
    { name: 'WordPress', icon: wordpress },
    { name: 'Node.js', icon: node },
    { name: 'Express.js', icon: express },
    { name: 'Angular', icon: angular },
  ],

  faqData: [
    {
      question: 'Do you create both frontend and backend?',
      answer:
        'Yes, we offer complete end-to-end development—from frontend UI in React, HTML, or WordPress to backend services using Node.js and Express.js.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer:
        'Absolutely. We perform UI/UX audits, improve performance, and rebuild your site using modern technologies for better results.',
    },
    {
      question: 'Do you offer SEO-friendly websites?',
      answer:
        'Yes, all websites we develop are optimized for performance, mobile-friendliness, and SEO best practices out of the box.',
    },
    {
      question: 'Can I manage content after the site is built?',
      answer:
        'Yes, we use CMS platforms like WordPress or create custom admin panels so you can easily manage and update your content.',
    },
    {
      question: 'How long will it take to build my website?',
      answer:
        'For simple landing pages, we take about 1–2 weeks. Full-featured websites with backend logic can take 3–5 weeks or more depending on scope.',
    },
  ],

  serviceName: 'web development',
  whyUsTitle: `Why choose Intekbit Solutions as your web development partner`,
};

export default webDevelopmentData;
