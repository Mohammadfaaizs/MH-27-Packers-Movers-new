"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import QuoteModal from "./components/QuoteModal";
import Toast from "./components/Toast";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(false);

  const openQuoteModal = () => setShowModal(true);
  const closeQuoteModal = () => setShowModal(false);
  const showToastNotification = () => setToast(true);

  return (
    <>
      <Header currentPage="home" openModal={openQuoteModal} />

      <main className="flex-grow relative">
        <Home setPage={() => {}} openModal={openQuoteModal} />
      </main>

      <Footer currentPage="home" openModal={openQuoteModal} />

      {showModal && (
        <QuoteModal close={closeQuoteModal} showToast={showToastNotification} />
      )}
      <Toast show={toast} />
    </>
  );
}