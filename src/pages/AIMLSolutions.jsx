import React, { useState } from 'react';

const servicesData = [
	{
		title: 'Machine Learning',
		description:
			'At Intekbit Solutions Pvt. Ltd., we offer machine learning services that help businesses turn data into smart solutions. Our services include predictive analytics to forecast trends, natural language processing (NLP) for text and speech analysis, computer vision for image and video recognition, and recommendation systems to deliver personalized user experiences. We also specialize in anomaly detection for fraud prevention and process automation to improve efficiency. From data preparation to model deployment, we provide end-to-end support tailored to your specific business needs.',
		frameworks: [
			'TensorFlow',
			'PyTorch',
			'Scikit-learn',
			'Keras',
			'MXNet',
			'XGBoost',
			'LightGBM',
			'CatBoost',
			'H2O.ai',
		],
		libraries: [
			'NumPy',
			'Pandas',
			'Matplotlib',
			'Seaborn',
			'SciPy',
			'OpenCV',
			'NLTK',
			'SpaCy',
			'Statsmodels',
			'Gensim',
			'Theano',
		],
	},
	{
		title: 'Computer Vision',
		description:
			'At Intekbit Solutions Pvt. Ltd., we provide computer vision services that help businesses extract meaningful insights from images and videos. Our solutions include object detection to identify and track items in real-time, image classification for sorting and categorizing visual data, and facial recognition for secure authentication systems. We also offer optical character recognition (OCR) to convert printed or handwritten text into digital data, video analysis for surveillance and activity monitoring, and medical image processing to assist in diagnostics. Whether you need automation, security, or data analysis, our computer vision services are designed to deliver accurate and efficient results.',
		frameworks: [
			'MMDetection',
			'YOLO',
			'Detectron2',
			'TensorFlow',
			'PyTorch',
			'OpenCV',
		],
		libraries: [
			'Pillow',
			'Albumentations',
			'scikit-image',
			'dlib',
			'SimpleCV',
		],
	},
	// ...add more services as needed...
];

const AIMLSolutions = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className='bg-white min-h-screen text-gray-900'>
			<section className='flex flex-col md:flex-row items-center justify-between px-4 py-12 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8'>
				<div className='md:w-2/3 space-y-4'>
					<h2 className='text-3xl font-bold text-blue-700 mb-2'>
						Artificial Intelligence (AI)
					</h2>
					<p className='text-gray-700'>
						Artificial Intelligence (AI) is revolutionizing industries by enabling
						machines to learn, reason, and make decisions with minimal human
						intervention. AI encompasses a wide range of technologies, including
						machine learning, deep learning, computer vision, and natural language
						processing (NLP), allowing businesses to automate tasks, analyze
						complex data, and enhance decision-making processes. From personalized
						recommendations and intelligent chatbots to self-driving cars and
						advanced medical diagnostics, AI is transforming the way we interact
						with technology. By leveraging powerful frameworks and libraries,
						AI-driven solutions unlock new possibilities for efficiency,
						Innovation, and problem-solving across various domains.
					</p>
				</div>
				<div className='md:w-1/3 flex justify-center mt-6 md:mt-0'>
					<img
						src='/Assets/internal-AIML.webp'
						alt='AIML-cover'
						className='w-64 h-48 object-cover rounded-lg shadow'
					/>
				</div>
			</section>
			<section className='max-w-5xl mx-auto bg-white rounded-lg shadow p-6'>
				<div className='flex flex-wrap gap-2 mb-6 justify-center'>
					{servicesData.map((item, idx) => (
						<button
							key={item.title}
							className={`px-4 py-2 rounded transition font-medium border border-blue-500 focus:outline-none ${
								activeIndex === idx
									? 'bg-blue-600 text-white'
									: 'bg-white text-blue-700 hover:bg-blue-100'
							}`}
							onClick={() => setActiveIndex(idx)}
						>
							{item.title}
						</button>
					))}
				</div>
				<div className='bg-blue-50 rounded p-6 shadow-inner'>
					<h3 className='text-xl font-bold text-blue-700 mb-2'>
						{servicesData[activeIndex].title}
					</h3>
					<p className='text-gray-700 mb-4'>
						{servicesData[activeIndex].description}
					</p>
					<div className='flex flex-col md:flex-row gap-8'>
						<div className='flex-1'>
							<h4 className='font-semibold text-blue-600 mb-1'>Frameworks</h4>
							<ul className='list-disc list-inside text-gray-700'>
								{servicesData[activeIndex].frameworks.map((fw, i) => (
									<li key={i}>{fw}</li>
								))}
							</ul>
						</div>
						<div className='flex-1'>
							<h4 className='font-semibold text-blue-600 mb-1'>Libraries</h4>
							<ul className='list-disc list-inside text-gray-700'>
								{servicesData[activeIndex].libraries.map((lib, i) => (
									<li key={i}>{lib}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AIMLSolutions;

