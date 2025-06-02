"use client";
import {useFavorites} from "@/components/FavoritesContext";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  const {favorites} = useFavorites();

  return (
    <div className="flex flex-col items-center sm:mx-20 mx-8">
      <h2 className="text-lg font-semibold mb-4">
        {favorites.length} produse favorite
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
