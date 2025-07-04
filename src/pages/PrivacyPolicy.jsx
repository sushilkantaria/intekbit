import React from 'react';

const PrivacyPolicy = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-[#10111a] text-gray-800 dark:text-gray-100">
        <header className="bg-white shadow">
            <h1 className="text-3xl font-bold text-center py-8 text-blue-700">Privacy Policy</h1>
        </header>
        <main className="flex justify-center px-4 py-8">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-8">
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Introduction</h2>
                    <p>At Intekbit Solutions Pvt. Ltd., your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.</p>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Information We Collect</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and any other details you provide when filling out our contact forms.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, pages visited, and time spent on our site.</li>
                    </ul>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Communication:</strong> To respond to your inquiries and provide support.</li>
                        <li><strong>Improvement:</strong> To enhance our website and services.</li>
                        <li><strong>Marketing:</strong> To share updates, offers, or news about our products and services (if you consent).</li>
                    </ul>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Data Protection</h2>
                    <p>We take reasonable steps to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Sharing of Information</h2>
                    <p>We do not sell, trade, or share your personal information with third parties, except:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>When required by law.</li>
                        <li>To trusted service providers who assist in operating our website and services (with confidentiality agreements in place).</li>
                    </ul>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Cookies</h2>
                    <p>Our website may use cookies to improve user experience. You can adjust your browser settings to decline cookies if you prefer.</p>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Your Rights</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Access the personal data we have about you.</li>
                        <li>Request corrections to your personal data.</li>
                        <li>Request deletion of your personal data.</li>
                    </ul>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                </section>
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-blue-600">Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p><strong>Email:</strong> Support@intekbit.com </p>
                    <p><strong>Phone:</strong> +91 88498 36407</p>
                </section>
            </div>
        </main>
    </div>
);

export default PrivacyPolicy;
