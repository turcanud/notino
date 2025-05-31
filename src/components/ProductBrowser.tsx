"use client";

import {CategoryName, CharacteristicsForCategory, Product} from "@/types";
import {useCallback, useState} from "react";
import {FilterSection} from "./FilterSection";
import {ProductGrid} from "./ProductGrid";
import {Separator} from "./ui/separator";

export default function ProductBrowser<T extends CategoryName>({
  products,
}: {
  products: Product<CharacteristicsForCategory<T>>[];
}) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = useCallback(
    (selectedTypes?: string[], priceRange?: [number, number]) => {
      if (!selectedTypes?.length && !priceRange) {
        setFilteredProducts(products);
        return;
      }

      const filtered = products.filter((product) => {
        const matchesType =
          !selectedTypes?.length ||
          selectedTypes.includes(product.caracteristici.tip_produs);

        const price = product.pret;
        const matchesPrice =
          !priceRange || (price >= priceRange[0] && price <= priceRange[1]);

        return matchesType && matchesPrice;
      });

      setFilteredProducts(filtered);
    },
    [products]
  );

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 sm:flex flex-row">
      <FilterSection<T> products={products} onFilterChange={handleFilter} />
      <div>
        <Separator orientation="vertical" className="mx-4" />
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
