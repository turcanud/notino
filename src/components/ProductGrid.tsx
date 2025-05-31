import {MakeupProduct} from "@/types";
import ProductCard from "./ProductCard";

export function ProductGrid({products}: {products: MakeupProduct[]}) {
  return (
    <div className="min-w-full">
      <h2 className="text-lg font-semibold mb-4">
        {products.length} produse găsite
      </h2>
      <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
