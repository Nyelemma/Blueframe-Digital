import { assetUrl } from "../lib/site";

type Props = {
  className?: string;
};

export default function Logo({ className = "h-16 w-auto" }: Props) {
  return (
    <img
      src={assetUrl("brand/blueframe-logo.svg")}
      alt="Blueframe Digital"
      width={320}
      height={200}
      className={className}
    />
  );
}
