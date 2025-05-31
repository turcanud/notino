import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {BaseProduct} from "@/types";
import ProductCard from "./ProductCard";

export function CarouselSize({
  products,
  promotion,
}: {
  products: BaseProduct[];
  promotion?: BaseProduct["promotie"];
}) {
  return (
    <Carousel
      className="sm:w-[90%] w-[80%]"
      opts={{
        align: "start",
        loop: false,
        slidesToScroll: 1,
      }}>
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
