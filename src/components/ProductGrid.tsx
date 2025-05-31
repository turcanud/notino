import {BaseProduct} from "@/types";
import ProductCard from "./ProductCard";

export function ProductGrid({products}: {products: BaseProduct[]}) {
  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">
        {products.length} produse găsite
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
