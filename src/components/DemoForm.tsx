"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { isValidEmail, isValidPhone } from "@/lib/validation";
import {
  buildDemoWhatsAppMessage,
  whatsappChatUrl,
} from "@/lib/whatsapp";

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
    if (!isValidPhone(form.phone)) {
      return "Please enter a valid phone or WhatsApp number.";
    }
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

    if (form.website.trim()) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) {
      setErrorMessage("Please wait a moment before submitting again.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    lastSubmitRef.current = now;

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorMessage(data.error || "Unable to submit your request. Please try again.");
        setStatus("error");
        return;
      }

      const waText = buildDemoWhatsAppMessage(form);
      window.open(whatsappChatUrl(waText), "_blank", "noopener,noreferrer");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setErrorMessage("Unable to submit your request. Please try again later.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500";

  if (status === "success") {
    return (
      <div className="space-y-4 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={26} />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Your request is noted</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Thank you for contacting One School. We have received your message and sent a
          confirmation to your email. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="absolute h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-name" className={labelClass}>
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
          <label htmlFor="demo-school" className={labelClass}>
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-email" className={labelClass}>
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
          <label htmlFor="demo-phone" className={labelClass}>
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-country" className={labelClass}>
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
          <label htmlFor="demo-students" className={labelClass}>
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
        <label htmlFor="demo-system" className={labelClass}>
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
        <label htmlFor="demo-message" className={labelClass}>
          Requirements / Message
        </label>
        <textarea
          id="demo-message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} min-h-[100px] resize-y`}
        />
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          {errorMessage}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
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
