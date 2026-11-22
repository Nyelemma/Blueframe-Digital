import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, routerBasename } from "./App";
import { ThemeProvider } from "./lib/theme";
import { HeadContext, type HeadData } from "./components/Seo";
import { routes } from "./lib/routes";

export { routes };

/** Render a route to static HTML, waiting for lazy pages to resolve. */
export function render(path: string): Promise<{ html: string; head: HeadData | null }> {
  const head: { current: HeadData | null } = { current: null };
  const base = routerBasename() ?? "";
  const location = `${base}${path === "/" ? "/" : path}`;

  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new PassThrough();
    sink.on("data", (chunk) => {
      html += chunk.toString();
    });
    sink.on("end", () => resolve({ html, head: head.current }));
    sink.on("error", reject);

    const stream = renderToPipeableStream(
      <HeadContext.Provider value={head}>
        <ThemeProvider>
          <StaticRouter basename={base || undefined} location={location}>
            <AppRoutes />
          </StaticRouter>
        </ThemeProvider>
      </HeadContext.Provider>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onShellError: reject,
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
