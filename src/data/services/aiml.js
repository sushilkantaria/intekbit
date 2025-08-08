// src/content/aiMlService.js
import heroImage from '../../assets/for-ai-ml-2.gif'; // AI hero image

// Reused icons from mobile app techs for now (same file names, different labels)
import python from '../../assets/A-android.png'; // use temporarily for Python
import tensor from '../../assets/A-java.png'; // use temporarily for TensorFlow
import pytorch from '../../assets/A-flutter.png'; // use temporarily for PyTorch
import openai from '../../assets/A-kotlin.png'; // use temporarily for OpenAI
import huggingface from '../../assets/A-swift.png'; // use temporarily for HuggingFace
import scikit from '../../assets/A-ios.png'; // use temporarily for Scikit-learn

const aimlData = {
  heroTitle: 'AI that Thinks, Learns, and Elevates',
  heroDescription:
    'We build intelligent AI and machine learning systems that learn from data, solve real problems, and give you a competitive edge. From prediction models to generative AI—we do it all.',
  heroImage,

  industriesTitle: 'Industries Powered by Our AI/ML Solutions',
  industriesDescription: 'We build smart AI for sectors such as:',
  industries: [
    'Healthcare Diagnostics',
    'Finance & Risk Management',
    'E-commerce Personalization',
    'Logistics & Supply Chain',
    'Education & EdTech',
  ],

  contactCtaDescription:
    'Want to bring AI into your business? We’ll guide you every step of the way — from planning the right strategy to building powerful solutions and scaling them for growth. Our goal is to create AI that not only works but delivers real, measurable results for your business.',
    
  contactCtaText: 'Build with AI',

  reasons: [
    {
      title: 'Real-world AI expertise',
      desc: 'From NLP to computer vision and predictive analytics, we can solve complex business problems with practical AI.',
    },
    {
      title: 'Custom-trained models',
      desc: 'We build tailored machine learning models trained on your data to deliver better accuracy and outcomes.',
    },
    {
      title: 'Transparent and ethical AI',
      desc: 'We prioritize explainable AI and follow best practices for fairness, accountability, and data privacy.',
    },
  ],

  techStackTitle: 'Our AI/ML Tech Stack',
  techStackDescription:
    'We use state-of-the-art frameworks and platforms to build and deploy scalable, production-ready AI solutions.',
  techs: [
    { name: 'Python', icon: python },
    { name: 'TensorFlow', icon: tensor },
    { name: 'PyTorch', icon: pytorch },
    { name: 'OpenAI API', icon: openai },
    { name: 'HuggingFace', icon: huggingface },
    { name: 'Scikit-learn', icon: scikit },
  ],

  faqData: [
    {
      question: 'What types of AI solutions do you build?',
      answer:
        'We develop a wide range of AI applications such as predictive analytics, recommendation engines, computer vision systems, NLP-based chatbots, fraud detection tools, and more. Each solution is customized to address specific business goals using the most suitable models and algorithms.',
    },
    {
      question: 'Can you integrate AI into existing systems?',
      answer:
        'Yes, we specialize in integrating AI into your existing digital infrastructure—whether it’s a website, mobile app, CRM, or enterprise dashboard. Our solutions are API-driven, making them easy to plug into your current workflow with minimal disruption.',
    },
    {
      question: 'Do you offer generative AI like ChatGPT integration?',
      answer:
        'Absolutely. We create smart assistants, content automation tools, and conversational interfaces using OpenAI, HuggingFace, and other generative models. Whether it’s a chatbot or a document summarizer, we tailor it to your business use case.',
    },
    {
      question: 'Is my data safe with your AI systems?',
      answer:
        'Yes, data security is a top priority. We use encrypted pipelines, secure cloud environments, anonymization techniques, and strict access control to ensure your data is protected at every step—from training to deployment and monitoring.',
    },
    {
      question: 'How long does it take to deliver an AI solution?',
      answer:
        'Delivery time depends on project complexity. Simple predictive models may take 2–3 weeks, while full-scale AI systems with custom training and APIs could take 1–2 months. We always provide a clear timeline after project scoping.',
    },
  ],

  serviceName: 'AI and ML development',
  whyUsTitle: `Why choose Intekbit Solutions as your AI & ML development partner`,
};

export default aimlData;

