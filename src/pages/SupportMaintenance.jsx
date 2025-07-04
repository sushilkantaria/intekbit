import React, { useState } from 'react';

const servicesData = [
    {
        title: 'Application Support & Maintenance',
        sections: [
            {
                sectionTitle: 'Application Support & Maintenance',
                content: 'We help businesses create IT strategies aligned with their goals, ensuring technology investments deliver maximum value. Our team offers proactive monitoring, issue resolution, and performance enhancements to minimize downtime. We provide regular updates, bug fixes, and optimizations to keep your applications running at peak efficiency.'
            }
        ]
    },
    {
        title: 'Software Maintenance',
        sections: [
            {
                sectionTitle: 'Software Maintenance',
                content: 'We implement regular security patches, vulnerability assessments, and real-time threat monitoring to protect your systems from cyber threats. Our team ensures software stability, resolves compatibility issues, and enhances system performance. Through continuous updates and proactive maintenance, we safeguard your software against evolving security risks.'
            }
        ]
    },
    {
        title: 'IT Infrastructure Support',
        sections: [
            {
                sectionTitle: 'IT Infrastructure Support',
                content: 'We monitor and manage your servers, networks, and cloud environments to ensure high availability, security, and optimal performance. Our infrastructure experts proactively detect issues, implement fixes, and optimize resources to prevent downtime. By maintaining a stable IT ecosystem, we enhance system reliability and business continuity.'
            }
        ]
    },
    {
        title: 'Database Support',
        sections: [
            {
                sectionTitle: 'Database Support',
                content: 'We manage and maintain databases, ensuring data integrity, performance optimization, and secure backups. Our experts conduct routine health checks, optimize queries, and implement security measures to prevent data breaches. With automated backup solutions, we ensure data recovery and business continuity in case of failures.'
            }
        ]
    },
    {
        title: 'Cloud Support & Maintenance',
        sections: [
            {
                sectionTitle: 'Cloud Support & Maintenance',
                content: 'We provide continuous monitoring, resource optimization, and cost management for cloud-based applications and services. Our team ensures seamless cloud operations by automating scaling, optimizing workloads, and maintaining security compliance. By leveraging cloud efficiency, we help businesses improve agility and reduce operational costs.'
            }
        ]
    },
    {
        title: 'System Upgrades & Migration',
        sections: [
            {
                sectionTitle: 'System Upgrades & Migration',
                content: 'We handle system upgrades, migrations, and technology transitions with minimal disruption to your business operations. Our process includes risk assessment, compatibility testing, and smooth implementation to ensure a hassle-free transition. With strategic planning and execution, we help businesses adopt modern technologies efficiently.'
            }
        ]
    },
    {
        title: 'Performance Monitoring & Optimization',
        sections: [
            {
                sectionTitle: 'Performance Monitoring & Optimization',
                content: 'We track system performance, identify bottlenecks, and implement improvements to maintain efficiency and reliability. Our optimization strategies focus on fine-tuning system processes, enhancing load balancing, and reducing response times. By continuously monitoring key metrics, we ensure peak system performance and user satisfaction.'
            }
        ]
    },
    {
        title: 'Disaster Recovery & Backup Solutions',
        sections: [
            {
                sectionTitle: 'Disaster Recovery & Backup Solutions',
                content: 'We set up automated backups and disaster recovery plans to ensure your data is safe and can be restored quickly in case of unexpected events. Our team implements failover solutions, risk assessments, and real-time monitoring to prevent data loss. By ensuring rapid recovery, we help businesses maintain operational continuity during disruptions.'
            }
        ]
    },
    {
        title: 'IT Support & Maintenance Services',
        sections: [
            {
                sectionTitle: 'IT Support & Maintenance Services',
                content: 'We offer ongoing IT support, monitoring, and management services to ensure your systems run smoothly and securely. Our dedicated support team provides troubleshooting, system updates, and preventive maintenance to minimize technical disruptions. With round-the-clock assistance, we keep your IT environment stable and efficient.'
            }
        ]
    }
];

const SupportMaintenance = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];
    return (
        <div className="bg-white dark:bg-[#10111a] min-h-screen text-gray-900 dark:text-gray-100">
            <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Support and Maintenance Service</h2>
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
                    <img src="/Assets/internal-support&maintainence.webp" alt="support&maintainence" className="w-64 h-48 object-cover rounded-lg shadow" />
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

export default SupportMaintenance;
