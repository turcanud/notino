import {fetchProducts} from "@/actions/products.actions";
import {FilterSection} from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import {MakeupProduct} from "@/types";
import Image from "next/image";

export default async function page() {
  const lipsMakeup = await fetchProducts("machiaj_buze");
  const eyesMakeup = await fetchProducts("machiaj_ochi");
  const products: MakeupProduct[] = [...lipsMakeup, ...eyesMakeup];
  return (
    <div className="mx-[70px] flex flex-col gap-6 items-center">
      <h1 className="uppercase text-center">Favorite</h1>
      <Image
        src="/assets/main/ochi-main.png"
        alt="Description"
        width={1000}
        height={500}
      />
      <div className="flex gap-10">
        <FilterSection products={products} />
        <div className="flex flex-wrap gap-4 justify-end items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
