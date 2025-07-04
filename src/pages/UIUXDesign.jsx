import React, { useState } from 'react';

const servicesData = [
    {
        title: 'User Research & Analysis',
        sections: [
            {
                img: '/Assets/internal-assets/UIUX-Typeform-Google-Forms-itp.webp',
                sectionTitle: 'Google Forms and Typeform',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we offer Google Forms and Typeform integration services to streamline data collection and enhance user engagement. Google Forms provides a simple, efficient way to create surveys, feedback forms, and registrations with seamless Google Workspace integration. For a more interactive and dynamic experience, Typeform offers visually engaging, conversational forms that boost response rates. Whether you need basic data collection or advanced, user-friendly forms, INTEKBIT Solutions delivers customized solutions to meet your business needs.'
            },
            {
                img: '/Assets/internal-assets/UIUX-notion-itp.webp',
                sectionTitle: 'Notion',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we offer Notion setup and customization services to help businesses streamline workflow, documentation, and collaboration. Notion is a powerful all-in-one workspace for managing projects, databases, notes, and team coordination. We customize Notion to fit your business needs, creating structured dashboards, automated workflows, and organized knowledge bases. Whether you need a simple task manager or a fully integrated company workspace, INTEKBIT Solutions delivers tailored Notion solutions to enhance productivity and efficiency.'
            }
        ]
    },
    {
        title: 'Wireframing & Prototyping',
        sections: [
            {
                img: '/Assets/internal-assets/UIUX-figma-itp.webp',
                sectionTitle: 'Figma',
                content: 'A cloud based design and prototyping tool that enables seamless collaboration. With real-time editing, vector networks and interactive prototypes, Figma simplifies UI/UX design. At Intekbit Solutions, we use Figma to create intuitive wireframes and prototypes that enhance user experience.'
            },
            {
                img: '/Assets/internal-assets/UIUX-adobe-xd-itp.webp',
                sectionTitle: 'Adobe XD',
                content: 'A powerful UI/UX design tool that offers vector-based design, interactive prototyping, and seamless integration with other Adobe products. With features like voice prototyping and auto-animate, Adobe XD brings designs to life. We use it at Intekbit Solutions to craft high-fidelity prototypes that improve user engagement.'
            }
        ]
    },
    {
        title: 'Usability Testing & Feedback',
        sections: [
            {
                img: '/Assets/internal-assets/UIUX-lighthouse-itp.webp',
                sectionTitle: 'Lighthouse (Chrome DevTools)',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we use Lighthouse, an open-source tool in Chrome DevTools, to analyze and optimize website performance, SEO, accessibility, and best practices. By running comprehensive audits, we identify and resolve issues affecting load times, mobile responsiveness, and overall user experience. Our Lighthouse optimization services ensure your website meets modern web standards, improving rankings and user engagement.'
            },
            {
                img: '/Assets/internal-assets/UIUX-wave-itp.webp',
                sectionTitle: 'WAVE Web Accessibility Tool',
                content: 'Ensuring web accessibility is crucial, and at INTEKBIT Solutions Pvt. Ltd., we leverage the WAVE Web Accessibility Tool to make websites inclusive and compliant with WCAG standards. WAVE helps detect accessibility barriers such as missing alt text, color contrast issues, and structural inconsistencies. Our accessibility optimization services enhance usability for all users, including those with disabilities, ensuring your digital presence is compliant and user-friendly.'
            },
            {
                img: '/Assets/internal-assets/UIUX-google-optimize-itp.webp',
                sectionTitle: 'Google Optimize',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we use Google Optimize to enhance website performance through A/B testing and personalization. By experimenting with different layouts, content, and user flows, we identify what works best for your audience. Our Google Optimize services help businesses improve conversion rates, user engagement, and overall site effectiveness with data-driven insights and real-time adjustments.'
            }
        ]
    }
];

const UIUXDesign = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];
    return (
        <div className="bg-white min-h-screen text-gray-900">
            {/* Intro Section */}
            <section className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto py-12 px-4 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">UI-UX Design</h2>
                    <p className="text-gray-700 mb-2">In a world where first impressions matter, a seamless user experience can set your business apart. Our UI/UX services blend research, creativity, and technology to craft visually stunning, user-friendly, and conversion-driven digital products. Whether you're launching a new app or revamping an existing website, we ensure an intuitive flow, accessible design, and cutting-edge interactivity. From in-depth user research to pixel-perfect prototypes and rigorous usability testing, we create experiences that not only look amazing but feel effortless to use. Elevate your brand with designs that captivate and convert—let’s build something extraordinary together!</p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="/Assets/internal-UIUX.webp" alt="UI-UX Design" className="rounded-lg shadow-lg max-h-72" />
                </div>
            </section>
            {/* Tabs */}
            <section className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex gap-4 mb-6 flex-wrap">
                    {servicesData.map((item, idx) => (
                        <button
                            key={item.title}
                            className={`px-4 py-2 rounded font-semibold border ${activeIndex === idx ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'} transition`}
                            onClick={() => setActiveIndex(idx)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                {/* Dynamic Content */}
                <div className="space-y-10">
                    {activeService.sections.map((section, i) => (
                        <div key={section.sectionTitle} className={`flex flex-col md:flex-row ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-8 bg-blue-50 rounded-lg p-6 shadow`}>
                            <img src={section.img} alt={section.sectionTitle} className="w-40 h-40 object-contain rounded-lg shadow" />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">{section.sectionTitle}</h3>
                                <p className="text-gray-700">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UIUXDesign;
