import {BaseProduct, Review} from "@/types";
import React from "react";
import Image from "next/image";
import {Button} from "./ui/button";
import {Heart} from "lucide-react";
import {Card, CardContent} from "./ui/card";
import Rating from "./Rating";

export default function ProductForCarousel({product}: {product: BaseProduct}) {
  return (
    <Card key={product.id}>
      <CardContent className="h-110 flex flex-col justify-center">
        {product.promotie && (
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded w-fit">
            {product.promotie}
          </span>
        )}
        <div className="flex justify-center h-[250px]">
          <div className="p-4 flex justify-center h-[270px]">
            <Image
              src={product.poza ?? "/placeholder.jpg"}
              alt={product.nume}
              width={200}
              height={200}
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-[190px] flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold truncate">{product.nume}</h2>
            <h3 className="text-sm text-gray-400 mb-2">{product.categorie}</h3>
            <div className="flex justify-between items-center">
              <span className="text-md font-light">{product.volum}</span>
              <span className="text-md font-medium">{product.pret}</span>
            </div>
            <Rating reviews={product.recenzii as Review[]} />
          </div>
          <div className="flex justify-between items-center">
            <Button className="bg-[#9D182B] hover:bg-[#9D182B] text-white font-medium py-2 px-16 transition-colors duration-200 rounded-none cursor-pointer">
              Adaugă
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-full cursor-pointer">
              <Heart />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
