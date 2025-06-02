"use client";
import Link from "next/link";
import {Button} from "../ui/button";
import {Heart} from "lucide-react";
import {usePathname} from "next/navigation";
import {useFavorites} from "@/context/FavoritesContext";

export default function FavoriteLinkBtn() {
  const pathname = usePathname();
  const {favorites} = useFavorites();

  return (
    <Link href="/favorites" aria-label="Favorites">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10">
          {pathname === "/favorites" ? (
            <Heart className="h-5 w-5" color="#EC4067" />
          ) : (
            <Heart className="h-5 w-5" />
          )}
        </Button>
        {favorites.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#EC4067] text-white text-xs font-bold h-4 w-4 sm:h-5 sm:w-5 rounded-full flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </div>
    </Link>
  );
}
