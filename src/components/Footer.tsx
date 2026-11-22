import { Link } from "react-router-dom";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import Icon from "./Icons";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../lib/site";
import { servicePath, services } from "../lib/services";

const linkClass =
  "inline-flex min-h-11 items-center text-slate-600 transition hover:text-ink dark:text-slate-400 dark:hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-night">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo className="h-20 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Modern websites and digital services for small businesses.
          </p>
          <WhatsAppButton className="mt-5" />
          <ul className="mt-5 flex gap-2" aria-label="Blueframe Digital on social media">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand-deep dark:border-white/10 dark:text-slate-300 dark:hover:border-brand/50 dark:hover:text-brand"
                >
                  <Icon name={social.icon} className="h-5 w-5" />
                  <span className="sr-only">{social.label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Services">
          <h2 className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">Services</h2>
          <ul className="mt-2 grid gap-y-1 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={servicePath(service.slug)} className={linkClass}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer">
          <h2 className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">Company</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
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
