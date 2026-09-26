import { assetUrl } from "../lib/site";

type Props = {
  className?: string;
};

export default function Logo({ className = "h-16 w-auto" }: Props) {
  return (
    <span className="inline-flex">
      <img
        src={assetUrl("brand/blueframe-logo-light.png")}
        alt="Blueframe Digital"
        width={484}
        height={320}
        className={`${className} dark:hidden`}
      />
      <img
        src={assetUrl("brand/blueframe-logo-dark.png")}
        alt="Blueframe Digital"
        width={484}
        height={320}
        className={`${className} hidden dark:block`}
      />
    </span>
  );
}
