function Bar({
  dark = false,
  name,
  links,
}: {
  dark?: boolean;
  name: string;
  links: string[];
}) {
  return (
    <div
      className={`flex items-center justify-between px-3.5 py-2.5 ${
        dark ? "bg-[#0f172a] text-white" : "border-b border-black/5 bg-white text-[#0f172a]"
      }`}
    >
      <span className="text-[10px] font-semibold tracking-[0.14em] uppercase">{name}</span>
      <span className={`flex gap-2.5 text-[8px] ${dark ? "text-white/60" : "text-slate-400"}`}>
        {links.map((link) => (
          <span key={link}>{link}</span>
        ))}
      </span>
    </div>
  );
}

export function GasMini() {
  return (
    <div className="flex h-full flex-col bg-[#f4f7fb] text-[#0f172a]">
      <Bar dark name="Morecambe Gas" links={["Services", "Areas", "Contact"]} />
      <div className="grid flex-1 grid-cols-5">
        <div className="col-span-3 flex flex-col justify-center px-4 py-3">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#0052cc]">
            Morecambe · Lancaster
          </p>
          <p className="mt-1.5 text-[15px] font-semibold leading-[1.05] tracking-tight">
            Boiler care for homes across the bay.
          </p>
          <p className="mt-2 text-[9px] leading-relaxed text-slate-500">
            Servicing, repairs and installations, explained clearly.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-[#0052cc] px-2.5 py-1 text-[8px] font-semibold text-white">
            Book a visit
          </span>
        </div>
        <div className="col-span-2 m-3 rounded-xl bg-[#0f172a] p-3 text-white">
          <p className="text-[8px] text-white/50">On the site</p>
          {["Boilers", "Gas fires", "Heating"].map((item) => (
            <p key={item} className="mt-2 border-t border-white/10 pt-2 text-[10px] font-medium">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FootballMini() {
  return (
    <div className="flex h-full flex-col bg-[#07111f] text-white">
      <div className="flex items-center justify-between px-3.5 py-2.5">
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase">
          Morecambe Girls FC
        </span>
        <span className="text-[8px] text-white/50">Morecambe</span>
      </div>
      <div className="relative flex flex-1 flex-col justify-end overflow-hidden px-4 pb-4">
        <div
          className="absolute inset-x-4 top-2 h-[46%] rounded-xl"
          style={{
            background:
              "repeating-linear-gradient(90deg, #146b34 0 18px, #187a3b 18px 36px)",
          }}
        />
        <p className="relative text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8eb6ff]">
          Girls' football
        </p>
        <p className="relative mt-1 max-w-[14ch] text-[16px] font-semibold leading-[1.02] tracking-tight">
          A proper home for the club.
        </p>
      </div>
    </div>
  );
}

export function GardenMini() {
  return (
    <div className="flex h-full flex-col bg-[#f7f6f1] text-[#142018]">
      <Bar name="GP Garden Care" links={["Lawns", "Hedges", "Quote"]} />
      <div className="grid flex-1 grid-cols-2 gap-3 p-3">
        <div className="flex flex-col justify-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#3f6b45]">
            Lancaster · Morecambe
          </p>
          <p className="mt-1.5 text-[15px] font-semibold leading-[1.05] tracking-tight">
            Gardens worth coming home to.
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full bg-[#1f3d2b] px-2.5 py-1 text-[8px] font-semibold text-white">
            Ask for a quote
          </span>
        </div>
        <div
          className="rounded-xl"
          style={{
            background:
              "linear-gradient(160deg, #d7e4cf, #7ea36a 45%, #2f4a34)",
          }}
        />
      </div>
    </div>
  );
}

export function CoachingMini() {
  return (
    <div className="flex h-full flex-col bg-white text-[#0f172a]">
      <Bar name="MN Coaching" links={["1-to-1", "Kids", "Book"]} />
      <div className="flex flex-1 flex-col justify-between px-4 py-3">
        <div>
          <p className="text-[18px] font-semibold leading-[0.98] tracking-tight">
            Train with intent.
          </p>
          <p className="mt-2 max-w-[24ch] text-[9px] leading-relaxed text-slate-500">
            Football coaching in Morecambe, Lancaster and nearby.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["1-to-1", "Kids", "Groups"].map((item) => (
            <div key={item} className="rounded-lg bg-[#0f172a] px-2 py-2 text-[8px] font-semibold text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PetsMini() {
  return (
    <div className="flex h-full flex-col bg-[#fbf7f2] text-[#2a211c]">
      <Bar name="Happy Tails" links={["Sitting", "Boarding", "Enquire"]} />
      <div className="flex flex-1 flex-col justify-center px-4">
        <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#9a5b3c]">
          Southport
        </p>
        <p className="mt-1.5 max-w-[16ch] text-[16px] font-semibold leading-[1.05] tracking-tight">
          Home-from-home pet care.
        </p>
        <div className="mt-3 flex gap-1.5">
          {["Sitting", "Boarding", "Cats"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#e6d9cf] bg-white px-2 py-1 text-[8px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ArctaMini() {
  return (
    <div className="flex h-full flex-col bg-[#f5f7fa] text-[#0f172a]">
      <Bar name="Arcta Group" links={["AC", "Water", "Snagging"]} />
      <div className="grid flex-1 grid-cols-2">
        <div className="flex flex-col justify-center px-4">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#0052cc]">
            UAE
          </p>
          <p className="mt-1.5 text-[15px] font-semibold leading-[1.05] tracking-tight">
            Property care, considered.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-slate-200">
          {["Maintenance", "Filtration", "Inspections"].map((item) => (
            <div key={item} className="flex items-center bg-white px-3 text-[9px] font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const MINIS = {
  gas: GasMini,
  football: FootballMini,
  garden: GardenMini,
  coaching: CoachingMini,
  pets: PetsMini,
  arcta: ArctaMini,
} as const;
