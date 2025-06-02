"use client";

import {BaseProduct} from "@/types";
import {createContext, useContext, useState, useEffect, ReactNode} from "react";

type CartContextType = {
  cart: BaseProduct[];
  addToCart: (product: BaseProduct) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "cart_items";

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<BaseProduct[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as BaseProduct[];
        setCart(parsed);
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: BaseProduct) => {
    setCart((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const isInCart = (productId: number) => {
    return cart.some((product) => product.id === productId);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_KEY);
  };

  return (
    <CartContext.Provider
      value={{cart, addToCart, removeFromCart, isInCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
