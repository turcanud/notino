"use client";
import {Heart, Search} from "lucide-react";
import Link from "next/link";
import {Button} from "../ui/button";
import {usePathname} from "next/navigation";
import CartButton from "./CartButton";

export default function ActionLinks() {
  const pathname = usePathname();
  return (
    <>
      <Link href="/search" aria-label="Search products">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full">
          {pathname === "/search" ? (
            <Search className="h-5 w-5" color="blue" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </Link>
      <Link href="/favorites" aria-label="Favorites">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10">
          {pathname === "/favorites" ? (
            <Heart className="h-5 w-5" color="red" fill="red" />
          ) : (
            <Heart className="h-5 w-5" />
          )}
        </Button>
      </Link>
      <CartButton />
    </>
  );
}
