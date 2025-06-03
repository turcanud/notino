"use client";

import {GeneralProduct} from "@/types";
import {createContext, useContext, useEffect, useState} from "react";

type FavoritesContextType = {
  favorites: GeneralProduct[];
  addToFavorites: (product: GeneralProduct) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({children}: {children: React.ReactNode}) {
  const [favorites, setFavorites] = useState<GeneralProduct[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: GeneralProduct) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prev) => prev.filter((product) => product.id !== productId));
  };

  const isFavorite = (productId: number) => {
    return favorites.some((product) => product.id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
