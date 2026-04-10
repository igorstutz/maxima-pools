"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export function PoolClosingFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "bg-gradient-to-br from-gray-50 to-white border-accent/20 shadow-md"
                : "bg-white border-gray-100 hover:border-gray-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
            >
              <span
                className={`font-semibold transition-colors ${
                  isOpen ? "text-primary" : "text-gray-900"
                }`}
              >
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
