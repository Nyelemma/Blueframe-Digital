const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const posts = [
  {
    network: "Instagram",
    title: "Before the kettle's on",
    text: "A Monday post that shows the work, not a stock sunrise.",
  },
  {
    network: "Facebook",
    title: "This week's openings",
    text: "A simple local update people can actually act on.",
  },
  {
    network: "LinkedIn",
    title: "How we take on new clients",
    text: "A plain explanation of the service, written like a person.",
  },
];

export default function SocialStudio() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-lift dark:border-white/10 dark:bg-[#0c1222]">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/10">
        <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Example studio
        </p>
        <p className="rounded-full bg-paper px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-500 uppercase dark:bg-white/5">
          Sample content
        </p>
      </div>
      <div className="grid gap-px bg-slate-200 lg:grid-cols-[0.8fr_1.2fr_0.8fr] dark:bg-white/10">
        <div className="bg-paper p-4 dark:bg-night">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
            Content calendar
          </p>
          <ul className="mt-4 space-y-2">
            {days.map((day, index) => (
              <li
                key={day}
                className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm dark:bg-white/5"
              >
                <span className="font-medium">{day}</span>
                <span className="text-xs text-slate-500">
                  {index % 2 === 0 ? "Post" : "Story"}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 bg-white p-4 dark:bg-[#0c1222]">
          {posts.map((post) => (
            <article key={post.network} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-brand-deep uppercase dark:text-brand">
                  {post.network}
                </p>
                <span className="text-[10px] font-medium tracking-wide text-slate-400 uppercase">
                  Example
                </span>
              </div>
              <h3 className="mt-2 text-sm font-semibold">{post.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{post.text}</p>
              <div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-[#dbe7ff] to-[#9ebfff] dark:from-[#12305f] dark:to-[#1e73ff]" />
            </article>
          ))}
        </div>
        <div className="bg-paper p-4 dark:bg-night">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
            Example analytics
          </p>
          <p className="mt-2 text-xs text-slate-500">Illustrative figures, not a client report.</p>
          <div className="mt-6 flex h-36 items-end gap-2">
            {[42, 68, 54, 80, 62, 90, 74].map((height) => (
              <div key={height} className="flex-1 rounded-t-md bg-brand-deep/80" style={{ height: `${height}%` }} />
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Reach across a sample week</p>
        </div>
      </div>
    </div>
  );
}
