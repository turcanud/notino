"use client";
import {Search} from "lucide-react";
import Link from "next/link";
import {Button} from "../ui/button";
import {usePathname} from "next/navigation";
import CartButton from "./CartButton";
import FavoriteLinkBtn from "./FavoriteLinkBtn";

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
            <Search className="h-5 w-5" color="#7189FF" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </Link>
      <FavoriteLinkBtn />
      <CartButton />
    </>
  );
}
