// src/components/Products.jsx
import React from "react";
import { PhoneMissed, FormInput } from "lucide-react";
import ProductTile from "./ProductTile";

export default function Products() {
  return (
    <section
      id="solutions"
      className="bg-white py-20 px-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="text-sm font-semibold text-blue-600 uppercase mb-3">
          Managed Solutions
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Never miss a lead again — calls + leads handled for you
        </h2>
        <div className="mx-auto mt-3 mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />

        {/* Subhead */}
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Neovex is a white-glove, managed automation service for service businesses.
          We install, connect, and run everything inside the tools you already use.
          <span className="block text-gray-500 text-base mt-2">
            No software to learn. Month-to-month. Cancel anytime.
          </span>
        </p>

        {/* Tiles — 2 solutions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ProductTile
            title="Missed Call Capture (Managed)"
            desc="Capture missed calls, qualify leads, and get an instant summary—so you call back fast and win the job."
            icon={<PhoneMissed className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />}
            href="/products/missed-call-capture"
            variant="blue"
          />

          <ProductTile
            title="Web Lead Capture (Managed)"
            desc="Capture website leads, auto-qualify them, and route them instantly—no inbox lag, no manual intake."
            icon={<FormInput className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />}
            href="/products/lead-capture"
            variant="emerald"
          />
        </div>

        {/* Secondary links */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/products/missed-call-capture"
            className="text-blue-700 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Explore Missed Call Capture →
          </a>
          <a
            href="/products/lead-capture"
            className="text-blue-700 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Explore Web Lead Capture →
          </a>
        </div>
      </div>
    </section>
  );
}
