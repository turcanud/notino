import {fetchProducts} from "@/actions/products.actions";
import {FilterSection} from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import {MakeupProduct} from "@/types";
import Image from "next/image";

export default async function Page() {
  const lipsMakeup = await fetchProducts("machiaj_buze");
  const eyesMakeup = await fetchProducts("machiaj_ochi");
  const products: MakeupProduct[] = [...lipsMakeup, ...eyesMakeup];

  return (
    <div className="px-4 sm:px-6 lg:px-16 flex flex-col gap-6 items-center min-h-screen">
      <h1 className="uppercase text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-6">
        Favorite
      </h1>
      <div className="w-full max-w-5xl">
        <Image
          src="/assets/main/ochi-main.png"
          alt="Description"
          width={1000}
          height={500}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="w-full lg:w-1/4">
          <FilterSection products={products} />
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
