import {fetchAllProducts} from "@/actions/products.actions";
import SearchBrowser from "@/components/SearchBrowser";
import {
  BodyCharacteristics,
  HairCharacteristics,
  MakeupEyesCharacteristics,
  MakeupLipsCharacteristics,
  PerfumeCharacteristics,
  Product,
} from "@/types";

export default async function page() {
  const products = (await fetchAllProducts()) as Product<
    | HairCharacteristics
    | BodyCharacteristics
    | PerfumeCharacteristics
    | MakeupEyesCharacteristics
    | MakeupLipsCharacteristics
  >[];

  return (
    <div className="flex flex-col gap-6">
      <SearchBrowser products={products} />
    </div>
  );
}
