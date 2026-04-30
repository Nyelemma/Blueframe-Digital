import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "hello@blueframe.digital";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New website enquiry — ${form.business || form.name || "Blueframe"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-brand-gradient p-1 shadow-lift"
        >
          <div className="grid grid-cols-1 gap-10 rounded-[calc(1.5rem-2px)] bg-white p-8 md:grid-cols-2 md:p-12 dark:bg-navy-soft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gradient">
                Let's build it
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Get Your Website Live This Week.
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Simple. Affordable. Effective. Tell us about your business and
                we'll come back within one working day with a plan and a price
                — no obligation.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <Bullet>Free, no-pressure quote</Bullet>
                <Bullet>Reply within 1 working day</Bullet>
                <Bullet>UK-based, real humans</Bullet>
              </ul>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-to hover:underline dark:text-brand-from"
              >
                Or email {CONTACT_EMAIL}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                required
              />
              <Field
                label="Business name"
                name="business"
                value={form.business}
                onChange={(v) => setForm((f) => ({ ...f, business: v }))}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                required
              />
              <label className="grid gap-2 text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  What do you need?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="A short description of your business and what you'd like the site to do."
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-navy shadow-soft outline-none transition focus:border-brand-from focus:ring-2 ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus-visible:ring-2 ring-brand"
              >
                Send enquiry
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Submitting opens your email app pre-filled. We'll never share
                your details.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-slate-700 dark:text-slate-200">
        {label}
        {required && <span className="text-brand-from"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-navy shadow-soft outline-none transition focus:border-brand-from focus:ring-2 ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400"
      />
    </label>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <svg
        className="mt-0.5 h-5 w-5 flex-none text-brand-from"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m5 12 4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
