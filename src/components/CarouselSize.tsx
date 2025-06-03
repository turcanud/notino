"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {GeneralProduct} from "@/types";
import ProductCard from "./ProductCard";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize({
  products,
  promotion,
}: {
  products: GeneralProduct[];
  promotion?: GeneralProduct["promotie"];
}) {
  const plugin = React.useRef(Autoplay({delay: 3500, stopOnInteraction: true}));
  return (
    <Carousel plugins={[plugin.current]} className="sm:w-[90%] w-[80%]">
      <CarouselContent className="">
        {products
          .filter((product) => product.promotie === promotion)
          .map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 basis-[320px] min-w-[320px] select-none">
              <div className="p-2">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
