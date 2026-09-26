import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Crumb = { label: string; to?: string };

export default function PageHeader({
  eyebrow,
  title,
  children,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <header className="mx-auto max-w-[1120px] px-5 pt-8 pb-4 sm:px-6 md:pt-12">
      {crumbs && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.to ? (
                  <Link to={crumb.to} className="inline-flex min-h-8 items-center hover:text-ink dark:hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink dark:text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-[16ch] text-[2rem] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {children && (
        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {children}
        </div>
      )}
    </header>
  );
}
