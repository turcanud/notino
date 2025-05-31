import {CarouselSize} from "@/components/CarouselSize";
import Image from "next/image";
import {fetchAllProducts} from "@/actions/products.actions";
import {BaseProduct} from "@/types";

export default async function Home() {
  const products = (await fetchAllProducts()) as BaseProduct[];

  return (
    <div className="flex flex-col items-center gap-5 min-w-[70%]">
      <Image
        src="/assets/main/main-pic.png"
        alt="Description"
        width={1000}
        height={500}
      />
      <p className="uppercase text-[20px] font-medium">Produse Populare</p>
      <CarouselSize products={products} promotion={"HIT"} />
      <Image
        src="/assets/main/middle-pic.png"
        alt="Description"
        width={1000}
        height={500}
      />
      <p className="uppercase text-[20px] font-medium">Nou</p>
      <CarouselSize products={products} promotion={"NEW"} />
      <div className="h-20"></div>
    </div>
  );
}
