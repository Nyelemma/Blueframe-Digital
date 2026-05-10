import Logo from "./Logo";

type Props = {
  theme: "light" | "dark";
};

export default function Footer({ theme }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-surface-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo size={28} theme={theme} />
          <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
            Premium websites for local businesses, starting from £99. UK-built,
            UK-supported.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm text-slate-500 md:items-end dark:text-slate-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#why" className="hover:text-navy dark:hover:text-white">
              Why us
            </a>
            <a href="#process" className="hover:text-navy dark:hover:text-white">
              Process
            </a>
            <a href="#pricing" className="hover:text-navy dark:hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="hover:text-navy dark:hover:text-white">
              Contact
            </a>
          </div>
          <p className="mt-2">
            © {year} Blueframe Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
