import Icon from "./Icons";
import { primaryBtn } from "../lib/classes";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "../lib/site";

type Props = {
  className?: string;
};

export default function WhatsAppButton({ className = "" }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${primaryBtn} max-w-full flex-wrap px-4 text-center ${className}`}
    >
      <Icon name="whatsapp" className="h-4 w-4" />
      WhatsApp
      <span className="font-medium text-white/80">{WHATSAPP_DISPLAY}</span>
      <span className="sr-only">Opens WhatsApp in a new tab.</span>
    </a>
  );
}
