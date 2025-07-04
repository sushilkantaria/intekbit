import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen text-gray-900">
            {/* First Section: Heading, Description, and Image */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">Innovating with Impact, Delivering with Care</h1>
                    <p className="text-gray-700 text-lg">We are Intekbit Solutions Pvt. Ltd., a passionate team of visionaries dedicated to redefining how businesses embrace technology. From tailored web development to powerful AI-driven solutions, we transform ideas into reality. Since our founding, we've been committed to delivering innovative, future-ready solutions that drive success.</p>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12 bg-white dark:bg-[#10111a] flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
                <div className="flex-1 bg-gray-100 dark:bg-[#1e1f2e] rounded-lg p-6 shadow dark:border dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-2">
                        <img src="/Assets/about-mission.webp" alt="Mission" className="h-12 w-12 rounded-full" />
                        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Our Mission</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">At Intekbit Solutions Pvt. Ltd., we simplify challenges with smart, AI-powered solutions while staying by your side every step of the way. Our goal is to deeply understand your needs, deliver meaningful results, and create lasting partnerships.</p>
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-[#1e1f2e] rounded-lg p-6 shadow dark:border dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-2">
                        <img src="/Assets/about-vision.webp" alt="Vision" className="h-12 w-12 rounded-full" />
                        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Our Vision</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">We envision a world where innovation meets trust, and challenges become stepping stones to success. At Intekbit, we aim to inspire confidence and empower growth with solutions that truly make a difference.</p>
                </div>
            </section>

            {/* Agile Process Section */}
            <div className="py-12 bg-blue-50 dark:bg-[#161827]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center px-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400">We Follow Agile Methodology</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">We follow the Agile methodology to ensure that we continuously improve our development process and deliver high-quality results. This approach helps us stay responsive to feedback, foster innovation, and enhance productivity throughout the project lifecycle.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-[#1e1f2e] rounded shadow p-4 dark:border dark:border-gray-700">
                                <div className="flex items-center gap-2 mb-1"><span className="font-bold text-blue-600 dark:text-blue-400">1</span><span className="font-semibold dark:text-gray-200">Plan</span></div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">Define the project vision, outline objectives, and set clear deliverables. Our team gathers requirements from stakeholders to understand the product's scope.</div>
                            </div>
                            <div className="bg-white dark:bg-[#1e1f2e] rounded shadow p-4 dark:border dark:border-gray-700">
                                <div className="flex items-center gap-2 mb-1"><span className="font-bold text-blue-600 dark:text-blue-400">2</span><span className="font-semibold dark:text-gray-200">Design</span></div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">Develop a conceptual framework, wireframes, and prototype. The design phase focuses on a user-centric approach to ensure the final product aligns with expectations.</div>
                            </div>
                            <div className="bg-white dark:bg-[#1e1f2e] rounded shadow p-4 dark:border dark:border-gray-700">
                                <div className="flex items-center gap-2 mb-1"><span className="font-bold text-blue-600 dark:text-blue-400">3</span><span className="font-semibold dark:text-gray-200">Develop</span></div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">In this phase, the team executes the development, coding, and software features. Regular sprints are held, providing early releases that are incrementally tested.</div>
                            </div>
                            <div className="bg-white dark:bg-[#1e1f2e] rounded shadow p-4 dark:border dark:border-gray-700">
                                <div className="flex items-center gap-2 mb-1"><span className="font-bold text-blue-600 dark:text-blue-400">4</span><span className="font-semibold dark:text-gray-200">Test</span></div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">Perform rigorous testing throughout the development process to ensure reliability and user satisfaction. Feedback from users helps improve the product.</div>
                            </div>
                            <div className="bg-white dark:bg-[#1e1f2e] rounded shadow p-4 dark:border dark:border-gray-700">
                                <div className="flex items-center gap-2 mb-1"><span className="font-bold text-blue-600 dark:text-blue-400">5</span><span className="font-semibold dark:text-gray-200">Deploy & Review</span></div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">After deployment, we actively collect user feedback, monitor performance, and make necessary updates. We review the product with stakeholders to assess outcomes and identify any changes or improvements.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/Assets/about-agile.webp" alt="Agile Process" className="rounded-lg shadow-lg max-h-80" />
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <section className="py-12 bg-white dark:bg-[#10111a]">
                <h2 className="text-2xl font-bold text-center mb-8 text-blue-700 dark:text-blue-400">Our Core Values</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center bg-blue-50 dark:bg-[#1e293b] rounded-lg p-6 shadow dark:border dark:border-gray-700">
                        <span className="text-3xl mb-2 text-yellow-400">★</span>
                        <h3 className="font-semibold mb-1 dark:text-gray-200">Excellence</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">We aim for the highest quality in everything we do.</p>
                    </div>
                    <div className="flex flex-col items-center bg-blue-50 dark:bg-[#1e293b] rounded-lg p-6 shadow dark:border dark:border-gray-700">
                        <span className="text-3xl mb-2 text-blue-400">🤝</span>
                        <h3 className="font-semibold mb-1 dark:text-gray-200">Trust</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">We believe in long-lasting relationships built on honesty.</p>
                    </div>
                    <div className="flex flex-col items-center bg-blue-50 dark:bg-[#1e293b] rounded-lg p-6 shadow dark:border dark:border-gray-700">
                        <span className="text-3xl mb-2 text-green-400">👥</span>
                        <h3 className="font-semibold mb-1 dark:text-gray-200">Collaboration</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Working hand-in-hand with our clients ensures mutual success.</p>
                    </div>
                    <div className="flex flex-col items-center bg-blue-50 dark:bg-[#1e293b] rounded-lg p-6 shadow dark:border dark:border-gray-700">
                        <span className="text-3xl mb-2 text-green-600">✔️</span>
                        <h3 className="font-semibold mb-1 dark:text-gray-200">Reliability</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">We ensure dependability and consistency in our services.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
