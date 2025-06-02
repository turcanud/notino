"use client";
import {BaseProduct} from "@/types";
import {useCart} from "@/context/CartContext";
import {Button} from "./ui/button";
import {toast} from "sonner";

export default function AddToCartBtn({product}: {product: BaseProduct}) {
  const {addToCart, removeFromCart, isInCart} = useCart();
  const cart = isInCart(product.id);
  const toggleCart = () => {
    if (cart) {
      removeFromCart(product.id);
      toast.error("Produsul a fost eliminat din coș!");
    } else {
      toast.success("Produsul a fost adăugat în coș!");
      addToCart(product);
    }
  };
  return (
    <Button
      onClick={toggleCart}
      className={`w-3/4 sm:w-auto py-2 px-4 sm:px-6 text-white font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        cart
          ? "bg-[#DA2C38] hover:bg-red-700 focus:ring-[#DA2C38]"
          : "bg-[#0A8754] hover:bg-green-700 focus:ring-[#0A8754]"
      }`}>
      {cart ? "Elimină" : "Adaugă"}
    </Button>
  );
}
