"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import QuoteModal from "../components/QuoteModal";
import Toast from "../components/Toast";

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const openQuoteModal = () => setShowModal(true);
  const closeQuoteModal = () => setShowModal(false);
  const showToastNotification = () => setToast(true);

  return (
    <>
      <Header currentPage="contact" openModal={openQuoteModal} />

      <main className="flex-grow relative">
        <Contact />
      </main>

      <Footer currentPage="contact" openModal={openQuoteModal} />

      {showModal && (
        <QuoteModal close={closeQuoteModal} showToast={showToastNotification} />
      )}
      <Toast show={toast} />
    </>
  );
}
