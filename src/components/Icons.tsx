type IconName =
  | "design"
  | "mobile"
  | "seo"
  | "speed"
  | "convert"
  | "manage"
  | "secure"
  | "support"
  | "arrow"
  | "check"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "calendar"
  | "pen"
  | "send"
  | "caption"
  | "brand"
  | "refresh";

const paths: Record<Exclude<IconName, "arrow" | "check" | "sun" | "moon" | "menu" | "close">, string> = {
  design:
    "M4 16.5 12 4l8 12.5M7 14h10M9.5 19.5h5",
  mobile:
    "M8 3.5h8A1.5 1.5 0 0 1 17.5 5v14A1.5 1.5 0 0 1 16 20.5H8A1.5 1.5 0 0 1 6.5 19V5A1.5 1.5 0 0 1 8 3.5ZM10 18h4",
  seo: "M5 16.5 9.5 8l3 4.5L16 7l3 9.5M4.5 19.5h15",
  speed: "M5 15a7 7 0 1 1 14 0M12 15l4-5",
  convert: "M5 8h9M12 5l3 3-3 3M19 16H10M12 13l-3 3 3 3",
  manage: "M6 6.5h12v11H6zM6 10h12M9 6.5V5M15 6.5V5",
  secure: "M12 3.5 19 6.5v6.2c0 3.6-2.7 6.2-7 7.8-4.3-1.6-7-4.2-7-7.8V6.5L12 3.5Z",
  support: "M12 20.5a8.5 8.5 0 1 0-8.5-8.5v2.2L6 16.5M9 11.2h.01M12 11.2h.01M15 11.2h.01",
  calendar: "M6 5.5h12v13H6zM6 9.5h12M9 4v3M15 4v3",
  pen: "M13.5 5.5 18.5 10.5 8 21H3v-5L13.5 5.5Z",
  send: "M4 12 20 4l-6 16-2.5-6.5L4 12Z",
  caption: "M5 6.5h14v11H5zM8 10.5h8M8 14h5",
  brand: "M12 4.5 14.2 9l5 .6-3.8 3.4.9 4.9L12 15.6 7.7 17.9l.9-4.9L4.8 9.6l5-.6L12 4.5Z",
  refresh: "M19 12a7 7 0 1 1-2-4.9M19 4.5V9h-4.5",
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  if (name === "arrow") {
    return (
      <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
        <path
          d="M3.5 8.5 6.5 11.5 12.5 4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "moon") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path
          d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
