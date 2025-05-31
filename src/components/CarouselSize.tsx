import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {BaseProduct} from "@/types";
import ProductForCarousel from "./ProductForCarousel";

export function CarouselSize({
  products,
  promotion,
}: {
  products: BaseProduct[];
  promotion?: BaseProduct["promotie"];
}) {
  return (
    <Carousel className="min-w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {products
          .filter((product) => product.promotie === promotion)
          .map((product) => (
            <CarouselItem key={product.id} className="basis-1/6 select-none">
              <div className="p-1">
                <ProductForCarousel product={product} />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
