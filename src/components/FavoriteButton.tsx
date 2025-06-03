"use client";
import {Button} from "./ui/button";
import {Heart} from "lucide-react";
import {GeneralProduct} from "@/types";
import {useFavorites} from "../context/FavoritesContext";
import {toast} from "sonner";

export default function FavoriteButton({product}: {product: GeneralProduct}) {
  const {addToFavorites, removeFromFavorites, isFavorite} = useFavorites();
  const favorite = isFavorite(product.id);
  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id);
      toast.error("Produsul a fost eliminat din favorite!");
    } else {
      addToFavorites(product);
      toast.success("Produsul a fost adăugat în favorite!");
    }
  };

  return (
    <Button
      onClick={toggleFavorite}
      variant={"outline"}
      size={"icon"}
      className="rounded-full cursor-pointer flex-shrink-0 transition-all duration-200 hover:scale-105 active:scale-95">
      {favorite ? (
        <Heart className="w-5 h-5" fill="#EC4067" color="#EC4067" />
      ) : (
        <Heart className="w-5 h-5" />
      )}
    </Button>
  );
}
