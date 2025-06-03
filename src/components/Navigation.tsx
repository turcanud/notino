import Link from "next/link";
import {ModeToggle} from "./Navigation/ModeToggle";
import NavLinks from "./Navigation/NavLinks";
import ActionLinks from "./Navigation/ActionLinks";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6">
      <div className="flex items-center justify-between min-h-[60px] sm:min-h-[72px]">
        <Link
          href="/"
          className="notino-link uppercase text-lg sm:text-xl lg:text-2xl tracking-widest font-bold select-none cursor-pointer">
          Notino
        </Link>
        <div className="flex gap-3 sm:gap-5 lg:gap-7 items-center">
          <ModeToggle />
          <ActionLinks />
        </div>
      </div>
      <NavLinks />
    </nav>
  );
}
