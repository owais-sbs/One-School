import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  className?: string;
  light?: boolean;
};

export default function BrandLogo({
  href = "/",
  className = "",
  light = false,
}: BrandLogoProps) {
  const content = (
    <span
      className={`inline-flex items-baseline text-xl font-semibold tracking-tight ${
        light ? "text-white" : "text-slate-900"
      } ${className}`}
    >
      One School
      <span
        aria-hidden
        className={`ml-1 inline-block h-1.5 w-1.5 shrink-0 translate-y-[-0.5px] rounded-[1.5px] ${
          light ? "bg-blue-400" : "bg-blue-600"
        }`}
      />
    </span>
  );

  if (href === "") {
    return content;
  }

  return (
    <Link href={href} className="inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}
