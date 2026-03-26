"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import QuoteModal from "../components/QuoteModal";
import Toast from "../components/Toast";

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const openQuoteModal = () => setShowModal(true);
  const closeQuoteModal = () => setShowModal(false);
  const showToastNotification = () => setToast(true);

  return (
    <>
      <Header currentPage="about" openModal={openQuoteModal} />

      <main className="flex-grow relative">
        <About />
      </main>

      <Footer currentPage="about" openModal={openQuoteModal} />

      {showModal && (
        <QuoteModal close={closeQuoteModal} showToast={showToastNotification} />
      )}
      <Toast show={toast} />
    </>
  );
}
