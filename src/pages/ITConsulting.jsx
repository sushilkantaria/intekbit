import React, { useState } from 'react';

const servicesData = [
    {
        title: 'Technology Strategy & Planning',
        sections: [
            {
                sectionTitle: 'Technology Strategy & Planning',
                content: 'We help businesses create IT strategies aligned with their goals, ensuring technology investments deliver maximum value. Our experts analyze current systems, identify areas for improvement, and provide strategic guidance to enhance efficiency and innovation. With a tailored approach, we help organizations future-proof their IT infrastructure and drive sustainable growth.'
            }
        ]
    },
    {
        title: 'IT Infrastructure Consulting',
        sections: [
            {
                sectionTitle: 'IT Infrastructure Consulting',
                content: 'We assess and optimize your IT infrastructure for improved performance, security, and scalability, whether on-premises, cloud-based, or hybrid environments. Our approach includes system audits, resource allocation improvements, and security enhancements to ensure reliability. By leveraging best practices, we help businesses achieve seamless operations and cost-effective IT management.'
            }
        ]
    },
    {
        title: 'Cloud Consulting',
        sections: [
            {
                sectionTitle: 'Cloud Consulting',
                content: 'Our cloud experts guide businesses in selecting the right cloud platforms, planning migrations, and optimizing cloud resources for cost and performance efficiency. We ensure a smooth transition with minimal downtime while enhancing flexibility and scalability. From cloud strategy to implementation, we help businesses leverage cloud technology to maximize efficiency and innovation.'
            }
        ]
    },
    {
        title: 'Cybersecurity Consulting',
        sections: [
            {
                sectionTitle: 'Cybersecurity Consulting',
                content: 'We identify vulnerabilities, develop security strategies, and implement robust solutions to protect your data and systems from cyber threats. Our cybersecurity services include risk assessments, threat mitigation, and compliance enforcement to safeguard sensitive information. By integrating advanced security measures, we help businesses maintain data integrity and operational continuity.'
            }
        ]
    },
    {
        title: 'Software Consulting',
        sections: [
            {
                sectionTitle: 'Software Consulting',
                content: 'We analyze your current software solutions, recommend improvements, and guide you through custom software development or system integration processes. Our goal is to enhance compatibility, eliminate inefficiencies, and ensure smooth data exchange between systems. By aligning technology with business goals, we improve workflow automation and overall productivity.'
            }
        ]
    },
    {
        title: 'Data Analytics & Business Intelligence',
        sections: [
            {
                sectionTitle: 'Data Analytics & Business Intelligence',
                content: 'We help organizations harness the power of data, providing insights for better decision-making through advanced analytics and reporting tools. By integrating AI-driven analytics, predictive modeling, and real-time dashboards, we enable businesses to uncover trends and optimize strategies. Our data solutions transform raw data into meaningful insights that drive competitive advantage.'
            }
        ]
    },
    {
        title: 'IT Project Management',
        sections: [
            {
                sectionTitle: 'IT Project Management',
                content: 'Our project managers oversee IT projects from start to finish, ensuring timely delivery, budget control, and alignment with business objectives. We follow structured methodologies to manage risks, streamline workflows, and maintain clear communication throughout the project lifecycle. With a focus on efficiency, we ensure successful project execution with measurable results.'
            }
        ]
    },
    {
        title: 'Digital Transformation Consulting',
        sections: [
            {
                sectionTitle: 'Digital Transformation Consulting',
                content: 'We support businesses in adopting modern technologies, automating processes, and enhancing digital capabilities to stay competitive. Our solutions include process reengineering, AI integration, and emerging technology adoption to drive innovation. By transforming digital operations, we help businesses enhance efficiency, improve customer experiences, and scale effectively.'
            }
        ]
    },
    {
        title: 'DevOps & Automation Consulting',
        sections: [
            {
                sectionTitle: 'DevOps & Automation Consulting',
                content: 'We assist in implementing DevOps practices, automating workflows, and improving software development efficiency. Our approach integrates continuous integration, deployment automation, and infrastructure monitoring to enhance collaboration and speed up releases. By streamlining development processes, we help businesses achieve faster, more reliable software delivery.'
            }
        ]
    },
    {
        title: 'IT Support & Maintenance Services',
        sections: [
            {
                sectionTitle: 'IT Support & Maintenance Services',
                content: 'We offer ongoing IT support, monitoring, and management services to ensure your systems run smoothly and securely. Our proactive approach includes system updates, issue resolution, and performance optimization to minimize downtime. With round-the-clock support, we ensure businesses maintain operational efficiency and security at all times.'
            }
        ]
    }
];

const ITConsulting = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];
    return (
        <div className="bg-white dark:bg-[#10111a] min-h-screen text-gray-900 dark:text-gray-100">
            <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">IT Consulting Services</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Expert Guidance:</strong> Experienced consultants with deep technical knowledge.</li>
                        <li><strong>Tailored Solutions:</strong> Strategies customized to your business needs.</li>
                        <li><strong>Cost-Effective:</strong> Optimize IT investments for maximum ROI.</li>
                        <li><strong>End-to-End Support:</strong> From planning to implementation and beyond.</li>
                    </ul>
                    <p className="text-gray-600">Let Intekbit Solutions Pvt. Ltd. help you turn technology challenges into business opportunities.</p>
                    <h3 className="text-lg font-semibold text-blue-600">Our IT Consulting Services Include:</h3>
                </div>
                <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                    <img src="/Assets/internal-consulting.webp" alt="IT Consulting" className="w-64 h-48 object-cover rounded-lg shadow" />
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
                <div className="bg-blue-50 rounded p-4 shadow-inner">
                    <h3 className="text-lg font-bold text-blue-700 mb-2">{activeService.sections[0].sectionTitle}</h3>
                    <p className="text-gray-700">{activeService.sections[0].content}</p>
                </div>
            </section>
        </div>
    );
};

export default ITConsulting;
