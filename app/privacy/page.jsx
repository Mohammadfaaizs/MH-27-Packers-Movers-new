"use client";

import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header currentPage="privacy" />
      
      <main className="flex-grow bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">Last Updated: January 6, 2026</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                <p className="mb-4">
                  At MH27 Packers & Movers, we collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number</li>
                  <li>Moving addresses (from and to)</li>
                  <li>Move date and type of service required</li>
                  <li>Property details and special requirements</li>
                  <li>Payment information for billing purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
                <div className="space-y-3">
                  <p><strong>To Provide Services:</strong> Process your moving requests and coordinate logistics</p>
                  <p><strong>Communication:</strong> Send quotes, updates, and service notifications</p>
                  <p><strong>Billing:</strong> Generate invoices and process payments</p>
                  <p><strong>Customer Support:</strong> Assist with inquiries and resolve issues</p>
                  <p><strong>Improvement:</strong> Enhance our services and customer experience</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, rent, or trade your personal information. We may share your information only with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service partners involved in your move</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Legal authorities when required by law</li>
                  <li>Insurance providers for coverage verification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for all data transmissions</li>
                  <li>Secure servers with restricted access</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
                <div className="space-y-3">
                  <p><strong>Access:</strong> Request copies of your personal information</p>
                  <p><strong>Correction:</strong> Update inaccurate or incomplete information</p>
                  <p><strong>Deletion:</strong> Request removal of your personal data</p>
                  <p><strong>Opt-out:</strong> Decline marketing communications</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking</h2>
                <p className="mb-4">
                  Our website uses cookies to enhance your experience. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="mb-4">
                  For privacy-related questions or concerns, contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@mh27packers.com</p>
                  <p><strong>Phone:</strong> +91 93733 73333</p>
                  <p><strong>Address:</strong> Amravati, Maharashtra 444606</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
                <p>
                  We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer currentPage="privacy" />
    </>
  );
}
