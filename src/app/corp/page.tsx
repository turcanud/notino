import {fetchProducts} from "@/actions/products.actions";
import ProductBrowser from "@/components/ProductBrowser";
import {CharacteristicsForCategory, Product} from "@/types";
import {Separator} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default async function page() {
  const products: Product<CharacteristicsForCategory<"corp">>[] =
    await fetchProducts("corp");

  return (
    <div className="px-4 sm:px-6 lg:px-16 flex flex-col gap-6 items-center">
      <div className="w-full max-w-5xl">
        <Image
          src="/assets/main/corp-main.png"
          alt="Description"
          width={1000}
          height={500}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <Separator />
      <h1 className="uppercase text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-6">
        Baie și Corp
      </h1>
      <ProductBrowser<"corp"> products={products} />
    </div>
  );
}
