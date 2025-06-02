"use client";
import {Button} from "./ui/button";
import {Heart} from "lucide-react";
import {BaseProduct} from "@/types";
import {useFavorites} from "../context/FavoritesContext";

export default function FavoriteButton({product}: {product: BaseProduct}) {
  const {addToFavorites, removeFromFavorites, isFavorite} = useFavorites();
  const favorite = isFavorite(product.id);
  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };
  return (
    <Button
      onClick={toggleFavorite}
      variant={"outline"}
      size={"icon"}
      className="rounded-full cursor-pointer flex-shrink-0">
      {favorite ? (
        <Heart className="w-5 h-5" fill="#EC4067" color="#EC4067" />
      ) : (
        <Heart className="w-5 h-5" />
      )}
    </Button>
  );
}
