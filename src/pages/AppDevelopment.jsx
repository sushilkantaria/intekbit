import React, { useState } from 'react';

const servicesData = [
	{
		title: 'Frontend (UI/UX Development)',
		sections: [
			{
				img: '/Assets/internal-assets/app-react-native-itp.webp',
				sectionTitle: 'React Native',
				content:
					'A cross-platform framework developed by Meta that enables the creation of high-performance mobile apps using JavaScript and React. With a single codebase for both iOS and Android, React Native ensures cost-effective and efficient development. At Intekbit Solutions Pvt. Ltd., we leverage React Native to build fast, scalable, and seamless mobile applications with a native-like experience.',
			},
			{
				img: '/Assets/internal-assets/app-xml-itp.webp',
				sectionTitle: 'Android XML',
				content:
					'A markup language used for designing UI layouts in Android applications. It provides a structured and readable format for defining elements, attributes, and styles. At Intekbit Solutions, we use XML to create responsive and visually appealing mobile app interfaces.',
			},
		],
	},
	{
		title: 'Backend (Server-Side Development)',
		sections: [
			{
				img: '/Assets/internal-assets/app-node-express-js-itp.webp',
				sectionTitle: 'Node.js and Express.js',
				content:
					'At INTEKBIT Solutions Pvt. Ltd., we offer Node.js and Express.js development services to build fast, scalable, and secure backend solutions. With Node.js, we develop high-performance, event-driven applications that handle real-time data efficiently, while Express.js provides a lightweight framework for creating robust APIs and web services. Our expertise ensures seamless backend integration for mobile and web applications, delivering responsive and efficient server-side solutions tailored to your business needs.',
			},
			{
				img: '/Assets/internal-assets/web-flask-django.webp',
				sectionTitle: 'Django and Flask',
				content:
					'At INTEKBIT Solutions Pvt. Ltd., we offer expert backend development services using Flask and Django, two powerful Python frameworks. Our Flask solutions are lightweight and flexible, ideal for building scalable web applications, microservices, and RESTful APIs with rapid prototyping. For more complex, data-driven platforms, our Django solutions provide built-in security, authentication, ORM, and an intuitive admin panel, ensuring seamless backend management and scalability. Whether you need a dynamic API or a robust enterprise application, INTEKBIT Solutions delivers tailored backend solutions to drive your business forward.',
			},
		],
	},
	{
		title: 'Databases',
		sections: [
			{
				img: '/Assets/internal-assets/app-sqlite-itp.webp',
				sectionTitle: 'SQLite',
				content:
					'A lightweight, serverless database ideal for mobile applications requiring offline functionality. With its minimal setup and high performance, SQLite is perfect for storing app data locally. At Intekbit Solutions, we use SQLite to build responsive and efficient offline-first applications.',
			},
			{
				img: '/Assets/internal-assets/web-mongo.webp',
				sectionTitle: 'MongoDB',
				content:
					'A flexible, document-based NoSQL database designed for handling large-scale applications. It enables seamless data storage and retrieval, making it ideal for dynamic mobile apps. At Intekbit Solutions, we use MongoDB to develop scalable and efficient mobile applications with flexible data management.',
			},
			{
				img: '/Assets/internal-assets/web-PostgreSQL-MySQL.webp',
				sectionTitle: 'PostgreSQL and MySQL',
				content:
					'At INTEKBIT Solutions Pvt. Ltd., we offer database management services using MySQL and PostgreSQL, two powerful relational database systems. Our MySQL solutions ensure high performance, security, and ACID compliance, making them ideal for web applications and e-commerce platforms. For more complex, data-intensive projects, our PostgreSQL solutions provide advanced querying, data integrity, and scalability, perfect for enterprise applications. Whether you need a robust, secure database for transactional systems or a scalable solution for large datasets, INTEKBIT Solutions delivers efficient and reliable data management tailored to your business needs.',
			},
		],
	},
	{
		title: 'Programming Languages',
		sections: [
			{
				img: '/Assets/internal-assets/app-java-itp.webp',
				sectionTitle: 'Java',
				content:
					'A robust, object-oriented programming language widely used for Android development. Java ensures security, stability, and high performance. At Intekbit Solutions, we use Java to build powerful and feature-rich Android applications.',
			},
			{
				img: '/Assets/internal-assets/app-js-itp.webp',
				sectionTitle: 'JavaScript',
				content:
					'A dynamic and versatile language used in frontend and backend development. JavaScript enables the creation of interactive and high-performance applications. At Intekbit Solutions, we leverage JavaScript to enhance user engagement and streamline mobile app functionality.',
			},
			{
				img: '/Assets/internal-assets/app-python-itp.webp',
				sectionTitle: 'Python',
				content:
					'A popular programming language known for its simplicity, efficiency, and versatility. Python is widely used for backend services, AI-driven features, and data analysis in mobile applications. At Intekbit Solutions, we use Python to integrate machine learning, automation, and scalable backends into mobile apps.',
			},
		],
	},
	{
		title: 'APIs and Cloud Services',
		sections: [
			{
				img: '/Assets/internal-assets/app-graphql-itp.webp',
				sectionTitle: 'RESTful APIs and GraphQL',
				content:
					'At INTEKBIT Solutions Pvt. Ltd., we offer RESTful API and GraphQL development services to power seamless data exchange between applications. Our RESTful APIs provide a structured, scalable, and secure way to interact with backend systems, ensuring high performance and reliability. For more flexible and efficient data retrieval, our GraphQL solutions allow precise querying, reducing over-fetching and improving response times. Whether you need a traditional REST architecture or a modern GraphQL approach, INTEKBIT Solutions delivers optimized API solutions tailored to your business needs.',
			},
			{
				img: '/Assets/internal-assets/app-GoogleMapApi-itp.webp',
				sectionTitle: 'Google Maps API',
				content:
					'A powerful API that enables location-based services, real-time navigation, and geospatial data integration. Google Maps API enhances mobile applications with interactive maps and tracking features. At Intekbit Solutions, we use Google Maps API to develop location-aware applications, from ride-hailing services to delivery tracking systems.',
			},
			{
				img: '/Assets/internal-assets/app-AWS-itp.webp',
				sectionTitle: 'AWS/Azure/Google Cloud',
				content:
					'A leading cloud platform that offers scalable computing, storage, and networking solutions. AWS ensures cost-effective, high-performance cloud-based applications. At Intekbit Solutions, we use AWS to host, deploy, and scale mobile applications with enterprise-grade security.',
			},
		],
	},
];

const AppDevelopment = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="bg-white min-h-screen text-gray-900">
			{/* Intro Section */}
			<section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
				<div className="md:w-2/3 space-y-4">
					<h2 className="text-2xl font-bold text-blue-700 mb-2">
						Application Development
					</h2>
					<p className="text-gray-700">
						We develop high-performance, secure, and feature-rich mobile
						applications tailored to your business needs. Using advanced
						technologies like Flutter, React Native, Swift, and Kotlin, we create
						fast, scalable, and user-friendly apps that deliver seamless
						experiences across iOS and Android. Our development process ensures
						smooth functionality, intuitive design, and optimized performance to
						enhance engagement and drive growth. Whether it's a startup MVP or an
						enterprise-grade application, we build robust solutions that stand out
						in the competitive app market. From UI/UX to backend integration, we
						ensure a flawless experience that keeps users engaged and businesses
						thriving. At Intekbit Solutions Pvt. Ltd., we use the latest
						technologies, robust backend architectures, and scalable cloud services
						to develop high-performance, secure, and user-friendly mobile
						applications. Whether you need a cross-platform app, a real-time
						database solution, or a scalable cloud-powered application, we deliver
						solutions that drive success!
					</p>
				</div>
				<div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
					<img
						src="/Assets/internal-appdevelopmenet.webp"
						alt="App Development"
						className="w-64 h-48 object-cover rounded-lg shadow"
					/>
				</div>
			</section>
			{/* Tab Buttons */}
			<section className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
				<div className="flex flex-wrap gap-2 mb-6">
					{servicesData.map((item, idx) => (
						<button
							key={item.title}
							className={`px-4 py-2 rounded transition font-medium border border-blue-500 focus:outline-none ${activeIndex === idx
									? 'bg-blue-600 text-white'
									: 'bg-white text-blue-700 hover:bg-blue-100'
								}`}
							onClick={() => setActiveIndex(idx)}
						>
							{item.title}
						</button>
					))}
				</div>
				{/* Content Section */}
				<div className="space-y-8">
					{servicesData[activeIndex].sections.map((section, i) => (
						<div
							key={i}
							className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'
								}`}
						>
							<img
								src={section.img}
								alt={section.sectionTitle}
								className="w-40 h-40 object-cover rounded-lg shadow"
							/>
							<div>
								<h3 className="text-lg font-bold text-blue-700 mb-2">
									{section.sectionTitle}
								</h3>
								<p className="text-gray-700">{section.content}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default AppDevelopment;
