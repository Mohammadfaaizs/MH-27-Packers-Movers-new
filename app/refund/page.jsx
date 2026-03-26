"use client";

import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <>
      <Header currentPage="refund" />
      
      <main className="flex-grow bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Refund Policy</h1>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">Last Updated: January 6, 2026</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancellation and Refund Terms</h2>
                <p className="mb-4">
                  At MH27 Packers & Movers, we understand that plans can change. Our refund policy is designed to be fair while protecting our operational commitments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advance Payment Refunds</h2>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p><strong>7+ Days Before Move:</strong></p>
                    <p>Full refund of advance payment (100%)</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p><strong>3-6 Days Before Move:</strong></p>
                    <p>75% refund of advance payment</p>
                    <p>25% cancellation fee applicable</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <p><strong>48-72 Hours Before Move:</strong></p>
                    <p>50% refund of advance payment</p>
                    <p>50% cancellation fee applicable</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p><strong>Less than 48 Hours:</strong></p>
                    <p>No refund of advance payment</p>
                    <p>100% cancellation fee applicable</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Process</h2>
                <div className="space-y-3">
                  <p><strong>Request Method:</strong> Refund requests must be made in writing via email or phone</p>
                  <p><strong>Processing Time:</strong> Refunds processed within 7-10 working days</p>
                  <p><strong>Refund Mode:</strong> Same mode as original payment (bank transfer for bank payments, etc.)</p>
                  <p><strong>Documentation:</strong> Original receipt/booking confirmation required</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Items</h2>
                <div className="space-y-3">
                  <p><strong>Packing Materials:</strong> Cost of packing materials (boxes, tape, etc.)</p>
                  <p><strong>Storage Charges:</strong> Storage fees beyond complimentary period</p>
                  <p><strong>Additional Services:</strong> Charges for special handling, bulky items, etc.</p>
                  <p><strong>Insurance Premium:</strong> Additional insurance coverage costs</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Force Majeure</h2>
                <p className="mb-4">
                  MH27 Packers & Movers shall not be liable for delays or cancellations due to circumstances beyond our reasonable control, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Natural disasters (floods, earthquakes, storms)</li>
                  <li>Government restrictions or lockdowns</li>
                  <li>Transportation strikes or disruptions</li>
                  <li>Severe weather conditions</li>
                  <li>Emergency situations affecting safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partial Refunds</h2>
                <div className="space-y-3">
                  <p><strong>Service Reduction:</strong> If you reduce services after booking, revised quote will apply</p>
                  <p><strong>Volume Changes:</strong> Significant reduction in moving volume may affect pricing</p>
                  <p><strong>Date Changes:</strong> One complimentary date change allowed; subsequent changes may incur fees</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Method Details</h2>
                <div className="space-y-3">
                  <p><strong>Bank Transfers:</strong> Refunded to original payer's bank account</p>
                  <p><strong>UPI Payments:</strong> Refunded to original UPI ID</p>
                  <p><strong>Credit/Debit Cards:</strong> Refunded to original card (processing time: 5-7 days)</p>
                  <p><strong>Cash Payments:</strong> Refund via bank transfer or in-person collection</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Responsibilities</h2>
                <div className="space-y-3">
                  <p><strong>Accurate Information:</strong> Provide correct bank details for refund processing</p>
                  <p><strong>Cooperation:</strong> Assist in verification process when required</p>
                  <p><strong>Timely Communication:</strong> Notify changes or cancellations promptly</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dispute Resolution</h2>
                <div className="space-y-3">
                  <p><strong>Refund Disputes:</strong> Must be raised within 7 days of refund processing</p>
                  <p><strong>Resolution Time:</strong> Disputes resolved within 15 working days</p>
                  <p><strong>Documentation:</strong> Keep all communication records for reference</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact for Refunds</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Refund Department:</strong></p>
                  <p><strong>Email:</strong> refunds@mh27packers.com</p>
                  <p><strong>Phone:</strong> +91 93733 73333 (Ext: 2)</p>
                  <p><strong>Working Hours:</strong> Monday to Saturday, 9:00 AM to 7:00 PM</p>
                  <p><strong>Address:</strong> Amravati, Maharashtra 444606</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer currentPage="refund" />
    </>
  );
}
