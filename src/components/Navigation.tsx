import Link from "next/link";
import {SearchBox} from "./Navigation/SearchBox";
import {ModeToggle} from "./Navigation/ModeToggle";
import {ShoppingBag, Heart} from "lucide-react";
import {Button} from "./ui/button";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6">
      <div className="flex items-center justify-between min-h-[60px] sm:min-h-[72px]">
        <Link
          href="/"
          className="uppercase text-lg sm:text-xl lg:text-2xl tracking-widest font-bold select-none cursor-pointer">
          Notino
        </Link>
        <div className="flex gap-3 sm:gap-5 lg:gap-7 items-center">
          <ModeToggle />
          <SearchBox />
          <Link href="/favorites" aria-label="Favorites">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart" aria-label="Shopping Cart">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 uppercase text-sm sm:text-base font-bold">
        <Link
          href="/machiaj"
          className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Machiaj
        </Link>
        <Link
          href="/par"
          className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Păr
        </Link>
        <Link
          href="/corp"
          className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Corp
        </Link>
        <Link
          href="/parfumuri"
          className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Parfumuri
        </Link>
      </div>
    </nav>
  );
}
