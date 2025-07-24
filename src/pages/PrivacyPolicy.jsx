import React from 'react';

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col text-white">
    <header className="mt-20">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center py-8 text-blue-400 drop-shadow-lg tracking-tight">
        Privacy Policy
      </h1>
    </header>
    <main className="flex justify-center flex-1 ">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] p-8 space-y-10  backdrop-blur-xl">
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p className="text-gray-200">
            At Intekbit Solutions Pvt. Ltd., your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website or use our services.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold  mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and any other details you provide when filling out our
              contact forms.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, such as IP address, browser type, pages visited, and time
              spent on our site.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              <strong>Communication:</strong> To respond to your inquiries and
              provide support.
            </li>
            <li>
              <strong>Improvement:</strong> To enhance our website and services.
            </li>
            <li>
              <strong>Marketing:</strong> To share updates, offers, or news
              about our products and services (if you consent).
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Data Protection</h2>
          <p className="text-gray-200">
            We take reasonable steps to protect your information from
            unauthorized access, alteration, or disclosure. However, no method
            of transmission over the internet is 100% secure.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Sharing of Information</h2>
          <p className="text-gray-200">
            We do not sell, trade, or share your personal information with third
            parties, except:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>When required by law.</li>
            <li>
              To trusted service providers who assist in operating our website
              and services (with confidentiality agreements in place).
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Cookies</h2>
          <p className="text-gray-200">
            Our website may use cookies to improve user experience. You can
            adjust your browser settings to decline cookies if you prefer.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Your Rights</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>Access the personal data we have about you.</li>
            <li>Request corrections to your personal data.</li>
            <li>Request deletion of your personal data.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
          <p className="text-gray-200">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-200">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong> Support@intekbit.com{' '}
          </p>
          <p>
            <strong>Phone:</strong> +91 88498 36407
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
