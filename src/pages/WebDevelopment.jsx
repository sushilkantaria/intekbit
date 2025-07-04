import React, { useState } from 'react';

const servicesData = [
    {
        title: 'Frontend',
        sections: [
            {
                img: '/Assets/internal-assets/web-react.webp',
                sectionTitle: 'React.js',
                content: 'A powerful JavaScript library for building fast, interactive, and scalable web applications. With its component-based architecture and Virtual DOM, React enhances performance and reusability. At Intekbit Solutions Pvt. Ltd., we use React.js to develop dynamic and user-friendly web applications that offer seamless experiences.'
            },
            {
                img: '/Assets/internal-assets/web-angular.webp',
                sectionTitle: 'Angular Development',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we offer Angular development services to build dynamic, high-performance web applications. With a powerful component-based architecture, Angular enables seamless scalability, maintainability, and fast user experiences. Our expertise ensures secure, interactive, and responsive frontends, making it ideal for enterprise-grade applications. Whether you need a complex dashboard, a single-page application, or a feature-rich web platform, INTEKBIT Solutions delivers cutting-edge Angular solutions tailored to your business needs.'
            },
            {
                img: '/Assets/internal-assets/web-html.webp',
                sectionTitle: 'HTML, CSS, JavaScript',
                content: 'The fundamental building blocks of web development. HTML structures content, CSS styles the UI by leveraging frameworks like Tailwind CSS and Bootstrap , and JavaScript adds interactivity, ensuring an engaging experience. At Intekbit Solutions, we utilize these core technologies to craft pixel-perfect, responsive, and interactive web pages.'
            }
        ]
    },
    {
        title: 'Backend',
        sections: [
            {
                img: '/Assets/internal-assets/web-node.webp',
                sectionTitle: 'Node.js(Express.js, NestJS)',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we provide Node.js Development Services for high-performance, real-time web applications. With Express.js, we build lightweight and efficient APIs, while NestJS offers a modular and scalable architecture for enterprise-grade solutions. Our expertise in Node.js ensures seamless server-side development, enabling fast, secure, and efficient backend services tailored to your business needs.'
            },
            {
                img: '/Assets/internal-assets/web-flask-django.webp',
                sectionTitle: 'Django and Flask',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we offer expert backend development services using Flask and Django, two powerful Python frameworks. Our Flask solutions are lightweight and flexible, ideal for building scalable web applications, microservices, and RESTful APIs with rapid prototyping. For more complex, data-driven platforms, our Django solutions provide built-in security, authentication, ORM, and an intuitive admin panel, ensuring seamless backend management and scalability. Whether you need a dynamic API or a robust enterprise application, INTEKBIT Solutions delivers tailored backend solutions to drive your business forward.'
            }
        ]
    },
    {
        title: 'Database',
        sections: [
            {
                img: '/Assets/internal-assets/web-mongo.webp',
                sectionTitle: 'MongoDB',
                content: 'A flexible and scalable NoSQL database that stores data in JSON-like documents. Its schema-less structure makes it ideal for handling dynamic and unstructured data. At Intekbit Solutions, we use MongoDB for real-time applications, big data solutions, and cloud-based services.'
            },
            {
                img: '/Assets/internal-assets/web-PostgreSQL-MySQL.webp',
                sectionTitle: 'PostgreSQL and MySQL',
                content: 'At INTEKBIT Solutions Pvt. Ltd., we offer database management services using MySQL and PostgreSQL, two powerful relational database systems. Our MySQL solutions ensure high performance, security, and ACID compliance, making them ideal for web applications and e-commerce platforms. For more complex, data-intensive projects, our PostgreSQL solutions provide advanced querying, data integrity, and scalability, perfect for enterprise applications. Whether you need a robust, secure database for transactional systems or a scalable solution for large datasets, INTEKBIT Solutions delivers efficient and reliable data management tailored to your business needs.'
            }
        ]
    }
];

const WebDevelopment = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];
    return (
        <div className="bg-white min-h-screen text-gray-900">
            {/* Intro Section */}
            <section className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto py-12 px-4 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Web Development</h2>
                    <p className="text-gray-700 mb-2">We offer high-performance, secure, and visually stunning websites tailored to your brand's needs. Using cutting-edge technologies like React, Next.js, Node.js, and MongoDB, we ensure fast, scalable, and mobile-friendly solutions that enhance user experience and drive business growth.</p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src="/Assets/internal-webdevelopment.webp" alt="Our Services" className="rounded-lg shadow-lg max-h-72" />
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

export default WebDevelopment;
