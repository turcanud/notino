"use client";
import {Heart, ShoppingBag} from "lucide-react";
import Link from "next/link";
import {Button} from "../ui/button";
import {usePathname} from "next/navigation";

export default function FavoritesAndBag() {
  const pathname = usePathname();
  return (
    <>
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
      <Link href="/cart" aria-label="Shopping Cart">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10">
          {pathname === "/cart" ? (
            <ShoppingBag className="h-5 w-5" color="green" />
          ) : (
            <ShoppingBag className="h-5 w-5" />
          )}
        </Button>
      </Link>
    </>
  );
}
