"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { asset } from "@/lib/base-path";
import { analytics } from "@/lib/analytics";

// PHP endpoint that lives at public_html/api/submit.php on Hostinger.
// asset() prefixes the deploy basePath when present (GH Pages preview).
const SUBMIT_ENDPOINT = asset("/api/submit.php");

const hearAboutOptions = [
  "Google Search",
  "Facebook",
  "Facebook Ad",
  "Instagram",
  "Instagram Ad",
  "Neighbor / Yard Sign",
  "Referral",
  "Repeat Customer",
  "BBB",
  "Angie's List",
  "Truck Sign",
  "Home Advisor",
  "Nextdoor",
  "Flyer",
  "Other",
];

const poolSizeOptions = [
  "Small (Up to 300 sq ft)",
  "Medium (300–500 sq ft)",
  "Large (500+ sq ft)",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipLoading, setZipLoading] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  async function handleZipChange(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 5);
    setZip(digits);
    if (digits.length === 5) {
      setZipLoading(true);
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${digits}`);
        if (res.ok) {
          const data = await res.json();
          const place = data.places?.[0];
          if (place) {
            setCity(place["place name"] ?? "");
            setState(place["state abbreviation"] ?? "");
          }
        }
      } catch {
        // Silent fail — user can type manually
      } finally {
        setZipLoading(false);
      }
    }
  }

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
    const address = (form.get("address") as string)?.trim();
    const source = (form.get("source") as string)?.trim();
    const poolSize = (form.get("poolSize") as string)?.trim();
    const message = (form.get("message") as string)?.trim();

    if (!name || name.length < 2) errs.name = "Please enter your full name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";
    if (!phone || phone.replace(/\D/g, "").length < 10)
      errs.phone = "Please enter a valid phone number";
    if (!address) errs.address = "Please enter your property address";
    if (!zip || zip.length !== 5)
      errs.zip = "Please enter a valid 5-digit ZIP code";
    if (!city.trim()) errs.city = "Please enter your city";
    if (!state.trim()) errs.state = "Please enter your state";
    if (!poolSize) errs.poolSize = "Please select a pool size";
    if (!source) errs.source = "Please select an option";
    if (!message) errs.message = "Please enter a message";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const errs = validate(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Honeypot — silently drop bots that filled the hidden field
    if ((form.get("_gotcha") as string)?.trim()) {
      setStatus("success");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        analytics.lead({
          pool_size: (form.get("poolSize") as string) || undefined,
          source: (form.get("source") as string) || undefined,
          zip: zip || undefined,
          city: city || undefined,
          state: state || undefined,
          email: (form.get("email") as string) || undefined,
          phone: (form.get("phone") as string) || undefined,
          full_name: (form.get("name") as string) || undefined,
          street: (form.get("address") as string) || undefined,
        });
        setStatus("success");
        formEl.reset();
        return;
      }

      // Server returned validation errors → surface them on the form
      if (data && typeof data === "object" && "errors" in data && data.errors) {
        setErrors(data.errors as Record<string, string>);
        setStatus("idle");
        return;
      }

      if (typeof console !== "undefined") {
        console.error("Form submission rejected:", res.status, data);
      }
      setStatus("error");
    } catch (err) {
      if (typeof console !== "undefined") {
        console.error("Form submission failed:", err);
      }
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
          <a href="tel:+16143845081" className="text-accent font-semibold hover:underline">
            (614) 384-5081
          </a>{" "}
          for immediate assistance.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — bots fill it, humans never see it */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {/* Reply-to is taken from the email field by Formspree automatically */}

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
        placeholder="123 Main St"
        required
        error={errors.address}
        autoComplete="street-address"
      />

      {/* ZIP + City + State */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
        <div className="sm:col-span-2">
          <Field
            label="ZIP Code"
            name="zip"
            type="text"
            placeholder="43015"
            required
            error={errors.zip}
            autoComplete="postal-code"
            value={zip}
            onChange={handleZipChange}
            loading={zipLoading}
            inputMode="numeric"
            maxLength={5}
          />
        </div>
        <div className="sm:col-span-3">
          <Field
            label="City"
            name="city"
            type="text"
            placeholder="Delaware"
            required
            error={errors.city}
            autoComplete="address-level2"
            value={city}
            onChange={setCity}
          />
        </div>
        <div className="sm:col-span-1">
          <Field
            label="State"
            name="state"
            type="text"
            placeholder="OH"
            required
            error={errors.state}
            autoComplete="address-level1"
            value={state}
            onChange={(v) => setState(v.toUpperCase().slice(0, 2))}
            maxLength={2}
          />
        </div>
      </div>

      {/* Pool size */}
      <SelectField
        label="Pool Size"
        name="poolSize"
        options={poolSizeOptions}
        placeholder="Select a pool size"
        required
        error={errors.poolSize}
      />

      {/* How heard */}
      <SelectField
        label="How Did You Hear About Us?"
        name="source"
        options={hearAboutOptions}
        placeholder="Select an option"
        required
        error={errors.source}
      />

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message<span className="text-accent ml-0.5">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your project — pool size, backyard layout, timeline, or any questions..."
          className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none text-base sm:text-sm ${
            errors.message ? "border-red-300 bg-red-50/50" : "border-gray-200"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={18} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">
            Something went wrong. Please try again or call us directly at{" "}
            <a href="tel:+16143845081" className="font-semibold underline">
              (614) 384-5081
            </a>
            .
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
  value,
  onChange,
  loading,
  inputMode,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  value?: string;
  onChange?: (value: string) => void;
  loading?: boolean;
  inputMode?: "numeric" | "text" | "tel" | "email";
  maxLength?: number;
}) {
  const controlled = value !== undefined && onChange !== undefined;
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          {...(controlled ? { value, onChange: (e) => onChange!(e.target.value) } : {})}
          className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-base sm:text-sm ${
            error ? "border-red-300 bg-red-50/50" : "border-gray-200"
          } ${loading ? "pr-10" : ""}`}
        />
        {loading && (
          <Loader2
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-accent"
          />
        )}
      </div>
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
  required,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <select
        name={name}
        defaultValue=""
        className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-base sm:text-sm appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%239ca3af%22%20d%3d%22M2%204l4%204%204-4%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat ${
          error ? "border-red-300 bg-red-50/50" : "border-gray-200"
        }`}
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
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}
