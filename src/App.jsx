// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import PrivacyPage from "./pages/Privacy.jsx";
import TermsPage from "./pages/Terms.jsx";
import ContactThanks from "./pages/ContactThanks.jsx";



// Layout
import Header from "./components/Header.jsx";

// Pages
import CompanyHome from "./pages/CompanyHome.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";

// Products
import VoicePage from "./pages/Voice.jsx";
import IntakePage from "./pages/Intake";
import SalesPage from "./pages/Reach.jsx";      // Reach page component
import SchedulingPage from "./pages/Scheduling";
import InvoicingPage from "./pages/Invoicing";
import SocialPage from "./pages/Social";
import RevenueRecoveryPage from "./pages/RevenueRecovery";
import MissedCallCapture from "./pages/MIssedCallCapture.jsx";


// Products index
import ProductsIndex from "./pages/ProductsIndex.jsx";
import WebCapturePage from "./pages/webcapture.jsx";

/** Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Smoothly scroll to #hash targets after route updates */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);

    const t = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 56; // h-14
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    });

    return () => cancelAnimationFrame(t);
  }, [pathname, hash]);

  return null;
}


export default function App() {
  return (
    <>

<Header />
<main
  id="main"
  tabIndex={-1}
  className="pt-14"
>

  <ScrollToTop />
  <ScrollToHash />


        <Routes>
          {/* Marketing pages */}
          <Route path="/" element={<CompanyHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/thanks" element={<ContactThanks />} />

          {/* Products */}
          <Route path="/products" element={<ProductsIndex />} />
          <Route path="/products/voice" element={<VoicePage />} />
          <Route path="/products/intake" element={<IntakePage />} />
          <Route path="/revenue-recovery" element={<RevenueRecoveryPage />} />
          <Route path="/missed-call-capture" element={<MissedCallCapture />} />
          <Route path="/web-capture" element={<WebCapturePage />} />





          {/* Support both /reach and /sales for now */}
          <Route path="/products/reach" element={<SalesPage />} />
          <Route path="/products/sales" element={<Navigate to="/products/reach" replace />} />
          <Route path="/products/scheduling" element={<SchedulingPage />} />
          <Route path="/products/invoicing" element={<InvoicingPage />} />
          <Route path="/products/social" element={<SocialPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />


        </Routes>
      </main>
    </>
  );
}

/** Lightweight 404 */
function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Page not found</h1>
      <p className="text-slate-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
      >
        Go home
      </Link>
    </div>
  );
}
