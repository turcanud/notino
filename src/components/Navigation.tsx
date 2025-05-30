import Link from "next/link";
import {SearchBox} from "./Navigation/SearchBox";
import {ModeToggle} from "./Navigation/ModeToggle";
import {ShoppingBag, Heart} from "lucide-react";
import {Button} from "./ui/button";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-5 mx-[70px]">
      <div className="flex items-center justify-between h-20">
        <Link
          href="/"
          className="uppercase text-xl tracking-widest font-bold select-none cursor-pointer">
          Notino
        </Link>
        <div className="flex gap-7 items-center justify-between">
          <ModeToggle />
          <SearchBox />
          <Link href="/favorites" className="cursor-pointer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer">
              <Heart />
            </Button>
          </Link>
          <Link href="/cart" className="cursor-pointer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer">
              <ShoppingBag />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 uppercase">
        <Link
          href="/machiaj"
          className="font-bold hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Machiaj
        </Link>
        <Link
          href="/par"
          className="font-bold hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Păr
        </Link>
        <Link
          href="/corp"
          className="font-bold hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Corp
        </Link>
        <Link
          href="/parfumuri"
          className="font-bold hover:text-gray-600 cursor-pointer transition-colors duration-200">
          Parfumuri
        </Link>
      </div>
    </nav>
  );
}
