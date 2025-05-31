import {fetchProducts} from "@/actions/products.actions";
import ProductBrowser from "@/components/ProductBrowser";
import {Separator} from "@/components/ui/separator";
import {CharacteristicsForCategory, Product} from "@/types";
import Image from "next/image";

export default async function Page() {
  const products: Product<CharacteristicsForCategory<"par">>[] =
    await fetchProducts("par");

  return (
    <div className="px-4 sm:px-6 lg:px-16 flex flex-col gap-6 items-center">
      <div className="w-full max-w-5xl">
        <Image
          src="/assets/main/par-main.png"
          alt="Description"
          width={1000}
          height={500}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <Separator />
      <h1 className="uppercase text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-6">
        Păr
      </h1>
      <ProductBrowser<"par"> products={products} />
    </div>
  );
}
