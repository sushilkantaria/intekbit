import heroImage from '../../assets/for-it-consulting.gif'; // Use same hero image for now
import devops from '../../assets/A-android.png'; // Placeholder for DevOps
import jenkins from '../../assets/A-java.png'; // Placeholder for Jenkins
import docker from '../../assets/A-flutter.png'; // Placeholder for Docker
import github from '../../assets/A-kotlin.png'; // Placeholder for GitHub
import django from '../../assets/A-swift.png'; // Placeholder for Django
import javascript from '../../assets/A-ios.png'; // Placeholder for JavaScript

const itConsultingData = {
  heroTitle: 'Expert Guidance for Smarter IT Decisions',
  heroDescription:
    'Our IT consulting services help you make the right technical decisions—whether you’re scaling, migrating, automating, or securing your systems. We bring years of cross-industry experience to guide you with confidence and clarity.',

  heroImage,

  industriesTitle: 'Industries That Benefit from our IT Consulting service',
  industriesDescription: 'We’ve empowered IT strategies across sectors like:', 

  industries: [
    'Banking and Financial Services',
    'Healthcare and Pharma',
    'Manufacturing and Industrial Automation',
    'Education and EdTech',
    'E-commerce and Retail',
    'Logistics and Transportation',
    'Startups and Tech Firms',
  ],

  contactCtaDescription:
    'IT Consulting isn’t just about advice—it’s about solving real problems with clear technical direction. We evaluate your business goals, audit your infrastructure, and help you plan scalable, secure, and future-ready IT systems. From cloud strategy to digital transformation, we guide you every step of the way.',
  contactCtaText: 'Talk to an IT Consultant',

  reasons: [
    {
      title: 'Business-Aligned IT Strategies',
      desc: 'We tailor every recommendation to your business goals—ensuring IT investments lead to real-world outcomes.',
    },
    {
      title: 'Vendor-Neutral Advice',
      desc: 'We’re not tied to any vendor or platform. Our guidance is unbiased and focused solely on what works best for your needs.',
    },
    {
      title: 'Implementation Support',
      desc: 'We don’t stop at strategy. We also help you implement, hire the right teams, and transition smoothly to new systems.',
    },
  ],

  techStackTitle: 'Tech Expertise We Bring',
  techStackDescription:
    'Our consultants are experts in modern tools, platforms, and methodologies that align with today’s enterprise demands.',

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
      question: 'What does your IT consulting service include?',
      answer:
        'We analyze your business goals and current tech stack, identify gaps or inefficiencies, and provide actionable plans for system upgrades, cloud transitions, security, or new tech adoption.',
    },
    {
      question: 'Do you also help with implementation?',
      answer:
        'Yes. While our core is strategy and architecture, we often work alongside your tech team or ours to help execute the recommendations and ensure a successful rollout.',
    },
    {
      question: 'Is this service only for large enterprises?',
      answer:
        'Not at all. We work with startups, SMEs, and enterprises alike—tailoring consulting scope and plans based on your business size and phase.',
    },
    {
      question: 'How do you ensure recommendations are unbiased?',
      answer:
        'We’re completely vendor-neutral and base our advice on what’s right for your project. Our team evaluates multiple solutions and tools before making recommendations.',
    },
    {
      question: 'What’s the first step to get started?',
      answer:
        'We usually begin with a short discovery call or workshop to understand your challenges. Then we present a customized roadmap with goals, timeline, and estimated effort.',
    },
  ],

  serviceName: 'IT consulting',
  whyUsTitle: `Why choose Intekbit Solutions as your IT consulting partner`,
};

export default itConsultingData;
