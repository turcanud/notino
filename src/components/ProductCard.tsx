import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import Rating from "./Rating";
import {
  CategoryName,
  CharacteristicsForCategory,
  Product,
  Review,
} from "@/types";
import Image from "next/image";
import {Card, CardContent} from "./ui/card";
import FavoriteButton from "./FavoriteButton";
import AddToCartBtn from "./AddToCartBtn";
import ProductDetails from "./ProductDetails";

export default function ProductCard<T extends CategoryName>({
  product,
}: {
  product: Product<CharacteristicsForCategory<T>>;
}) {
  return (
    <Card key={product.id} className="select-none w-full max-w-[320px] mx-auto">
      <Dialog>
        <CardContent className="flex flex-col justify-between">
          <DialogTrigger asChild className="text-left cursor-pointer">
            <div>
              {product.promotie && (
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {product.promotie}
                  </span>
                </div>
              )}

              <div className="flex justify-center h-48 sm:h-64">
                <Image
                  src={product.poza ?? "/placeholder.jpg"}
                  alt={product.nume}
                  width={200}
                  height={200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-between mt-4 gap-2">
                <h2 className="text-base sm:text-lg font-bold truncate">
                  {product.nume}
                </h2>
                <h3 className="text-xs sm:text-sm text-gray-400">
                  {product.categorie}
                </h3>
                <div className="flex justify-between items-center text-sm sm:text-md">
                  <span className="font-light">{product.volum}</span>
                  <span className="font-medium">{product.pret} MDL</span>
                </div>

                <Rating reviews={product.recenzii as Review[]} />
              </div>
            </div>
          </DialogTrigger>
          <div className="flex justify-between items-center gap-2">
            <AddToCartBtn product={product} />
            <FavoriteButton product={product} />
          </div>
        </CardContent>
        <ProductDetails product={product} />
      </Dialog>
    </Card>
  );
}
