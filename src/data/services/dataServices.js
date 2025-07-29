import heroImage from '../../assets/AIML.webp';
import apache from '../../assets/A-android.png';
import powerbi from '../../assets/A-java.png';
import postgresql from '../../assets/A-flutter.png';
import mongodb from '../../assets/A-kotlin.png';
import informatica from '../../assets/A-swift.png';
import aws from '../../assets/A-ios.png';

const dataServicesData = {
  heroTitle: 'Data-Driven Decisions Start Here',
  heroDescription:
    'We turn raw data into smart insights. From data warehousing to real-time analytics, our solutions empower you to make smarter decisions, optimize operations, and stay ahead of the competition.',
  heroImage,

  industriesTitle: 'Industries That Benefit from our Data Services',
  industriesDescription:
    'We’ve helped organizations from multiple domains harness their data effectively, including:',
  industries: [
    'Finance & Insurance',
    'Healthcare & Pharma',
    'Retail & E-commerce',
    'Logistics & Supply Chain',
    'Government & Public Sector',
    'Education & Research',
    'Manufacturing & Utilities',
  ],

  contactCtaDescription:
    'Want to unlock your business data’s full potential? Our team is ready to help you set up data pipelines, visualize insights, and implement custom dashboards that bring clarity and impact.',
  contactCtaText: 'Start Your Data Journey',

  reasons: [
    {
      title: 'Expertise in Data Engineering',
      desc: 'We build secure, scalable data pipelines and automate ETL workflows tailored to your business logic.',
    },
    {
      title: 'Business-Focused Analytics',
      desc: 'From dashboards to forecasts, we present data in formats that drive faster and smarter decisions.',
    },
    {
      title: 'Cloud-Ready Data Solutions',
      desc: 'We set up your data systems on cloud infrastructure with high availability and zero compromise on performance.',
    },
  ],

  techStackTitle: 'Technologies We Use in Data Services',
  techStackDescription:
    'We use powerful data platforms, BI tools, and cloud services to ensure your data is accessible, secure, and usable at scale.',
  techs: [
    { name: 'Apache', icon: apache },
    { name: 'Power BI', icon: powerbi },
    { name: 'PostgreSQL', icon: postgresql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Informatica', icon: informatica },
    { name: 'AWS', icon: aws },
  ],

  faqData: [
    {
      question: 'Do you handle both structured and unstructured data?',
      answer:
        "Yes, we specialize in managing all data types—structured, semi-structured, and unstructured—using databases like PostgreSQL, MongoDB, and cloud-native tools. Whether it's logs, text, or relational data, we can make it usable.",
    },
    {
      question: 'Can you help with setting up a BI dashboard?',
      answer:
        'Absolutely. We design interactive dashboards using Power BI and similar tools, tailored to your KPIs. These dashboards help track real-time performance and enable quick decision-making.',
    },
    {
      question: 'Do you provide cloud-based data warehousing? ',
      answer:
        'Yes, we build cloud-native data warehouses using AWS, Google Cloud, or Azure depending on your ecosystem. Our pipelines are optimized for scale, speed, and analytics readiness.',
    },
    {
      question: 'Can you help clean and organize messy datasets?',
      answer:
        'Definitely. We apply advanced data cleaning techniques, deduplication, and structuring methods. Whether it’s legacy data or real-time logs, we turn it into analysis-ready formats.',
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer:
        'We follow strict protocols including data encryption, access control, and audit logging. Our solutions align with standards like GDPR, HIPAA, and ISO for industry-specific compliance.',
    },
  ],

  serviceName: 'data services',
  whyUsTitle: 'Why choose Intekbit Solutions as your data services partner',
};

export default dataServicesData;




