import heroImage from '../../assets/for-support-maintenance.gif'; // Placeholder — update with actual support/maintenance image
import aws from '../../assets/A-android.png'; // AWS CloudWatch
import postman from '../../assets/A-java.png'; // Postman
import jenkins from '../../assets/A-flutter.png'; // Jenkins
import git from '../../assets/A-kotlin.png'; // Git
import docker from '../../assets/A-swift.png'; // Docker
import sentry from '../../assets/A-ios.png'; // Sentry

const supportMaintenanceData = {
  heroTitle: 'Keep Your Software Running Smoothly, Always',
  heroDescription:
    'Our job doesn’t end at deployment. We monitor, update, and improve your applications continuously to ensure they stay fast, secure, and bug-free. Whether it’s a website or cloud app—we keep it running at its best.',
  heroImage,

  industriesTitle:
    'Industries That Benefit from our Support and Maintenance service',
  industriesDescription:
    'We offer support and maintenance services for a wide range of sectors, such as:',
  industries: [
    'Healthcare & Hospitals',
    'Banking & Finance',
    'E-commerce Platforms',
    'EdTech & Universities', 
    'IT & SaaS Startups', 
    'Transport & Logistics',
    'Government Portals',
  ],

  contactCtaDescription:
    'Need ongoing support for your digital products? Our team ensures timely updates, real-time monitoring and reliable maintenance so you can focus on growth. We work behind the scenes to keep your systems secure, optimized, and running smoothly. With our dedicated support you can stay worry-free and concentrate on achieving your business goals.',
    
  contactCtaText: 'Get Continuous Support',

  reasons: [
    {
      title: '24/7 Monitoring & Alerts',
      desc: 'We set up systems to monitor app health, performance, and downtime—so issues are resolved before users even notice.',
    },
    {
      title: 'Regular Updates & Bug Fixes',
      desc: 'Our maintenance team keeps your codebase updated, patches vulnerabilities, and fixes bugs quickly to prevent business disruption.',
    },
    {
      title: 'Scalable Support Plans',
      desc: 'Choose from flexible support models based on your budget, hours required, and service levels—ideal for startups or enterprises.',
    },
  ],

  techStackTitle: 'Tools & Platforms We Use',
  techStackDescription:
    'We rely on powerful tools to deliver continuous integration, real-time monitoring, and efficient issue resolution.',
  techs: [
    { name: 'AWS CloudWatch', icon: aws },
    { name: 'Postman', icon: postman },
    { name: 'Jenkins', icon: jenkins },
    { name: 'Git', icon: git },
    { name: 'Docker', icon: docker },
    { name: 'Sentry', icon: sentry },
  ],

  faqData: [
    {
      question: 'What kind of support services do you offer?',
      answer:
        'We offer everything from performance monitoring and bug fixing to version updates, server support, backups, and security checks—tailored to your business needs.',
    },
    {
      question: 'Can I request support only when needed?',
      answer:
        'Yes, we offer both ongoing monthly maintenance plans and on-demand support for urgent issues or updates when you need them.',
    },
    {
      question: 'How do you monitor issues in real-time?',
      answer:
        'We use tools like AWS CloudWatch and Sentry to keep an eye on server uptime, error logs, and usage spikes—so we can act instantly if something goes wrong.',
    },
    {
      question: 'Is there a minimum contract duration?',
      answer:
        'No strict contracts—we’re flexible. You can start with short-term support or opt for long-term service-level agreements based on your requirements.',
    },
    {
      question: 'Will I get reports of what’s being maintained?',
      answer:
        'Yes, we send regular reports that include what updates were made, any issues resolved, and upcoming recommendations to improve your system.',
    },
  ],

  serviceName: 'support and maintenance',
  whyUsTitle:
    'Why choose Intekbit Solutions as your support and maintenance partner',
};

export default supportMaintenanceData;
