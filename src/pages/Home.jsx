import React, { useState, useEffect } from 'react';

const Home = () => {
    const [activeTab, setActiveTab] = useState('mission');
    const [currentService, setCurrentService] = useState('web');
    const [activeTechnology, setActiveTechnology] = useState('webdevelopment');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [processInfo, setProcessInfo] = useState({
        title: 'Our Process',
        description: 'We conduct a thorough examination of your business requirements, including competitive analysis, to formulate a strategic roadmap while defining the design\'s aesthetic objectives.',
        icon: '/Assets/home-process-process.gif'
    });

    const services = {
        web: {
            title: 'Web Development',
            description: 'Our web development services are designed to help businesses establish a strong online presence. We specialize in creating responsive, visually appealing, and performance-optimized websites tailored to your unique needs. Whether you need a sleek corporate website, a content-rich blog, or a complex e-commerce platform.',
            technologies: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'SQL', 'HTML'],
            buttonLink: 'Web-Development.html'
        },
        ai: {
            title: 'AI & ML Solutions',
            description: 'Our AI and ML solutions enable businesses to harness the power of data to make smarter decisions and automate complex processes. We develop custom models and algorithms for a wide range of applications, from predictive analytics and natural language processing to image recognition and automation.',
            technologies: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'NLP Libraries', 'OpenCV'],
            buttonLink: 'AI-ML-Solutions.html'
        },
        mobile: {
            title: 'Mobile App Development',
            description: 'We specialize in creating high-performance mobile applications that provide a seamless user experience. Our expertise spans both Android and iOS platforms, utilizing cutting-edge technologies to build feature-rich apps tailored to your requirements. From intuitive user interfaces to robust backends, we ensure your app stands out.',
            technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'Java'],
            buttonLink: 'App-Development.html'
        },
        it_consulting: {
            title: 'IT Consulting',
            description: 'Our IT consulting services provide expert guidance to help businesses optimize their IT infrastructure and strategies. Whether you are looking to adopt cloud technologies, enhance cybersecurity measures, or implement new software systems, our team provides tailored solutions to meet your unique needs.',
            technologies: ['Cybersecurity', 'Cloud Management', 'Business Intelligence', 'Infrastructure Management', 'CRM & ERP Solutions', 'Software Development'],
            buttonLink: 'IT-Consulting.html'
        },
        data: {
            title: 'Data Services',
            description: 'Our comprehensive data services help businesses unlock the full potential of their data. From database design and management to advanced analytics and visualization, we provide solutions that drive informed decision-making. Our expertise spans big data platforms, business intelligence tools, and data integration technique.',
            technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Hadoop', 'Power BI', 'Tableau'],
            buttonLink: 'Data-Services.html'
        },
        software: {
            title: 'Software Development',
            description: 'We deliver custom software development solutions that address your unique business challenges. Our experienced team builds scalable, reliable, and user-friendly software tailored to your specific needs, whether it\'s a desktop application, a SaaS platform, or enterprise software. With a focus on quality, innovation, and efficiency.',
            technologies: ['Java', 'C#', 'Python', '.NET', 'Spring Boot', 'Git'],
            buttonLink: 'Software-Development.html'
        },
    };

    const technologies = {
        webdevelopment: [
            { name: "React", icon: "/Assets/home-tech-react.webp" },
            { name: "Angular", icon: "/Assets/home-tech-angular.webp" },
            { name: "Node.js", icon: "/Assets/home-tech-node.webp" },
            { name: "Wordpress", icon: "/Assets/home-tech-wordpress.webp" },
            { name: "Javascript", icon: "/Assets/home-tech-javascript.webp" },
        ],
        appdevelopment: [
            { name: "React Native", icon: "/Assets/home-tech-react.webp" },
            { name: "Node.js", icon: "/Assets/home-tech-node.webp" },
            { name: "SQLite", icon: "/Assets/home-tech-sqlite.webp" },
            { name: "Android Studio", icon: "/Assets/home-tech-androidstudio.webp" },
            { name: "Java", icon: "/Assets/home-tech-java.webp" },
        ],
        ai: [
            { name: "Python", icon: "/Assets/home-tech-python.webp" },
            { name: "Tenserflow", icon: "/Assets/home-tech-tenserflow.webp" },
            { name: "OpenCV", icon: "/Assets/home-tech-openCV.webp" },
            { name: "Keras", icon: "/Assets/home-tech-keras.webp" },
            { name: "SciPy", icon: "/Assets/home-tech-scipy.webp" },
        ],
        cloud: [
            { name: "Google Cloud", icon: "/Assets/home-tech-googlecloud.webp" },
            { name: "Docker", icon: "/Assets/home-tech-docker.webp" },
            { name: "AWS", icon: "/Assets/home-tech-aws.webp" },
            { name: "Azure", icon: "/Assets/home-tech-azure.webp" },
            { name: "Jenkins", icon: "/Assets/home-tech-jenkins.webp" },
        ],
        uiux: [
            { name: "AdobeXD", icon: "/Assets/home-tech-adobexd.webp" },
            { name: "Figma", icon: "/Assets/home-tech-figma.webp" },
            { name: "Wave", icon: "/Assets/home-tech-wave.webp" },
            { name: "Notion", icon: "/Assets/home-tech-notion.webp" },
        ],
    };

    const serviceKeys = ["web", "ai", "mobile", "it_consulting", "data", "software"];

    const processSteps = [
        {
            title: "Requirement Analysis",
            description: "We gather and analyze your business needs through discussions and research to define a clear project scope.",
            icon: "/Assets/home-process-req.gif"
        },
        {
            title: "Planning & Strategy",
            description: "A strategic roadmap is created with structured workflows and intuitive design for an optimal user experience.",
            icon: "/Assets/home-process-planning.gif"
        },
        {
            title: "Design & Development",
            description: "We craft wireframes and prototypes before transforming them into a functional, high-performance solution.",
            icon: "/Assets/home-process-design.gif"
        },
        {
            title: "Testing & Quality Assurance",
            description: "Rigorous testing ensures functionality, security, and performance, delivering a seamless user experience.",
            icon: "/Assets/home-process-testing.gif"
        },
        {
            title: "Deployment & Implementation",
            description: "We launch the solution with a secure, scalable deployment strategy for smooth business integration.",
            icon: "/Assets/home-process-deploy.gif"
        },
        {
            title: "Support & Continuous Improvement",
            description: "Ongoing support, updates, and optimizations ensure the product evolves with your business needs.",
            icon: "/Assets/home-process-support.gif"
        }
    ];

    useEffect(() => {
        setCurrentService('web');
    }, []);

    const switchContent = (tab) => {
        setActiveTab(tab);
    };

    const showService = (service) => {
        setCurrentService(service);
    };

    const switchTechnology = (category) => {
        setActiveTechnology(category);
    };

    const handleProcessStepHover = (step) => {
        setProcessInfo(step);
    };

    const handlePrevSlide = () => {
        setCurrentSlideIndex((prev) => prev === 0 ? serviceKeys.length - 1 : prev - 1);
        setCurrentService(serviceKeys[currentSlideIndex === 0 ? serviceKeys.length - 1 : currentSlideIndex - 1]);
    };

    const handleNextSlide = () => {
        setCurrentSlideIndex((prev) => prev === serviceKeys.length - 1 ? 0 : prev + 1);
        setCurrentService(serviceKeys[currentSlideIndex === serviceKeys.length - 1 ? 0 : currentSlideIndex + 1]);
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-[calc(100vh-40px)] bg-cover bg-center bg-no-repeat text-white text-center p-5" style={{ backgroundImage: "url('/Assets/home-bg.webp')" }} id="home">
                <div className="flex flex-col items-center justify-center bg-black/60 rounded-lg p-8 animate-fadeUp">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fadeUp delay-300 drop-shadow-lg">Welcome to INTEKBIT SOLUTIONS PVT LTD</h1>
                    <p className="text-lg md:text-xl mb-4 animate-fadeUp delay-500 drop-shadow">Driven by Technology, Powered by Trust.</p>
                    <a href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">Learn More</a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-50" id="about">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4">
                    {/* Left Section */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">Everything You Need to Know About Intekbit Solutions</h2>
                        <div className="flex gap-2 mb-4">
                            <button className={`px-4 py-2 rounded ${activeTab === 'mission' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`} onClick={() => switchContent('mission')}>Mission</button>
                            <button className={`px-4 py-2 rounded ${activeTab === 'vision' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`} onClick={() => switchContent('vision')}>Vision</button>
                            <button className={`px-4 py-2 rounded ${activeTab === 'values' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`} onClick={() => switchContent('values')}>Values</button>
                        </div>
                        <div className="text-gray-700">
                            {activeTab === 'mission' && (
                                <p>At Intekbit Solutions Pvt. Ltd., we simplify challenges with smart, AI-powered solutions while staying by your side every step of the way. Our goal is to deeply understand your needs, deliver meaningful results, and create lasting partnerships.</p>
                            )}
                            {activeTab === 'vision' && (
                                <p>We envision a world where innovation meets trust, and challenges become stepping stones to success. At Intekbit, we aim to inspire confidence and empower growth with solutions that truly make a difference.</p>
                            )}
                            {activeTab === 'values' && (
                                <ul className="list-disc pl-5">
                                    <li>Trust</li>
                                    <li>Excellence</li>
                                    <li>Collaboration</li>
                                    <li>Reliability</li>
                                </ul>
                            )}
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex-1 space-y-4 text-gray-700">
                        <p>At Intekbit Solutions Pvt. Ltd., we transform problem statements into cutting-edge AI-powered solutions that simplify processes, save time, and embrace the future. We thrive on challenges and focus on delivering solutions that go beyond expectations. By blending creativity with a deep understanding of technology, we craft efficient, tailored systems that redefine modern problem-solving.</p>
                        <p>What sets us apart is our unwavering commitment to collaboration. At Intekbit Solutions, we don't work for clients – we work with clients. Shoulder to shoulder, hand in hand, we stand by them through every challenge, ensuring their journey is as seamless as the solutions we deliver.</p>
                        <p>With trust and innovation as our core principles, we don't just solve problems – we create opportunities for growth, efficiency, and staying ahead in a constantly evolving world. Let Intekbit Solutions pave the way to your success with solutions that matter today and excel tomorrow.</p>
                    </div>
                </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* Services Section */}
            <section className="py-16 bg-white" id="services">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4">
                    {/* Left Section */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4 text-blue-700">{services[currentService]?.title || 'Our Services'}</h2>
                        <p className="mb-4 text-gray-700">
                            {services[currentService]?.description || 'Click on a service card to learn more about what we offer.'}
                        </p>
                        <ul className="flex flex-wrap gap-2 mb-4">
                            {services[currentService]?.technologies.map((tech, index) => (
                                <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">{tech}</li>
                            ))}
                        </ul>
                        <a
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
                            href={`/${services[currentService]?.buttonLink?.replace('.html', '').toLowerCase()}`}
                        >
                            View Services
                        </a>
                    </div>
                    {/* Right Section - Slider */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-4">
                            <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200" onClick={handlePrevSlide}>&lt;</button>
                            {serviceKeys.map((key, idx) => (
                                <button
                                    key={key}
                                    className={`w-3 h-3 rounded-full mx-1 ${idx === currentSlideIndex ? 'bg-blue-600' : 'bg-blue-200'}`}
                                    onClick={() => { setCurrentSlideIndex(idx); setCurrentService(key); }}
                                />
                            ))}
                            <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200" onClick={handleNextSlide}>&gt;</button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="cursor-pointer group" onClick={() => showService('web')}>
                                <img src="/Assets/home-webdevelopment.webp" alt="Web Development" className="w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition" />
                                <h3 className="text-center mt-2 text-blue-700 font-semibold">Web Development</h3>
                            </div>
                            <div className="cursor-pointer group" onClick={() => showService('ai')}>
                                <img src="/Assets/home-aiml.webp" alt="AI & ML Solutions" className="w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition" />
                                <h3 className="text-center mt-2 text-blue-700 font-semibold">AI & ML Solutions</h3>
                            </div>
                            <div className="cursor-pointer group" onClick={() => showService('mobile')}>
                                <img src="/Assets/home-appdevelopment.webp" alt="App Development" className="w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition" />
                                <h3 className="text-center mt-2 text-blue-700 font-semibold">App Development</h3>
                            </div>
                            <div className="cursor-pointer group" onClick={() => showService('it_consulting')}>
                                <img src="/Assets/home-itconsulting.webp" alt="IT Consulting" className="w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition" />
                                <h3 className="text-center mt-2 text-blue-700 font-semibold">IT Consulting</h3>
                            </div>
                            <div className="cursor-pointer group" onClick={() => showService('data')}>
                                <img src="/Assets/home-dataservices.webp" alt="Data Services" className="w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition" />
                                <h3 className="text-center mt-2 text-blue-700 font-semibold">Data Services</h3>
                            </div>
                            <div className="cursor-pointer group" onClick={() => showService('software')}>
                                <img src="/Assets/home-softwaredevelopment.webp" alt="Software Development" className="w-28 h-20 object-cover rounded shadow group-hover:scale-105 transition" />
                                <h3 className="text-center mt-2 text-blue-700 font-semibold">Software Development</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-16 bg-gray-50" id="technology">
                <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">Our Technology</h2>
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <button
                        className={`px-4 py-2 rounded ${activeTechnology === 'webdevelopment' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                        onMouseOver={() => switchTechnology('webdevelopment')}
                    >
                        Web Development
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeTechnology === 'appdevelopment' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                        onMouseOver={() => switchTechnology('appdevelopment')}
                    >
                        App Development
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeTechnology === 'ai' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                        onMouseOver={() => switchTechnology('ai')}
                    >
                        Artificial Intelligence
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeTechnology === 'cloud' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                        onMouseOver={() => switchTechnology('cloud')}
                    >
                        Cloud Services
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeTechnology === 'uiux' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
                        onMouseOver={() => switchTechnology('uiux')}
                    >
                        UI/UX
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {technologies[activeTechnology]?.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center bg-white rounded shadow p-4 w-32">
                            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
                            <p className="text-blue-700 font-medium text-center">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-white" id="process">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 flex flex-col items-center md:items-start">
                        <img src={processInfo.icon} alt="Step Icon" className="w-24 h-24 mb-4" />
                        <h3 className="text-xl font-bold text-blue-700 mb-2">{processInfo.title}</h3>
                        <p className="text-gray-700">{processInfo.description}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer bg-blue-50 rounded p-4 shadow hover:bg-blue-100 transition ${processInfo.title === step.title ? 'border-2 border-blue-600' : ''}`}
                                onMouseOver={() => handleProcessStepHover(step)}
                            >
                                <span className="block text-2xl font-bold text-blue-700 mb-2">{index + 1}</span>
                                <p className="font-semibold text-blue-700 mb-1">{step.title}</p>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Hire Us Section */}
            <section className="py-16 bg-gray-50" id="why-hire-us">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">Why Hire Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center bg-white rounded shadow p-6">
                            <div className="text-4xl mb-2">🌟</div>
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Expert Team</h3>
                            <p className="text-gray-700 text-center">Skilled professionals with diverse expertise to address challenges.</p>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-[#1e1f2e] rounded shadow p-6 dark:border dark:border-gray-700">
                            <div className="text-4xl mb-2">🚀</div>
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Innovative Solutions</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-center">Cutting-edge approaches that keep you ahead of the competition.</p>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-[#1e1f2e] rounded shadow p-6 dark:border dark:border-gray-700">
                            <div className="text-4xl mb-2">🤝</div>
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Client Partnership</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-center">We work WITH you, not FOR you, creating lasting relationships.</p>
                        </div>
                        <div className="flex flex-col items-center bg-white dark:bg-[#1e1f2e] rounded shadow p-6 dark:border dark:border-gray-700">
                            <div className="text-4xl mb-2">⚙️</div>
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Technical Excellence</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-center">Superior development practices for high-quality deliverables.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-16 bg-white" id="founders">
                <h2 className="text-2xl font-bold text-center mb-2 text-blue-700">Meet the Founders</h2>
                <p className="text-center mb-8 text-gray-600">Driven by Technology, Powered by Trust.</p>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Founder 1 */}
                    <div className="flex flex-col items-center bg-gray-50 rounded shadow p-6 w-64">
                        <img src="/Assets/fon1.jpg" alt="Founder 1" className="w-24 h-24 object-cover rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-blue-700">Archana Devmorari</h3>
                        <p className="text-gray-600 mb-2">Chief Executive Officer</p>
                        <a href="https://www.linkedin.com/in/archana-devmorari-844475332/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                            <img src="/Assets/footer-LinkedIn.webp" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                    </div>
                    {/* Founder 2 */}
                    <div className="flex flex-col items-center bg-gray-50 rounded shadow p-6 w-64">
                        <img src="/Assets/founder2.jpg" alt="Founder 2" className="w-24 h-24 object-cover rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-blue-700">Sushil Kantaria</h3>
                        <p className="text-gray-600 mb-2">Chief Technology Officer</p>
                        <a href="https://www.linkedin.com/in/sushil-kantaria/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                            <img src="/Assets/footer-LinkedIn.webp" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                    </div>
                    {/* Founder 3 */}
                    <div className="flex flex-col items-center bg-gray-50 rounded shadow p-6 w-64">
                        <img src="/Assets/fon33.jpg" alt="Founder 3" className="w-24 h-24 object-cover rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-blue-700">Parmi Gajera</h3>
                        <p className="text-gray-600 mb-2">Chief Operating Officer</p>
                        <a href="https://www.linkedin.com/in/parmi-gajera-a29274333/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                            <img src="/Assets/footer-LinkedIn.webp" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Let's Connect Section */}
            <section className="py-16 bg-blue-50" id="lets-connect">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-2 text-blue-700">Let's Create Big Stories Together!</h2>
                    <p className="mb-6 text-gray-600">Share your project details to build your path toward success.</p>
                    <a href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                        <span>Get A Quote</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-2">
                            <path fillRule="evenodd" d="M12.146 8.354a.5.5 0 0 1 0-.708L14.793 5H1.5a.5.5 0 0 1 0-1h13.293l-2.646-2.646a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0z" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
