import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700">
        <Link href="/" className="text-sky-600 hover:text-sky-700 text-sm font-medium mb-8 inline-block">
          ← Back to Storefront
        </Link>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Customer Support & Inquiries</h1>
        <p className="text-slate-600 text-sm mb-10">
          Have questions regarding a digital template, service delivery, or custom requirement? Our team is here to assist.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-10">
          {/* Support details */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
              <h3 className="text-base font-bold text-slate-900 mb-2">Email Support</h3>
              <p className="text-xs text-slate-600 mb-3">Direct channel for order inquiries, delivery assistance, and licensing:</p>
              <a href="mailto:support@digitalsolutionpro.shop" className="text-sky-600 font-semibold text-sm hover:underline flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@digitalsolutionpro.shop
              </a>
              <div className="mt-3 text-[11px] text-slate-500 font-mono">
                Response SLA: Within 24 business hours
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
              <h3 className="text-base font-bold text-slate-900 mb-2">Service Fulfillment Desk</h3>
              <p className="text-xs text-slate-600 mb-2">
                For active service orders ($110, $116, $142, $229), track your deliverable progress or submit credentials via:
              </p>
              <a href="mailto:support@digitalsolutionpro.shop" className="text-indigo-600 font-semibold text-sm hover:underline">
                support@digitalsolutionpro.shop
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70">
              <h3 className="text-base font-bold text-slate-900 mb-1">Business Identity</h3>
              <p className="text-xs text-slate-600">
                Digital Solution (Digital Products & Technical Services)<br />
                Official Support: support@digitalsolutionpro.shop<br />
                Secure payments processed via Creem (Merchant of Record).
              </p>
            </div>
          </div>

          {/* Quick inquiry form preview */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4">Send a Message</h3>
            <form className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Alex Morgan"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Inquiry Type</label>
                <select className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-sky-500">
                  <option>Product Download Support</option>
                  <option>Technical Service Order ($110 - $229)</option>
                  <option>Commercial Licensing Question</option>
                  <option>Refund Request</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we assist you?"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs"
              >
                Submit Support Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}