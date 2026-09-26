import { Link } from "react-router-dom";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { CONTACT_EMAIL, FOOTER_LINKS } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-night">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Logo className="h-20 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Modern websites and digital services for small businesses.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-block text-sm font-medium text-brand-deep hover:text-brand dark:text-brand"
          >
            {CONTACT_EMAIL}
          </a>
          <WhatsAppButton className="mt-4" />
        </div>
        <nav aria-label="Footer" className="md:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex min-h-11 items-center text-slate-600 transition hover:text-ink dark:text-slate-400 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-200 dark:border-white/10">
        <p className="mx-auto max-w-[1120px] px-5 py-5 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} Blueframe Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
