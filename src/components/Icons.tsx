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
  | "refresh"
  | "whatsapp";

const paths: Record<Exclude<IconName, "arrow" | "check" | "sun" | "moon" | "menu" | "close" | "whatsapp">, string> = {
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

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.9c-.24.68-1.4 1.25-1.93 1.33-.49.07-1.1.1-1.78-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.44.03.64.49.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.13-.28.28-.12.54.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.42.11.58-.07.16-.17.67-.78.85-1.05.18-.26.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.2.5.31.07.11.07.64-.17 1.32Z"
        />
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
