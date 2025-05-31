import {Button} from "./ui/button";
import Rating from "./Rating";
import {BaseProduct, Review} from "@/types";
import Image from "next/image";
import {Heart} from "lucide-react";
import {Card, CardContent} from "./ui/card";

export default function ProductCard({product}: {product: BaseProduct}) {
  return (
    <Card key={product.id} className="select-none">
      <CardContent className="w-[305px] flex flex-col justify-between shrink-0">
        {product.promotie && (
          <div className="px-4 pt-4">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {product.promotie}
            </span>
          </div>
        )}

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

        <div className="p-3 flex flex-col justify-between">
          <h2 className="text-lg font-bold truncate">{product.nume}</h2>
          <h3 className="text-sm text-gray-400 mb-2">{product.categorie}</h3>
          <div className="flex justify-between items-center">
            <span className="text-md font-light">{product.volum}</span>
            <span className="text-md font-medium">{product.pret}</span>
          </div>

          <Rating reviews={product.recenzii as Review[]} />

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
