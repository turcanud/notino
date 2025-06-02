"use client";

import {CategoryName, CharacteristicsForCategory, Product} from "@/types";
import {useCallback, useState} from "react";
import ProductCard from "./ProductCard";
import {SearchBox} from "./Navigation/SearchBox";

const removeDiacritics = (str: string) => {
  return str
    .normalize("NFD") // Normalize to decomposed form (e.g., 'ș' → 's' + '̧')
    .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks
    .toLowerCase();
};

export default function SearchBrowser<T extends CategoryName>({
  products,
}: {
  products: Product<CharacteristicsForCategory<T>>[];
}) {
  const [searchedProducts, setSearchedProducts] = useState(products);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const normalizedSearchTerm = removeDiacritics(searchTerm);
      const filteredProducts = products.filter(
        (product) =>
          removeDiacritics(product.nume).includes(normalizedSearchTerm) ||
          removeDiacritics(product.categorie).includes(normalizedSearchTerm) ||
          removeDiacritics(product.caracteristici.tip_produs).includes(
            normalizedSearchTerm
          )
      );
      setSearchedProducts(filteredProducts);
    },
    [products]
  );

  return (
    <div className="flex flex-col items-center sm:mx-20 mx-8">
      <SearchBox onSearch={handleSearch} />
      <h2 className="text-lg font-semibold my-5">
        {searchedProducts.length} produse găsite
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
