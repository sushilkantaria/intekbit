import React, { useState } from 'react';

const servicesData = [
    {
        title: 'Custom Software Development',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-custom-soft-dev-itp.webp',
                sectionTitle: 'Custom Software Development',
                content: 'We design and develop custom software solutions that align with your business goals, ensuring flexibility, scalability, and efficiency. Our team leverages cutting-edge technologies to create innovative, user-friendly applications tailored to your unique needs. From concept to deployment, we focus on delivering high-quality solutions that drive growth and streamline operations.'
            }
        ]
    },
    {
        title: 'Web Application Development',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-web-dev-itp.webp',
                sectionTitle: 'Web Application Development',
                content: 'We build responsive, user-friendly, and secure web applications using modern frameworks and technologies to deliver outstanding user experiences. Our development process ensures seamless performance across devices, optimizing speed and functionality. With a focus on scalability and innovation, we create web applications that adapt to your business needs and enhance user engagement.'
            }
        ]
    },
    {
        title: 'Mobile Application Development',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-mobile-app-dev-itp.webp',
                sectionTitle: 'Mobile Application Development',
                content: 'From Android to cross-platform apps, we develop feature-rich mobile applications that engage users and enhance business reach. Our solutions prioritize seamless performance, intuitive design, and scalability to meet evolving market demands.'
            }
        ]
    },
    {
        title: 'Enterprise Software Solutions',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-enterprise-soft-itp.webp',
                sectionTitle: 'Enterprise Software Solutions',
                content: 'We create robust enterprise applications that streamline business processes, improve productivity, and support data-driven decision-making. Our solutions are designed to handle complex workflows, automate repetitive tasks, and enhance operational efficiency. With a strong focus on security and compliance, we ensure your enterprise software meets industry standards and business objectives.'
            }
        ]
    },
    {
        title: 'Cloud-Based Application Development',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-cloud-based-itp.webp',
                sectionTitle: 'Cloud-Based Application Development',
                content: 'We develop cloud-native applications that are scalable, reliable, and cost-efficient, leveraging platforms like AWS, Microsoft Azure, and Google Cloud. By harnessing the power of cloud computing, we enable businesses to achieve agility, reduce infrastructure costs, and improve system performance. Our cloud solutions support high availability, automated scaling, and seamless data management.'
            }
        ]
    },
    {
        title: 'API Development & Integration',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-api-integration-itp.webp',
                sectionTitle: 'API Development & Integration',
                content: 'We build secure, scalable APIs for seamless integration between different software systems, enabling smooth data flow and enhanced functionality. Our API solutions ensure interoperability, making it easier for businesses to connect applications, streamline operations, and enhance digital experiences. With robust security measures and performance optimization, we deliver APIs that drive efficiency and innovation.'
            }
        ]
    },
    {
        title: 'Software Maintenance & Support',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-software-maintenance-service-itp.webp',
                sectionTitle: 'Software Maintenance & Support',
                content: 'Our services don’t stop at development—we provide continuous maintenance, updates, and technical support to ensure optimal performance. From bug fixes to performance enhancements, we ensure your software remains reliable and up to date. Our proactive approach to monitoring and troubleshooting helps prevent downtime and keeps your business running smoothly.'
            }
        ]
    },
    {
        title: 'DevOps & Automation',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-devops-itp.webp',
                sectionTitle: 'DevOps & Automation',
                content: 'We implement DevOps practices for continuous integration and deployment (CI/CD), ensuring faster releases, improved collaboration, and automation of development workflows. By streamlining development, testing, and deployment, we help businesses achieve greater agility and efficiency. Our DevOps solutions enhance system reliability, security, and scalability while reducing time-to-market.'
            }
        ]
    },
    {
        title: 'UI/UX Design',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-ui-ux-itp.webp',
                sectionTitle: 'UI/UX Design',
                content: 'Our design team focuses on creating intuitive and engaging user interfaces, ensuring seamless user experiences across web and mobile applications. By applying user-centric design principles, we craft visually appealing and easy-to-navigate digital products. With a blend of creativity and functionality, we enhance user satisfaction and brand perception.'
            }
        ]
    },
    {
        title: 'Data Analytics & Business Intelligence',
        sections: [
            {
                img: '/Assets/internal-assets/softdev-Business-Intelligence-Data-Analytics-itp.webp',
                sectionTitle: 'Data Analytics & Business Intelligence',
                content: 'We develop data-driven software solutions that help businesses analyze large datasets, uncover insights, and make informed decisions. Our analytics-driven approach enables organizations to optimize processes, predict trends, and enhance strategic planning. By leveraging AI and machine learning, we turn raw data into actionable intelligence, unlocking new growth opportunities.'
            }
        ]
    }
];

const SoftwareDevelopment = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];
    return (
        <div className="bg-white dark:bg-[#10111a] min-h-screen text-gray-900 dark:text-gray-100">
            <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Software Development</h2>
                    <p className="text-gray-700">At Intekbit Solutions Pvt. Ltd., we provide end-to-end software development services tailored to meet the unique needs of businesses across various industries. Our team of skilled developers focuses on creating secure, scalable, and high-performance software solutions that help businesses grow and adapt to the evolving digital landscape.</p>
                </div>
                <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                    <img src="/Assets/internal-softaware-development.webp" alt="Software Development" className="w-64 h-48 object-cover rounded-lg shadow" />
                </div>
            </section>
            <section className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                    {servicesData.map((item, idx) => (
                        <button
                            key={item.title}
                            className={`px-4 py-2 rounded transition font-medium border border-blue-500 focus:outline-none ${activeIndex === idx ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 hover:bg-blue-100'}`}
                            onClick={() => setActiveIndex(idx)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="bg-blue-50 rounded p-4 shadow-inner flex flex-col md:flex-row items-center gap-8">
                    <img src={activeService.sections[0].img} alt={activeService.sections[0].sectionTitle} className="w-40 h-40 object-contain rounded-lg shadow" />
                    <div>
                        <h3 className="text-lg font-bold text-blue-700 mb-2">{activeService.sections[0].sectionTitle}</h3>
                        <p className="text-gray-700">{activeService.sections[0].content}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareDevelopment;
