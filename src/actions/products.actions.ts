import {ProductCategories} from "@/types";

export async function fetchAllProducts() {
  const response = await fetch("src/data/produse.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: ProductCategories = await response.json();
  const allProductsArray = [
    ...data.par,
    ...data.parfumuri,
    ...data.corp,
    ...data.machiaj_ochi,
    ...data.machiaj_buze,
  ];
  return allProductsArray;
}
