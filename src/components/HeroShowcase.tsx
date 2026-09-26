import { useEffect, useState, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";
import { ArctaMini, CoachingMini, FootballMini, GardenMini, GasMini, PetsMini } from "./MiniSites";

const scenes = [
  { id: "plumbing", label: "Plumbing", url: "morecambegas.co.uk", node: <GasMini /> },
  { id: "football", label: "Football", url: "morecambegirlsfc.com", node: <FootballMini /> },
  { id: "landscaping", label: "Landscaping", url: "gpgardencare.co.uk", node: <GardenMini /> },
  { id: "coaching", label: "Coaching", url: "mncoaching.co.uk", node: <CoachingMini /> },
  { id: "pets", label: "Pet services", url: "happytailsnorthwest.com", node: <PetsMini /> },
  { id: "professional", label: "Professional", url: "arctagroup.ae", node: <ArctaMini /> },
];

const slots = {
  front: { left: "16%", top: "12%", width: "66%", rotate: "0deg", opacity: 1, depth: 18, z: 30, float: "" },
  left: { left: "0%", top: "4%", width: "56%", rotate: "-7deg", opacity: 1, depth: 10, z: 10, float: "float-slower" },
  right: { left: "46%", top: "18%", width: "52%", rotate: "6deg", opacity: 1, depth: 7, z: 20, float: "float-slow" },
  hidden: { left: "28%", top: "18%", width: "40%", rotate: "0deg", opacity: 0, depth: 0, z: 0, float: "" },
} as const;

function slotFor(index: number, active: number) {
  const count = scenes.length;
  if (index === active) return "front";
  if (index === (active + count - 1) % count) return "left";
  if (index === (active + 1) % count) return "right";
  return "hidden";
}

export default function HeroShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % scenes.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [reduce, paused]);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--px", x.toFixed(3));
    event.currentTarget.style.setProperty("--py", y.toFixed(3));
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={(event) => {
        setPaused(false);
        event.currentTarget.style.setProperty("--px", "0");
        event.currentTarget.style.setProperty("--py", "0");
      }}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p className="sr-only" aria-live="polite">
        Showing a {scenes[active].label.toLowerCase()} website preview
      </p>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        {scenes.map((scene) => (
          <div key={scene.id} className="w-[86%] shrink-0 snap-center">
            <BrowserFrame url={scene.url}>
              <div className="h-full" aria-hidden="true">
                {scene.node}
              </div>
            </BrowserFrame>
            <p className="mt-3 text-center text-xs font-medium tracking-[0.16em] text-slate-500 uppercase">
              {scene.label}
            </p>
          </div>
        ))}
      </div>

      <div
        className="relative hidden h-[540px] lg:block"
        onMouseMove={onMove}
        style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-6"
        >
          <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-brand/80" />
          <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-brand/80" />
          <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-brand/80" />
          <span className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-brand/80" />
        </div>
        {scenes.map((scene, index) => {
          const slot = slots[slotFor(index, active)];
          return (
            <div
              key={scene.id}
              aria-hidden={slot.opacity === 0}
              className={`absolute ease-out ${slot.float} ${
                slot.opacity === 0 ? "pointer-events-none" : ""
              }`}
              style={{
                left: slot.left,
                top: slot.top,
                width: slot.width,
                zIndex: slot.z,
                opacity: slot.opacity,
                rotate: slot.rotate,
                transform: `translate3d(calc(var(--px) * ${slot.depth}px), calc(var(--py) * ${slot.depth * 0.7}px), 0)`,
                transition: "left 700ms, top 700ms, width 700ms, opacity 700ms, rotate 700ms",
              }}
            >
              <BrowserFrame url={scene.url}>
                <div className="h-full">{scene.node}</div>
              </BrowserFrame>
            </div>
          );
        })}
      </div>

      <div
        className="mt-5 hidden flex-wrap gap-2 lg:flex"
        role="tablist"
        aria-label="Website previews by industry"
      >
        {scenes.map((scene, index) => {
          const selected = index === active;
          return (
            <button
              key={scene.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                selected
                  ? "bg-ink text-white dark:bg-white dark:text-ink"
                  : "text-slate-500 hover:text-ink dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {scene.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
