import heroImage from '../../assets/cloudservicebg.mp4'; // Use video as hero background
import aws from '../../assets/A-android.png'; // Placeholder for AWS
import azure from '../../assets/A-java.png'; // Placeholder for Azure
import gcloud from '../../assets/A-flutter.png'; // Placeholder for Google Cloud
import hadoop from '../../assets/A-kotlin.png'; // Placeholder for Hadoop
import kubernet from '../../assets/A-swift.png'; // Placeholder for Kubernetes
import cloudflare from '../../assets/A-ios.png'; // Placeholder for Cloudflare
const cloudServicesData = {
  heroTitle: 'Reliable Cloud Infrastructure for the Future',
  heroDescription:
    'We help businesses migrate, manage, and scale through secure cloud solutions. Whether it’s AWS, Azure, or hybrid—our solutions are flexible, fast, and tailored to your business’s unique infrastructure needs.',
  heroImage,
  industriesTitle: 'Industries That Benefit from our cloud computing service',
  industriesDescription:
    'Here are just a few industries where our cloud solutions are transforming operations:',
  industries: [
    'Banking & Fintech',
    'Healthcare & Biotech',
    'E-commerce & Marketplaces',
    'Gaming & Streaming',
    'Education & LMS',
    'Logistics & Transportation',
    'Manufacturing & Automation',
  ],
  contactCtaText: 'Launch with Cloud Confidence',
  reasons: [
    {
      title: 'Seamless Migration & Management',
      desc: 'We migrate your existing infrastructure with minimal downtime and manage everything with proactive monitoring.',
    },
    {
      title: 'Security-first Architecture',
      desc: 'Your data and services stay protected with top-tier cloud security, backups, and disaster recovery plans.',
    },
    {
      title: 'Optimized for Speed & Cost',
      desc: 'Our solutions are tailored to optimize performance while reducing your monthly cloud bills.',
    },
  ],
  techStackTitle: 'Cloud Platforms & Tools We Work With',
  techStackDescription:
    'We combine industry-leading platforms and orchestration tools to build scalable and fault-tolerant cloud infrastructure.',
  techs: [
    { name: 'AWS', icon: aws },
    { name: 'Microsoft Azure', icon: azure },
    { name: 'Google Cloud', icon: gcloud },
    { name: 'Hadoop', icon: hadoop },
    { name: 'Kubernetes', icon: kubernet },
    { name: 'Cloudflare', icon: cloudflare },
  ],
  contactCtaDescription:
    'Cloud isn’t just about hosting—it’s about agility, security, and business continuity. We help you set up scalable infrastructure, integrate tools, and manage everything from migration to post-deployment monitoring. Our cloud experts ensure you get flexibility without compromising control or performance.',
  faqData: [
    {
      question: 'Do you provide cloud migration services?',
      answer:
        'Yes, we handle migrations to AWS, Azure, or GCP with minimal downtime. Our process ensures full data integrity and post-migration support.',
    },
    {
      question: 'Can you set up autoscaling and backups?',
      answer:
        'Absolutely. We configure auto-scaling, monitoring, and daily backups to maintain uptime and recovery readiness.',
    },
    {
      question: 'Is my data secure on the cloud?',
      answer:
        'Yes. We follow strict access control, encryption, and cloud-native security tools to protect your data at every layer.',
    },
    {
      question: 'Will you help manage the infrastructure post-deployment?',
      answer:
        'Yes, we provide ongoing monitoring, updates, scaling support, and issue resolution tailored to your infrastructure.',
    },
    {
      question: 'Can you help reduce my cloud bill?',
      answer:
        'Definitely. We audit your current setup, right-size instances, and eliminate unused services to optimize cloud costs.',
    },
  ],
  serviceName: 'cloud computing',
  whyUsTitle: `Why choose Intekbit Solutions as your cloud computing partner`,
};
export default cloudServicesData;