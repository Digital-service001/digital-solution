import React from "react";
import { ProductItem } from "@/data/products";

export default function ServiceCard({ item }: { item: ProductItem }) {
  return (
    <div className="flex flex-col h-full bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between gap-4 mb-4">
        {item.badge ? (
          <span className="inline-block px-2.5 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/80 rounded-full font-mono">
            {item.badge}
          </span>
        ) : <div />}
        <div className="text-right">
          <span className="text-2xl font-extrabold text-slate-900">${item.price}</span>
          <span className="text-xs text-slate-500 block font-medium">USD fixed fee</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-950 mb-2 tracking-tight">{item.name}</h3>
      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">{item.shortDescription}</p>

      {/* Service SLA info */}
      <div className="mb-6 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs">
        <div className="font-semibold text-indigo-700 flex items-center gap-1.5 mb-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Turnaround SLA: {item.deliverySLA}
        </div>
        <div className="text-slate-600">
          <span className="text-slate-900 font-medium">Deliverables:</span> {item.deliverables.join(" • ")}
        </div>
      </div>

      {/* Deliverable details */}
      <ul className="space-y-2 mb-6 text-xs text-slate-700">
        {item.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Action button */}
      <a
        href={item.creemCheckoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold text-sm shadow-sm transition-colors block"
      >
        Book Service (${item.price})
      </a>
      <span className="text-[10px] text-center text-slate-400 mt-2.5 block font-mono">
        Fixed price contract • Dedicated intake form upon checkout
      </span>
    </div>
  );
}