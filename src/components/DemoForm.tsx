"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { isValidEmail, isValidPhone } from "@/lib/validation";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  schoolName: "",
  email: "",
  phone: "",
  country: "",
  studentCount: "",
  currentSystem: "",
  message: "",
  website: "",
};

export default function DemoForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const lastSubmitRef = useRef(0);

  const update = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") setStatus("idle");
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return "Full name is required.";
    if (!form.schoolName.trim()) return "School name is required.";
    if (!form.email.trim()) return "Work email is required.";
    if (!isValidEmail(form.email)) return "Please enter a valid work email.";
    if (!form.phone.trim()) return "Phone or WhatsApp number is required.";
    if (!isValidPhone(form.phone)) return "Please enter a valid phone or WhatsApp number.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      setErrorMessage("Please wait a moment before submitting again.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Submission failed.");
      }

      lastSubmitRef.current = Date.now();
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl border border-black p-10 text-center shadow-xl"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black text-blue-950 mb-3">Thank you!</h3>
        <p className="text-slate-500 font-medium">
          Your request has been received. Our team will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full bg-slate-50 border border-black/10 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="demo-name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Full Name <span className="text-blue-600">*</span>
          </label>
          <input
            id="demo-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="demo-school" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            School Name <span className="text-blue-600">*</span>
          </label>
          <input
            id="demo-school"
            type="text"
            required
            value={form.schoolName}
            onChange={(e) => update("schoolName", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="demo-email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Work Email <span className="text-blue-600">*</span>
          </label>
          <input
            id="demo-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="demo-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Phone / WhatsApp <span className="text-blue-600">*</span>
          </label>
          <input
            id="demo-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="demo-country" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Country
          </label>
          <input
            id="demo-country"
            type="text"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            className={inputClass}
            autoComplete="country-name"
          />
        </div>
        <div>
          <label htmlFor="demo-students" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            Number of Students
          </label>
          <input
            id="demo-students"
            type="text"
            value={form.studentCount}
            onChange={(e) => update("studentCount", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="demo-system" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
          Current School Management System
        </label>
        <input
          id="demo-system"
          type="text"
          value={form.currentSystem}
          onChange={(e) => update("currentSystem", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="demo-message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
          Requirements / Message
        </label>
        <textarea
          id="demo-message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-y min-h-[100px]`}
        />
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          {errorMessage}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Request a Demo <Send size={16} />
          </>
        )}
      </motion.button>
    </form>
  );
}
