import React, { useState } from 'react';

const servicesData = [
	{
		title: 'Cloud platforms',
		sections: [
			{
				img: '/Assets/internal-assets/cloud-AWS-itp-1.webp',
				sectionTitle: 'Amazon Web Services (AWS)',
				content:
					'Amazon Web Services (AWS) is a leading cloud platform that offers a wide range of services, including computing power, storage, databases, networking, and security. It helps businesses scale efficiently, reduce costs, and improve performance through flexible, on-demand cloud solutions. At intekbit solutions Pvt. Ltd., we use AWS to deliver secure, scalable, and cost-effective cloud services tailored to meet the unique needs of businesses across various industries.',
			},
			{
				img: '/Assets/internal-assets/cloud-azure.webp',
				sectionTitle: 'Microsoft Azure',
				content:
					'Microsoft Azure is a comprehensive cloud platform that provides a wide range of services, including virtual machines, databases, storage, networking, and AI tools. It enables businesses to build, deploy, and manage applications through Microsoft’s global network of data centers. At Intekbit Solutions Pvt. Ltd., we leverage Azure to deliver secure, scalable, and efficient cloud solutions for application development, data management, and enterprise-grade IT infrastructure.',
			},
			{
				img: '/Assets/internal-assets/cloud-gcp-itp.webp',
				sectionTitle: 'Google Cloud Platform (GCP)',
				content:
					'Google Cloud Platform (GCP) is a powerful cloud computing service that offers a variety of tools for computing, data storage, machine learning, and application development. It enables businesses to build, deploy, and scale applications on a secure and reliable infrastructure. At Intekbit Solutions Pvt. Ltd., we utilize GCP to deliver high-performance, scalable, and cost-effective cloud solutions, helping businesses manage data, improve workflows, and accelerate digital transformation.',
			},
			{
				img: '/Assets/internal-assets/cloud-digi-ocean-itp.webp',
				sectionTitle: 'DigitalOcean',
				content:
					'DigitalOcean is a cloud infrastructure platform designed for developers and businesses to deploy, manage, and scale applications with ease. It offers simple and cost-effective solutions like virtual servers (Droplets), managed databases, storage, and networking tools. At Intekbit Solutions Pvt. Ltd., we use DigitalOcean to provide reliable, scalable, and budget-friendly cloud services, perfect for startups, small businesses, and growing enterprises looking for efficient cloud hosting solutions.',
			},
		],
	},
	{
		title: 'Containerization & Orchestration',
		sections: [
			{
				img: '/Assets/internal-assets/cloud-docker-itp.webp',
				sectionTitle: 'Docker',
				content:
					'Docker is a containerization platform that allows developers to package applications and their dependencies into lightweight, portable containers. This ensures that applications run consistently across different environments, from development to production. At Intekbit Solutions Pvt. Ltd., we use Docker to streamline application deployment, improve scalability, and enhance efficiency, making it easier to manage complex projects with faster development cycles and reliable performance.',
			},
			{
				img: '/Assets/internal-assets/cloud-kubernetes-itp.webp',
				sectionTitle: 'Kubernetes',
				content:
					'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It helps manage clusters of containers efficiently, ensuring high availability, load balancing, and resource optimization. At Intekbit Solutions Pvt. Ltd., we use Kubernetes to streamline cloud operations, improve application reliability, and support seamless scaling for businesses of all sizes.',
			},
			{
				img: '/Assets/internal-assets/cloud-Amazon-ECS-itp.webp',
				sectionTitle: 'Amazon ECS (Elastic Container Service)',
				content:
					'Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications. It supports Docker containers and integrates seamlessly with other AWS services, providing high performance and security. At Intekbit Solutions Pvt. Ltd., we use Amazon ECS to build scalable, secure, and cost-efficient container-based applications, ensuring smooth operations and fast deployments for businesses across different industries.',
			},
			{
				img: '/Assets/internal-assets/cloud-amazon-eks.webp',
				sectionTitle: 'Amazon EKS (Elastic Kubernetes Service)',
				content:
					'Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service that simplifies the deployment, management, and scaling of containerized applications using Kubernetes on AWS. It provides secure, reliable, and scalable infrastructure with seamless integration to other AWS services. At Intekbit Solutions Pvt. Ltd., we use Amazon EKS to manage complex applications efficiently, ensuring high availability, robust security, and optimized performance for businesses leveraging cloud-native technologies.',
			},
			{
				img: '/Assets/internal-assets/cloud-gks-itp.webp',
				sectionTitle: 'Google Kubernetes Engine (GKE)',
				content:
					'Google Kubernetes Engine (GKE) is a managed Kubernetes service that enables businesses to deploy, manage, and scale containerized applications on Google Cloud. It provides automated scaling, load balancing, and security features, ensuring high performance and reliability. At Intekbit Solutions Pvt. Ltd., we use GKE to build scalable, resilient, and cloud-native applications, helping businesses streamline operations and optimize cloud resources efficiently.',
			},
		],
	},
	{
		title: 'DevOps & CI/CD Tools',
		sections: [
			{
				img: '/Assets/internal-assets/cloud-jenkins-itp.webp',
				sectionTitle: 'Jenkins',
				content:
					'Jenkins is an open-source automation server that helps automate the building, testing, and deployment of applications. It supports continuous integration and continuous delivery (CI/CD), allowing faster development cycles and efficient project management. At Intekbit Solutions Pvt. Ltd., we use Jenkins to streamline workflows, improve code quality, and ensure smooth software releases.',
			},
			{
				img: '/Assets/internal-assets/cloud-git-itp.webp',
				sectionTitle: 'GitHub Actions',
				content:
					'GitHub Actions is a CI/CD tool integrated with GitHub that allows automation of workflows directly from code repositories. It supports building, testing, and deploying code automatically when changes are made. We use GitHub Actions to automate development processes, making deployment faster and more reliable for cloud and web applications.',
			},
			{
				img: '/Assets/internal-assets/cloud-cicd.webp',
				sectionTitle: 'GitLab CI/CD',
				content:
					'GitLab CI/CD is a built-in continuous integration and delivery tool within GitLab. It automates the software development lifecycle, from code integration to deployment. At Intekbit Solutions Pvt. Ltd., we rely on GitLab CI/CD to manage code pipelines, ensure smooth code delivery, and maintain high code quality standards.',
			},
			{
				img: '/Assets/internal-assets/cloud-aws-codepipeline-itp.webp',
				sectionTitle: 'AWS CodePipeline',
				content:
					'AWS CodePipeline is a fully managed CI/CD service that automates the process of building, testing, and deploying applications on AWS. It enables faster and more consistent software releases. We use AWS CodePipeline to automate deployment workflows, integrate with AWS services, and ensure secure, scalable application releases.',
			},
			{
				img: '/Assets/internal-assets/cloud-terraform-itp.webp',
				sectionTitle: 'Terraform',
				content:
					'Terraform is an open-source infrastructure as code (IaC) tool that allows us to define and manage cloud infrastructure using declarative configuration files. It supports multi-cloud environments and helps automate infrastructure provisioning. At Intekbit Solutions Pvt. Ltd., we use Terraform to manage cloud resources efficiently, ensuring consistency and reducing manual errors.',
			},
			{
				img: '/Assets/internal-assets/cloud-ansible-itp.webp',
				sectionTitle: 'Ansible',
				content:
					'Ansible is an open-source automation tool used for configuration management, application deployment, and task automation. It helps manage complex IT environments with simple, human-readable code. We utilize Ansible to automate server configurations, streamline deployments, and maintain system reliability across different environments.',
			},
		],
	},
	{
		title: 'Security & Compliance',
		sections: [
			{
				img: '/Assets/internal-assets/cloud-aws-iam-itp.webp',
				sectionTitle: 'AWS IAM (Identity and Access Management)',
				content:
					'AWS IAM allows secure management of access to AWS services and resources. It enables the creation of user roles, policies, and permissions to control who can access specific resources. At Intekbit Solutions Pvt. Ltd., we use AWS IAM to ensure secure access control, protecting sensitive data and maintaining strict security standards across our cloud environments.',
			},
			{
				img: '/Assets/internal-assets/cloud-aws-sheild-itp.webp',
				sectionTitle: 'AWS Shield (DDoS Protection)',
				content:
					'AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. It offers real-time threat detection and automatic response to mitigate DDoS attacks. We utilize AWS Shield to enhance the resilience of our cloud applications, ensuring continuous uptime and protection against potential cyber threats.',
			},
			{
				img: '/Assets/internal-assets/cloud-kms-itp.webp',
				sectionTitle: 'AWS Key Management Service (KMS)',
				content:
					'AWS KMS is a managed service for creating, managing, and controlling encryption keys used to secure data. It integrates seamlessly with other AWS services to provide robust encryption for sensitive information. At Intekbit Solutions Pvt. Ltd., we rely on AWS KMS to protect customer data through strong encryption practices, ensuring compliance with security regulations.',
			},
			{
				img: '/Assets/internal-assets/cloud-cloudflare-itp.webp',
				sectionTitle: 'Cloudflare Security',
				content:
					'Cloudflare Security provides advanced protection for websites and applications, including Web Application Firewall (WAF), DDoS mitigation, SSL/TLS encryption, and secure DNS. We use Cloudflare to secure web applications from cyber threats, improve website performance, and maintain secure, fast, and reliable online services for our clients.',
			},
		],
	},
];

const CloudServices = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeService = servicesData[activeIndex];
	return (
		<div className="bg-white dark:bg-[#10111a] min-h-screen text-gray-900 dark:text-gray-100">
			<section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
				<div className="md:w-2/3 space-y-4">
					<h2 className="text-2xl font-bold text-blue-700 mb-2">
						Cloud Computing Services
					</h2>
					<p className="text-gray-700">
						At intekbit solutions pvt. ltd., we offer reliable cloud services
						designed to help businesses scale, secure their data, and improve
						efficiency. Our cloud solutions are tailored to meet the diverse needs
						of businesses, whether you're looking to migrate to the cloud, optimize
						your existing infrastructure, or develop cloud-native applications.
					</p>
				</div>
				<div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
					<img
						src="/Assets/internal-cloud-services.webp"
						alt="Cloud Services"
						className="w-64 h-48 object-cover rounded-lg shadow"
					/>
				</div>
			</section>
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
				{/* Dynamic Content */}
				<div className="space-y-10">
					{activeService.sections.map((section, i) => (
						<div
							key={section.sectionTitle}
							className={`flex flex-col md:flex-row ${i % 2 === 0 ? '' : 'md:flex-row-reverse'
								} items-center gap-8 bg-blue-50 rounded-lg p-6 shadow`}
						>
							<img
								src={section.img}
								alt={section.sectionTitle}
								className="w-40 h-40 object-contain rounded-lg shadow"
							/>
							<div className="flex-1">
								<h3 className="text-xl font-bold mb-2">
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

export default CloudServices;
