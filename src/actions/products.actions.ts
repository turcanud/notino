"use server";
import productsData from "@/data/produse.json";
import {CategoryName, CharacteristicsForCategory, Product} from "@/types";

export async function fetchAllProducts() {
  const data = productsData;
  const allProductsArray = [
    ...data.par,
    ...data.parfumuri,
    ...data.corp,
    ...data.machiaj_ochi,
    ...data.machiaj_buze,
  ];
  return allProductsArray;
}

export async function fetchProducts<T extends CategoryName>(
  category: T
): Promise<Product<CharacteristicsForCategory<T>>[]> {
  const data = productsData;
  return data[category] as Product<CharacteristicsForCategory<T>>[];
}
