import React, { useState } from 'react';

const servicesData = [
    {
        title: 'Branding & Identity Design',
        sections: [
            {
                img: '/Assets/internal-assets/graphics-Logo-Design-itp.webp',
                sectionTitle: 'Logo Design',
                content: 'Your logo is more than just a symbol—it’s the foundation of your brand’s identity. We craft unique, visually appealing, and versatile logos that capture your essence and leave a lasting impression. Whether minimalist, modern, or bold, our designs ensure your brand stands out in a crowded market. With a strong identity, your business becomes instantly recognizable and memorable. Let’s create a logo that speaks for your brand and connects with your audience!'
            },
            {
                img: '/Assets/internal-assets/graphics-Business-Cards-itp.webp',
                sectionTitle: 'Business Cards',
                content: 'A great business card makes networking impactful! We design sleek, professional and stylish cards that reflect your brand personality while ensuring readability and aesthetics. Whether minimalistic or bold, our designs create a lasting impression. A well-crafted business card is more than just contact details —it’s a representation of your brand’s professionalism. Elevate your brand identity with a card that speaks for itself!'
            },
            {
                img: '/Assets/internal-assets/graphics-Email-Newsletters-itp.webp',
                sectionTitle: 'Letterheads, Email Newsletters & Stationery',
                content: 'Consistency in branding builds trust, and our custom-designed letterheads, Email Newsletters and stationery make your business communication professional and polished. From official documents to invoices, we ensure every element aligns with your brand identity. A well-branded stationery set enhances credibility and leaves a sophisticated impression. Whether for corporate use or personalized branding, our designs maintain uniformity and professionalism.'
            }
        ]
    },
    {
        title: 'Marketing & Advertising Design',
        sections: [
            {
                img: '/Assets/internal-assets/graphics-Social-Media-Posts-Banners-itp.webp',
                sectionTitle: 'Social Media Posts & Banners',
                content: 'In a world of short attention spans, striking visuals make all the difference! We design engaging, high-quality social media posts and banners that boost your brand’s visibility and engagement. Whether for promotions, announcements, or storytelling, our designs ensure your message stands out. A visually appealing feed increases user interaction and brand recall. Let’s create scroll-stopping content that drives results!'
            },
            {
                img: '/Assets/internal-assets/graphics-Flyers-Posters-Brochures-itp.webp',
                sectionTitle: 'Flyers, Posters & Brochures',
                content: 'Traditional marketing is still powerful when done right! We design eye-catching flyers, posters, and brochures that effectively convey your message. Whether for events, promotions, or corporate use, our designs blend creativity with clarity to ensure maximum impact. A well-crafted design not only informs but also persuades and excites your audience. Get marketing materials that work for you!'
            },
            {
                img: '/Assets/internal-assets/graphics-infographic-design-services-itp.webp',
                sectionTitle: 'Infographics',
                content: 'Data doesn’t have to be boring! We create visually engaging infographics that turn complex information into easy-to-understand, compelling visuals. Whether for business reports, presentations, or social media, our infographics make information digestible and memorable. A well-designed infographic boosts engagement and simplifies communication. Let’s transform your data into a visual story that connects with your audience.'
            },
            {
                img: '/Assets/internal-assets/graphics-Advertisement-Banners-itp.webp',
                sectionTitle: 'Advertisement Banners',
                content: 'Digital ads need to be visually compelling to drive clicks! We design high-quality ad banners for Google Ads, Facebook, Instagram, and other platforms to maximize engagement. With a perfect balance of color, typography, and messaging, we create ads that grab attention instantly. Well-designed ads increase conversions and improve brand recognition. Make your advertising campaigns more effective with our creative designs!'
            }
        ]
    },
    {
        title: 'Print & Packaging Design',
        sections: [
            {
                img: '/Assets/internal-assets/graphics-Book-Magazine-Covers-itp.webp',
                sectionTitle: 'Book & Magazine Covers',
                content: 'A book is judged by its cover, and we make sure yours stands out! We design visually striking book and magazine covers that capture attention and convey the essence of your content. Whether for fiction, non-fiction, or corporate magazines, our designs ensure your publication gets noticed. A great cover enhances credibility and increases reader interest. Let’s design a cover that sells!'
            },
            {
                img: '/Assets/internal-assets/graphics-Label-Design-itp.webp',
                sectionTitle: 'Label Design',
                content: 'Small but powerful! Labels provide essential product information while reinforcing your brand identity. We design eye-catching and well-structured labels that maintain clarity, aesthetics, and compliance with industry standards. A great label enhances product appeal and builds brand recognition. Let’s create labels that inform and attract at the same time!'
            },
            {
                img: '/Assets/internal-assets/graphics-Menu-Design-itp.webp',
                sectionTitle: 'Menu Design',
                content: 'A menu should not only list items but also enhance the dining experience! We design stylish, easy-to-read menus that make ordering simple and enjoyable. Whether for restaurants, cafes, or food trucks, our menu designs align with your brand’s theme and ambiance. A visually appealing menu can influence customer choices and increase sales. Let’s create a menu that leaves a lasting impression!'
            },
            {
                img: '/Assets/internal-assets/graphics-invitation-itp.webp',
                sectionTitle: 'Invitation & Greeting Cards',
                content: 'Every occasion deserves a stunning invitation! We design elegant, unique, and creative invitation and greeting cards that make every event special. Whether for weddings, corporate events, or personal celebrations, our designs ensure the perfect first impression. A well-crafted invitation sets the tone for your event. Let’s make your invitations unforgettable!'
            }
        ]
    },
    {
        title: 'Motion Graphics & Video Editing',
        sections: [
            {
                img: '/Assets/internal-assets/graphics-logo-animation-service-itp.webp',
                sectionTitle: 'Logo Animation',
                content: 'Make your brand dynamic with a stunning logo animation. We bring your logo to life with smooth transitions and engaging effects that enhance your brand presence. Perfect for intros, branding videos, and presentations, a well-animated logo adds professionalism. Animation makes your brand memorable and visually appealing. Let’s animate your brand identity.'
            },
            {
                img: '/Assets/internal-assets/graphics-reels-itp.webp',
                sectionTitle: 'Social Media Reels & Shorts Editing',
                content: 'Short-form content rules the internet, and we make yours stand out! We edit high-quality reels and short videos for Instagram, TikTok, and YouTube to keep your audience engaged. With smooth transitions, text overlays, and effects, we create content that grabs attention instantly. Well-edited videos boost social media presence and audience interaction. Get ready to go viral with our video editing services.'
            },
            {
                img: '/Assets/internal-assets/graphics-yt-thumbnail-itp.webp',
                sectionTitle: 'YouTube Thumbnails & Covers',
                content: 'First impressions matter, and thumbnails drive video clicks! We design eye-catching YouTube thumbnails and channel covers that increase views and brand identity. A well-designed thumbnail can boost your click-through rate significantly. Let’s create visuals that make your content impossible to ignore.'
            }
        ]
    }
];

const GraphicDesigning = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = servicesData[activeIndex];
    return (
        <div className="bg-white dark:bg-[#10111a] min-h-screen text-gray-900 dark:text-gray-100">
            <section className="flex flex-col md:flex-row items-center justify-between px-4 py-8 bg-white shadow rounded-lg max-w-5xl mx-auto mb-8">
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Graphic Designing</h2>
                    <p className="text-gray-700">At Intekbit Solutions Pvt. Ltd., we don’t just design things—we capture the emotions behind them and infuse that essence into every visual. Our goal is to create designs that resonate with users on an emotional level, making your brand not just seen but felt. Unlike others, we blend creativity, strategy, and innovation to craft unique, impactful visuals that leave a lasting impression. Whether it’s a logo, branding, or marketing material, we ensure every design tells a story that connects and converts. Choose Intekbit for designs that don’t just look good—they feel right!</p>
                </div>
                <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                    <img src="/Assets/internal-graphicdesigning.webp" alt="Graphic Designing" className="w-64 h-48 object-cover rounded-lg shadow" />
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

export default GraphicDesigning;
