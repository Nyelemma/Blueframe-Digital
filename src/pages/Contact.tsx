import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import FinalCta from "../components/FinalCta";
import WhatsAppButton from "../components/WhatsAppButton";
import { CONTACT_EMAIL, PAGE_META } from "../lib/site";
import { breadcrumbNode, graph, organizationNode } from "../lib/schema";

export default function Contact() {
  const meta = PAGE_META.contact;
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={graph(
          organizationNode(),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Contact" },
        ]}
      >
        Tell us a little about your business and what you need. We'll take it from there.
      </PageHeader>
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="h-fit rounded-[1.6rem] border border-slate-200 p-6 dark:border-white/10">
          <h2 className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">Email</h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 block text-lg font-semibold text-brand-deep dark:text-brand"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Prefer to write it yourself? Email us directly. Websites start from £199. Online stores start from £15 a month. Social media management starts from £99 a month.
          </p>
          <h2 className="mt-8 text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">WhatsApp</h2>
          <WhatsAppButton className="mt-3 w-full" />
        </aside>
        <ContactForm />
      </div>
      <FinalCta />
    </>
  );
}
