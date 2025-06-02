import {fetchAllProducts} from "@/actions/products.actions";
import SearchBrowser from "@/components/SearchBrowser";
import {BaseProduct} from "@/types";

export default async function page() {
  const products = (await fetchAllProducts()) as BaseProduct[];

  return (
    <div className="flex flex-col gap-6">
      <SearchBrowser products={products} />
    </div>
  );
}
