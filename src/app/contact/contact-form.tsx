"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const hearAboutOptions = [
  "Google Search",
  "Facebook",
  "Facebook Ad",
  "Instagram",
  "Instagram Ad",
  "Neighbor / Yard Sign",
  "Referral",
  "Radio 96.7",
  "Radio 97.1",
  "Repeat Customer",
  "BBB",
  "Angie's List",
  "Truck Sign",
  "Home Advisor",
  "Nextdoor",
  "Flyer",
  "Other",
];

const serviceOptions = [
  "New Pool Installation",
  "Pool Closing / Winterization",
  "Pool Opening",
  "Auto Cover",
  "Outdoor Living",
  "Pool Accessories",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const phone = (form.get("phone") as string)?.trim();

    if (!name || name.length < 2) errs.name = "Please enter your full name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";
    if (!phone || phone.replace(/\D/g, "").length < 10)
      errs.phone = "Please enter a valid phone number";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Simulate submission — replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} className="text-center py-16 px-8">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Thank You!
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto mb-2">
          Your request has been received. Our team will contact you
          within 24 hours.
        </p>
        <p className="text-gray-400 text-sm">
          You can also call us at{" "}
          <a href="tel:6143845917" className="text-accent font-semibold hover:underline">
            (614) 384-5917
          </a>{" "}
          for immediate assistance.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Smith"
          required
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(614) 000-0000"
          required
          error={errors.phone}
          autoComplete="tel"
        />
      </div>

      {/* Email */}
      <Field
        label="Email Address"
        name="email"
        type="email"
        placeholder="john@example.com"
        required
        error={errors.email}
        autoComplete="email"
      />

      {/* Address */}
      <Field
        label="Property Address"
        name="address"
        type="text"
        placeholder="123 Main St, Columbus, OH"
        autoComplete="street-address"
      />

      {/* Service + How heard */}
      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          label="Service Interested In"
          name="service"
          options={serviceOptions}
          placeholder="Select a service"
        />
        <SelectField
          label="How Did You Hear About Us?"
          name="source"
          options={hearAboutOptions}
          placeholder="Select an option"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your project — pool size, backyard layout, timeline, or any questions..."
          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none text-base sm:text-sm"
        />
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={18} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all duration-300 text-sm disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Get My Free Estimate
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        By submitting, you agree to be contacted regarding your pool project.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}

/* ── Reusable field components ── */

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-base sm:text-sm ${
          error ? "border-red-300 bg-red-50/50" : "border-gray-200"
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-base sm:text-sm appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%239ca3af%22%20d%3d%22M2%204l4%204%204-4%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat"
      >
        <option value="" disabled className="text-gray-400">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
