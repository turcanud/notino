import Image from "next/image";
import {
  CategoryName,
  CharacteristicsForCategory,
  Product,
  Review,
} from "@/types";
import Rating from "./Rating";
import AddToCartBtn from "./AddToCartBtn";
import FavoriteButton from "./FavoriteButton";
import {Box} from "lucide-react";
import {DialogContent, DialogTitle} from "./ui/dialog";
import {Separator} from "./ui/separator";
import {Card} from "./ui/card";

export default function ProductDetails<T extends CategoryName>({
  product,
}: {
  product: Product<CharacteristicsForCategory<T>>;
}) {
  return (
    <DialogContent className="max-w-[95vw] md:max-w-2xl p-0 overflow-y-auto max-h-[90vh]">
      <DialogTitle hidden>{product.nume}</DialogTitle>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <Image
          src={product.poza ?? "/placeholder.jpg"}
          alt={product.nume}
          width={400}
          height={400}
          className="object-contain w-[300px] h-[300px] mt-4"
        />

        {/* Info Section */}
        <div className="md:w-3/5 p-4 space-y-3">
          {product.promotie && (
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">
              {product.promotie}
            </span>
          )}

          <h3 className="text-lg font-semibold">{product.nume}</h3>
          <p className="text-sm text-gray-600">{product.categorie}</p>

          <Rating reviews={product.recenzii as Review[]} />

          <div className="text-xl font-bold">{product.pret} MDL</div>

          <div className="flex gap-2 py-2">
            <AddToCartBtn product={product} />
            <FavoriteButton product={product} />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Box className="w-4 h-4" />
            <span>Livrarea gratuită de la 385 MDL</span>
          </div>

          <Separator className="my-2" />

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Caracteristici</h4>
            <Card className="p-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {product.caracteristici && (
                  <>
                    <div>
                      <p className="text-gray-500">Brand</p>
                      <p>{product.caracteristici.brand}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Serie</p>
                      <p>{product.caracteristici.seria}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Țară</p>
                      <p>{product.caracteristici.tara}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Volum</p>
                      <p>{product.caracteristici.volum}</p>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Reviews Section - Only shown if reviews exist */}
      {(product.recenzii?.length ?? 0) > 0 && (
        <div className="border-t px-4 py-3">
          <h4 className="text-sm font-medium mb-2">Recenzii</h4>
          <div className="space-y-3">
            {product.recenzii?.map((recenzie) => (
              <Card key={recenzie.autor} className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">{recenzie.autor}</p>
                    <Rating reviews={[recenzie]} />
                  </div>
                  <p className="text-xs text-gray-500">{recenzie.data}</p>
                </div>
                {recenzie.comentariu && (
                  <p className="text-xs text-gray-700 mt-1">
                    {recenzie.comentariu}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </DialogContent>
  );
}
