import {fetchProducts} from "@/actions/products.actions";
// import {FilterSection} from "@/components/FilterSection";
import ProductBrowser from "@/components/ProductBrowser";
import {Separator} from "@/components/ui/separator";
// import ProductCard from "@/components/ProductCard";
import {MakeupProduct} from "@/types";
import Image from "next/image";

export default async function Page() {
  const lipsMakeup = await fetchProducts("machiaj_buze");
  const eyesMakeup = await fetchProducts("machiaj_ochi");
  const products: MakeupProduct[] = [...lipsMakeup, ...eyesMakeup];

  return (
    <div className="px-4 sm:px-6 lg:px-16 flex flex-col gap-6 items-center">
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
      <Separator />
      <h1 className="uppercase text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-6">
        Machiaj
      </h1>
      <ProductBrowser products={products} />
    </div>
  );
}
