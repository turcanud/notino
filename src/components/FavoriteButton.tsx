"use client";
import {Button} from "./ui/button";
import {Heart} from "lucide-react";
import {BaseProduct} from "@/types";
import {useFavorites} from "./FavoritesContext";

export default function FavoriteButton({product}: {product: BaseProduct}) {
  const {addToFavorites, removeFromFavorites, isFavorite} = useFavorites();
  const favorite = isFavorite(product.id.toString());
  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id.toString());
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
        <Heart className="w-5 h-5" fill="red" color="red" />
      ) : (
        <Heart className="w-5 h-5" />
      )}
    </Button>
  );
}
