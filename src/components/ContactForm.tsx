import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { CONTACT_EMAIL } from "../lib/site";
import { primaryBtn } from "../lib/classes";
import Icon from "./Icons";

const NEEDS = [
  "Website",
  "Website redesign",
  "Online store",
  "Social media",
  "Both",
  "Something else",
] as const;

const BUDGETS = [
  "Website from £199",
  "Website from £399",
  "Online store from £15/month",
  "Custom website",
  "Social media from £99/month",
  "Not sure yet",
] as const;

const needFromQuery: Record<string, (typeof NEEDS)[number]> = {
  website: "Website",
  redesign: "Website redesign",
  store: "Online store",
  social: "Social media",
  both: "Both",
  other: "Something else",
};

const budgetFromQuery: Record<string, (typeof BUDGETS)[number]> = {
  starter: "Website from £199",
  business: "Website from £399",
  store: "Online store from £15/month",
  custom: "Custom website",
  social: "Social media from £99/month",
};

type Fields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  need: string;
  budget: string;
  message: string;
  company: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  business: "",
  email: "",
  phone: "",
  need: "",
  budget: "",
  message: "",
  company: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (fields.phone.trim() && !/^[0-9+\s()-]{8,}$/.test(fields.phone.trim())) {
    errors.phone = "Check the phone number, or leave it blank.";
  }
  if (!fields.need) errors.need = "Choose what you need.";
  if (!fields.budget) errors.budget = "Choose a budget, or select not sure yet.";
  if (!fields.message.trim()) errors.message = "Tell us a little about the project.";
  return errors;
}

function composeMessage(fields: Fields) {
  return [
    `Name: ${fields.name.trim()}`,
    `Business: ${fields.business.trim() || "—"}`,
    `Email: ${fields.email.trim()}`,
    `Phone: ${fields.phone.trim() || "—"}`,
    `What they need: ${fields.need}`,
    `Budget: ${fields.budget}`,
    "",
    fields.message.trim(),
  ].join("\n");
}

const inputClass =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-deep dark:border-white/10 dark:bg-white/5 dark:text-white";

export default function ContactForm() {
  const [params] = useSearchParams();
  const initial = useMemo<Fields>(
    () => ({
      ...empty,
      need: needFromQuery[params.get("need") ?? ""] ?? "",
      budget: budgetFromQuery[params.get("budget") ?? ""] ?? "",
    }),
    [params],
  );
  const [fields, setFields] = useState<Fields>(initial);

  useEffect(() => {
    setFields((current) => ({
      ...current,
      need: needFromQuery[params.get("need") ?? ""] ?? current.need,
      budget: budgetFromQuery[params.get("budget") ?? ""] ?? current.budget,
    }));
  }, [params]);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fields.company) return;
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }
    const body = composeMessage(fields);
    const subject = `New project enquiry — ${fields.business.trim() || fields.name.trim()}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setReady(body);
    setCopied(false);
    setCopyError(false);
    if (mailto.length < 1900) {
      window.location.href = mailto;
    }
  };

  const copy = async () => {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(`To: ${CONTACT_EMAIL}\n\n${ready}`);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };

  if (ready) {
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `New project enquiry — ${fields.business.trim() || fields.name.trim()}`,
    )}&body=${encodeURIComponent(ready)}`;
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#0c1222]" role="status">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
          Ready to send
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">Your enquiry is prepared.</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Your email app should open with the message ready. If it doesn't, copy it and send it to{" "}
          <a className="font-medium text-brand-deep dark:text-brand" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <textarea
          readOnly
          value={ready}
          className="mt-5 h-48 w-full resize-y rounded-xl border border-slate-200 bg-paper p-3 text-sm dark:border-white/10 dark:bg-white/5"
          aria-label="Your enquiry"
        />
        {copyError && (
          <p className="mt-3 text-sm text-red-700 dark:text-red-300" role="alert">
            Copying didn't work. Select the message above and copy it manually.
          </p>
        )}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a href={mailto} className={primaryBtn}>
            Open email app
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-white/15"
          >
            {copied ? "Copied" : "Copy message"}
          </button>
          <button
            type="button"
            onClick={() => setReady(null)}
            className="inline-flex items-center justify-center px-3 py-3 text-sm font-medium text-slate-500"
          >
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form id="enquiry" onSubmit={onSubmit} noValidate className="relative grid gap-4">
      {Object.keys(errors).length > 0 && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-400/30 dark:bg-red-500/10 dark:text-red-200" role="alert">
          Please check the highlighted fields.
        </p>
      )}
      <Field label="Name" id="name" error={errors.name} required>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
      </Field>
      <Field label="Business name" id="business">
        <input
          id="business"
          name="business"
          autoComplete="organization"
          value={fields.business}
          onChange={(event) => update("business", event.target.value)}
          className={inputClass}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" id="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
        </Field>
        <Field label="Phone" id="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="What do you need?" id="need" error={errors.need} required>
          <select
            id="need"
            name="need"
            value={fields.need}
            onChange={(event) => update("need", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
            required
          >
            <option value="">Select</option>
            {NEEDS.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget" id="budget" error={errors.budget} required>
          <select
            id="budget"
            name="budget"
            value={fields.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            required
          >
            <option value="">Select</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" id="message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          className={`${inputClass} h-auto py-3`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
      </Field>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company website</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={fields.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>
      <button type="submit" className={`${primaryBtn} mt-2 w-full sm:w-fit`}>
        Start My Project
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium" htmlFor={id}>
      <span>
        {label}
        {required && <span className="text-brand-deep dark:text-brand"> *</span>}
      </span>
      <span className="mt-2 block font-normal">{children}</span>
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-xs font-medium text-red-700 dark:text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}
