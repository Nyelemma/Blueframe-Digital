import type { ReactNode } from "react";

type Props = {
  url: string;
  children: ReactNode;
  className?: string;
};

export default function BrowserFrame({ url, children, className = "" }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lift dark:border-white/10 dark:bg-[#0c1222] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-slate-200/90 px-3 py-2.5 dark:border-white/10">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-slate-200 dark:bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-slate-200 dark:bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-slate-200 dark:bg-white/15" />
        </span>
        <p className="min-w-0 flex-1 truncate rounded-md bg-slate-100 px-2.5 py-1 text-center text-[10px] tracking-wide text-slate-500 dark:bg-white/5 dark:text-slate-400">
          {url}
        </p>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#101826]">
        {children}
      </div>
    </div>
  );
}
