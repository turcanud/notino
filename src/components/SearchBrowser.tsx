"use client";

import {BaseProduct} from "@/types";
import {useCallback, useState} from "react";
import ProductCard from "./ProductCard";
import {SearchBox} from "./Navigation/SearchBox";

export default function SearchBrowser({products}: {products: BaseProduct[]}) {
  const [searchedProducts, setSearchedProducts] = useState(products);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const filteredProducts = products.filter((product) =>
        product.nume.toLowerCase().includes(searchTerm.toLowerCase())
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
