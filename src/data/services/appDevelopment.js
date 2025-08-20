import heroImage from '/Assets/services-page/for-app-dev.gif';
import Native from '/Assets/services-technology/app-native.png';
import java from '/Assets/services-technology/A-java.png';
import flutter from '/Assets/services-technology/A-flutter.png';
// import firebase from '/Assets/services-technology/A-firebase.webp';
import kotlin from '/Assets/services-technology/A-kotlin.png';
import swift from '/Assets/services-technology/A-swift.png'; 
import python from '/Assets/services-technology/A-python.png';

const appDevelopmentData = {
  heroTitle: 'Apps that Engage, Convert and Scale',
  heroDescription:
    'From Android to iOS, we build mobile applications that delight users and drive business growth. Our apps are built to perform and scale with your goals.',
  heroImage,
 
  industriesTitle: 'Industries Transformed by Our Mobile Apps',
  industriesDescription: 
    'We’ve delivered impactful mobile experiences for sectors like:',
  industries: [
    'Healthcare & Wellness',
    'Fintech & Banking',
    'E-commerce & Delivery',
    'Travel & Tourism',
    'EdTech & Learning Platforms',
  ],

  contactCtaDescription:
    'Need a high-performing mobile app for your business idea? We turn concepts into powerful, user-friendly apps with intuitive design, secure architecture, and flawless performance. From planning to launch, we focus on creating mobile experiences that engage users, work seamlessly, and help your business grow.',

    
  contactCtaText: 'Launch Your Mobile App',

  reasons: [
    {
      title: 'Cross-platform expertise',
      desc: 'We develop using React Native and Flutter to ensure cost-effective and consistent app performance on both Android and iOS.',
    },
    {
      title: 'App store ready',
      desc: 'We build apps with guidelines in mind to ensure smooth approvals on Play Store and App Store.',
    },
    {
      title: 'End-to-end development',
      desc: 'From wireframes to deployment and support, we handle every step of the mobile development process.',
    },
  ],

  techStackTitle: 'Technologies We Use for Mobile Apps',
  techStackDescription:
    'We combine performance, usability, and reliability with top frameworks to create impactful mobile experiences.',
  techs: [
    { name: 'React Native', icon: Native },
    { name: 'Flutter', icon: flutter },
    { name: 'Java', icon: java },
    { name: 'Kotlin', icon: kotlin },
    { name: 'Swift', icon: swift },
    { name: 'Python', icon: python },
  ],

  faqData: [
    {
      question: 'Do you build apps for both Android and iOS?',
      answer:
        'Yes, we use cross-platform frameworks like React Native and Flutter to build apps that work on both platforms.',
    },
    {
      question: 'Can you maintain or upgrade my existing app?',
      answer:
        'Absolutely. We offer code audit, upgrade, and performance tuning services for existing apps.',
    },
    {
      question: 'Will you help with app store publishing?',
      answer:
        'Yes, we guide you through the process or handle the entire publishing to Play Store and App Store.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes, we offer bug fixes, updates, and feature additions as part of our maintenance plans.',
    },
    {
      question: 'How long does it take to develop a mobile app?',
      answer:
        'It depends on the complexity, but a basic app can take 4–6 weeks. We’ll share a full timeline after the initial consultation.',
    },
  ],

  serviceName: 'mobile app development',
  whyUsTitle: `Why choose Intekbit Solutions as your mobile app development partner`,
};

export default appDevelopmentData;
