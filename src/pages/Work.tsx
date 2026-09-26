import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import PortfolioGrid from "../components/PortfolioGrid";
import FinalCta from "../components/FinalCta";
import { PAGE_META } from "../lib/site";
import { breadcrumbNode, graph, organizationNode } from "../lib/schema";

export default function Work() {
  const meta = PAGE_META.work;
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
            { name: "Our Work", path: "/work" },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Our work"
        title="Built by Blueframe Digital."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Our Work" },
        ]}
      >
        Real websites. Real businesses. Real results. Each one opens in a new tab.
      </PageHeader>
      <div className="mx-auto max-w-[1120px] px-5 pt-6 pb-20 sm:px-6">
        <PortfolioGrid showFilters />
      </div>
      <FinalCta />
    </>
  );
}
