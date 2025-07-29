import heroImage from '../../assets/AIML.webp'; // Use same hero image for now
import devops from '../../assets/A-android.png';      // Placeholder for DevOps
import jenkins from '../../assets/A-java.png';        // Placeholder for Jenkins
import docker from '../../assets/A-flutter.png';      // Placeholder for Docker
import github from '../../assets/A-kotlin.png';       // Placeholder for GitHub
import django from '../../assets/A-swift.png';        // Placeholder for Django
import javascript from '../../assets/A-ios.png';      // Placeholder for JavaScript

const softwareDevelopmentData = {
  heroTitle: 'Tailored Software for Unique Business Needs',
  heroDescription:
    'We develop custom software solutions that match your exact business logic, workflows, and goals. Whether it’s internal tools, enterprise platforms, or scalable SaaS—we deliver clean, future-proof systems.',

  heroImage,

  industriesTitle: 'Industries That Benefit from our Custom Software Solutions',
  industriesDescription: 'We’ve created bespoke solutions for:',

  industries: [
    'Enterprise Resource Planning (ERP)',
    'Healthcare Automation',
    'Retail Inventory Systems',
    'Finance & Insurance',
    'Manufacturing Workflows',
    'Custom CRM Solutions',
    'Education Technology Platforms',
  ],

  contactCtaDescription:
    'Our custom software solutions go beyond basic functionality—we help you automate complex processes, manage workflows, and build platforms that scale with your growth. With full control over features, security, and integrations, you get exactly what your business demands. Our team ensures the software evolves with your future goals.',

  contactCtaText: 'Build Your Custom Solution',

  reasons: [
    {
      title: 'Built Around Your Workflow',
      desc: 'We don’t force you into templates. Every solution is crafted from scratch based on your business process and objectives.',
    },
    {
      title: 'Reliable, Scalable Architecture',
      desc: 'Our solutions grow with you. We follow best practices for backend design, deployment, and integrations.',
    },
    {
      title: 'Continuous Support & Evolution',
      desc: 'We’re with you after launch too—providing long-term maintenance, updates, and new features as your needs evolve.',
    },
  ],

  techStackTitle: 'Custom Software Tech Stack',
  techStackDescription:
    'We use modern languages, automation tools, and deployment pipelines to deliver robust and maintainable software.',

  techs: [
    { name: 'DevOps', icon: devops },
    { name: 'Jenkins', icon: jenkins },
    { name: 'Docker', icon: docker },
    { name: 'GitHub', icon: github },
    { name: 'Django', icon: django },
    { name: 'JavaScript', icon: javascript },
  ],

  faqData: [
    {
      question: 'What types of custom software do you build?',
      answer:
        'We build internal tools, SaaS platforms, CRMs, dashboards, and full-scale enterprise solutions tailored to your needs. Everything is designed around your specific requirements.',
    },
    {
      question: 'Do you handle both frontend and backend?',
      answer:
        'Yes, we build complete systems—UI, API, backend, database, and deployment pipelines—under one roof using modern stacks.',
    },
    {
      question: 'Will the software be scalable and maintainable?',
      answer:
        'Absolutely. We follow modular, scalable design patterns and build systems that are easy to maintain, extend, and integrate.',
    },
    {
      question: 'Do I get ownership of the source code?',
      answer:
        'Yes. You get full source code ownership with documentation, so you’re never locked in or dependent on us.',
    },
    {
      question: 'How long will it take to build custom software?',
      answer:
        'That depends on the complexity. Smaller internal tools may take 3–4 weeks, while full systems may take 6–10+ weeks. We always give a clear timeline in our proposal.',
    },
  ],

  serviceName: 'custom software development',
  whyUsTitle: `Why choose Intekbit Solutions as your custom software development partner`,
};

export default softwareDevelopmentData;
