// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Link, Navigate, useParams } from "react-router-dom";
import PrivacyPage from "./pages/Privacy.jsx";
import TermsPage from "./pages/Terms.jsx";
import ContactThanks from "./pages/ContactThanks.jsx";



// Layout
import Header from "./components/Header.jsx";

// Pages
import CompanyHome from "./pages/CompanyHome.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import {
  CaseStudiesPage,
  CaseStudyDetailPage,
  FaqPage,
  HowItWorksPage,
  PricingPage,
} from "./pages/PrimaryPages.jsx";
import {
  ManagedAutomationPage,
  WorkflowAutomationAuditPage,
  WorkflowAutomationPage,
} from "./pages/SolutionPages.jsx";


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
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailRoute />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/thanks" element={<ContactThanks />} />
          <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
          <Route path="/workflow-automation-audit" element={<WorkflowAutomationAuditPage />} />
          <Route path="/managed-automation" element={<ManagedAutomationPage />} />

          {/* Legacy product URLs now route to the workflow automation positioning. */}
          <Route path="/products" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/voice" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/intake" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/reach" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/sales" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/scheduling" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/invoicing" element={<Navigate to="/#solutions" replace />} />
          <Route path="/products/social" element={<Navigate to="/#solutions" replace />} />
          <Route path="/revenue-recovery" element={<Navigate to="/#pricing" replace />} />
          <Route path="/missed-call-capture" element={<Navigate to="/#solutions" replace />} />
          <Route path="/web-capture" element={<Navigate to="/#solutions" replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />


        </Routes>
      </main>
    </>
  );
}

function CaseStudyDetailRoute() {
  const { slug } = useParams();
  return <CaseStudyDetailPage slug={slug} />;
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
