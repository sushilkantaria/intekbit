import React from 'react';

const TermsAndConditions = () => (
  <div className="min-h-screen flex flex-col text-white">
    <header className="mt-20">
      <h1 className="text-5xl font-black text-center mb-8 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
        Terms & Conditions
      </h1>
    </header>
    <main className="flex justify-center flex-1 mb-6">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] p-8 space-y-10  backdrop-blur-xl">
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Welcome</h2>
          <p className="text-gray-200">
            Welcome to the website of Intekbit Solutions Pvt. Ltd. By accessing
            or using our website and services, you agree to comply with the
            following terms and conditions. If you do not agree, you may not use
            our website or services.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Use of Website</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              The content provided on this website is for general information
              and use only. It is subject to change without notice.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for
              damages or be a criminal offense.
            </li>
            <li>
              You are responsible for ensuring that any information or services
              available through this website meet your specific requirements.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              All content on this website, including text, images, logos, and
              design, is owned by or licensed to Intekbit Solutions Pvt. Ltd.
              Unauthorized reproduction is prohibited.
            </li>
            <li>
              You may not use, copy, or distribute any content from this website
              without prior written permission.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Limitations of Liability</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              Intekbit Solutions Pvt. Ltd. is not liable for any direct,
              indirect, incidental, or consequential damages arising from the
              use or inability to use our website or services.
            </li>
            <li>
              While we strive to keep the website up-to-date and accurate, we do
              not guarantee the completeness or accuracy of the information
              provided.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              You must provide accurate and truthful information when using our
              contact forms or services.
            </li>
            <li>
              You agree not to engage in activities that disrupt or harm the
              website, its users, or the services provided by Intekbit Solutions
              Pvt. Ltd.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">
            Links to Third-Party Websites
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              Our website may contain links to third-party websites for your
              convenience. These links do not signify that we endorse the
              website(s). We have no responsibility for the content or practices
              of linked websites.
            </li>
            <li>You access third-party websites at your own risk.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Payment and Refunds</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            <li>
              Payment terms for services will be agreed upon prior to the
              commencement of work.
            </li>
            <li>
              Refunds, if applicable, will be issued as per the agreement signed
              between the client and Intekbit Solutions Pvt. Ltd.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Termination</h2>
          <p className="text-gray-200">
            We reserve the right to terminate or suspend access to our website
            and services without notice if you violate these Terms and
            Conditions.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Governing Law</h2>
          <p className="text-gray-200">
            These Terms and Conditions are governed by the laws of [Your
            Country/State], and any disputes will be subject to the exclusive
            jurisdiction of the courts in [Your City/Region].
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Changes to These Terms</h2>
          <p className="text-gray-200">
            Intekbit Solutions Pvt. Ltd. reserves the right to modify these
            Terms and Conditions at any time. Any changes will be effective
            immediately upon posting on this page.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-200">
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <p>
            <strong>Email:</strong> Support@intekbit.com{' '}
          </p>
          <p>
            <strong>Phone:</strong> +91 88498 36407{' '}
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default TermsAndConditions;
