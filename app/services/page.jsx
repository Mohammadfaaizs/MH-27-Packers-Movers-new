"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import QuoteModal from "../components/QuoteModal";
import Toast from "../components/Toast";

export default function ServicesPage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const openQuoteModal = () => setShowModal(true);
  const closeQuoteModal = () => setShowModal(false);
  const showToastNotification = () => setToast(true);

  return (
    <>
      <Header currentPage="services" openModal={openQuoteModal} />

      <main className="flex-grow relative">
        <Services openModal={openQuoteModal} />
      </main>

      <Footer currentPage="services" openModal={openQuoteModal} />

      {showModal && (
        <QuoteModal close={closeQuoteModal} showToast={showToastNotification} />
      )}
      <Toast show={toast} />
    </>
  );
}
