import React from "react";
import { ProductItem } from "@/data/products";

export default function ProductCard({ item }: { item: ProductItem }) {
  return (
    <div className="flex flex-col h-full bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 shadow-lg hover:shadow-sky-500/10">
      <div className="flex items-start justify-between gap-4 mb-4">
        {item.badge ? (
          <span className="inline-block px-2.5 py-1 text-xs font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/40 rounded-full font-mono">
            {item.badge}
          </span>
        ) : <div />}
        <div className="text-right">
          <span className="text-2xl font-extrabold text-white">${item.price}</span>
          <span className="text-xs text-slate-400 block">USD one-time</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{item.name}</h3>
      <p className="text-sm text-slate-400 mb-6 flex-grow">{item.shortDescription}</p>

      {/* Deliverable SLA info */}
      <div className="mb-6 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
        <div className="font-semibold text-sky-300 flex items-center gap-1.5 mb-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Delivery SLA: {item.deliverySLA}
        </div>
        <div className="text-slate-400">
          <span className="text-slate-300 font-medium">Includes:</span> {item.deliverables.join(" • ")}
        </div>
      </div>

      {/* Key features */}
      <ul className="space-y-2 mb-6 text-xs text-slate-300">
        {item.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <svg className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        className="w-full py-2.5 px-4 text-center rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-colors block"
      >
        Buy Now (${item.price})
      </a>
      <span className="text-[10px] text-center text-slate-500 mt-2 block font-mono">
        Secured by Creem • Instant fulfillment link
      </span>
    </div>
  );
}
