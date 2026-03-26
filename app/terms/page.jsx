"use client";

import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header currentPage="terms" />
      
      <main className="flex-grow bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">Last Updated: January 6, 2026</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agreement to Terms</h2>
                <p className="mb-4">
                  By using MH27 Packers & Movers services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services Description</h2>
                <p className="mb-4">
                  MH27 Packers & Movers provides professional relocation services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Residential and commercial moving</li>
                  <li>Local and long-distance relocation</li>
                  <li>Packing and unpacking services</li>
                  <li>Vehicle transportation</li>
                  <li>Storage solutions</li>
                  <li>Insurance coverage options</li>
                  <li>Furniture assembly/disassembly</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Responsibilities</h2>
                <div className="space-y-3">
                  <p><strong>Accurate Information:</strong> Provide complete and accurate details about your move</p>
                  <p><strong>Prohibited Items:</strong> Do not pack illegal substances, hazardous materials, or perishable items</p>
                  <p><strong>Access Preparation:</strong> Ensure clear access to both pickup and delivery locations</p>
                  <p><strong>Payment:</strong> Provide timely payment as per agreed terms</p>
                  <p><strong>Valuables:</strong> Remove jewelry, cash, and important documents from packed items</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing and Payment</h2>
                <div className="space-y-3">
                  <p><strong>Quotes:</strong> Written estimates provided based on inventory and distance</p>
                  <p><strong>Pricing:</strong> Rates may vary based on volume, distance, and additional services</p>
                  <p><strong>Payment Terms:</strong> 50% advance required, balance payable upon delivery</p>
                  <p><strong>Payment Methods:</strong> Cash, bank transfer, UPI, and major credit cards accepted</p>
                  <p><strong>Additional Charges:</strong> Applicable for stairs, long carry, storage, or special handling</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liability and Insurance</h2>
                <div className="space-y-3">
                  <p><strong>Basic Coverage:</strong> ₹10 per kg for goods in transit</p>
                  <p><strong>Additional Insurance:</strong> Optional comprehensive coverage available at 3% of declared value</p>
                  <p><strong>Claims:</strong> Must be reported within 24 hours of delivery</p>
                  <p><strong>Exclusions:</strong> Glassware, electronics, and documents unless specifically insured</p>
                  <p><strong>Limitation:</strong> Not liable for items packed by customer</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancellation Policy</h2>
                <div className="space-y-3">
                  <p><strong>7+ Days Notice:</strong> Full refund of advance payment</p>
                  <p><strong>3-6 Days Notice:</strong> 25% cancellation fee</p>
                  <p><strong>48 Hours Notice:</strong> 50% cancellation fee</p>
                  <p><strong>Less than 48 Hours:</strong> No refund of advance payment</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Terms</h2>
                <div className="space-y-3">
                  <p><strong>Delivery Time:</strong> As per agreed schedule, subject to traffic and weather conditions</p>
                  <p><strong>Delays:</strong> Not responsible for delays due to circumstances beyond our control</p>
                  <p><strong>Failed Delivery:</strong> Customer responsible for rescheduling if unavailable</p>
                  <p><strong>Storage:</strong> Additional charges apply for storage beyond 24 hours</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dispute Resolution</h2>
                <div className="space-y-3">
                  <p><strong>Damage Claims:</strong> Must be documented before signing delivery receipt</p>
                  <p><strong>Resolution Process:</strong> Claims resolved within 30 working days</p>
                  <p><strong>Jurisdiction:</strong> All disputes governed by laws of Maharashtra, India</p>
                  <p><strong>Arbitration:</strong> Optional arbitration available for dispute resolution</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  MH27 Packers & Movers shall not be liable for consequential, indirect, or punitive damages. Our maximum liability shall not exceed the total charges paid for the specific move.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Office Address:</strong> Amravati, Maharashtra 444606</p>
                  <p><strong>Phone:</strong> +91 93733 73333</p>
                  <p><strong>Email:</strong> info@mh27packers.com</p>
                  <p><strong>Working Hours:</strong> Monday to Saturday, 9:00 AM to 7:00 PM</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer currentPage="terms" />
    </>
  );
}
