import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { primaryBtn, secondaryBtn } from "../lib/classes";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Blueframe Digital"
        description="That page isn't on the Blueframe Digital website."
        path="/404"
        noIndex
      />
      <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          That page isn't here.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          The link may be out of date. The work, the prices and the contact form are still where you'd expect.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={primaryBtn}>
            Back home
          </Link>
          <Link to="/work" className={secondaryBtn}>
            View our work
          </Link>
        </div>
      </div>
    </>
  );
}
