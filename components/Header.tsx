import { site } from "@/data/site";

export function Header() {
  return (
    <header>
      <p className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
        {site.title}
      </p>
    </header>
  );
}
