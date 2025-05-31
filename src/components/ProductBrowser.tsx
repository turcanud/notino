"use client";

import {MakeupProduct} from "@/types";
import {useCallback, useState} from "react";
import {FilterSection} from "./FilterSection";
import {ProductGrid} from "./ProductGrid";
import {Separator} from "./ui/separator";

export default function ProductBrowser({
  products,
}: {
  products: MakeupProduct[];
}) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = useCallback(
    (selectedTypes: string[]) => {
      if (selectedTypes.length === 0) {
        setFilteredProducts(products);
        return;
      }

      const filtered = products.filter((product) =>
        selectedTypes.includes(product.caracteristici.tip_produs)
      );
      setFilteredProducts(filtered);
    },
    [products]
  );

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-16 flex lg:flex-row">
      <FilterSection products={products} onFilterChange={handleFilter} />
      <div>
        <Separator orientation="vertical" className="mx-4" />
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
