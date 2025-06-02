"use client";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {useCart} from "@/context/CartContext";
import {ShoppingBag, Plus, Minus, Trash2} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

const QUANTITY_KEY = "cart_quantities";

export default function CartButton() {
  const pathname = usePathname();
  const router = useRouter();
  const {cart, removeFromCart} = useCart();

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(QUANTITY_KEY);
    if (stored) {
      try {
        setQuantities(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse quantities from localStorage", e);
      }
    }
  }, []);

  // Persist to localStorage every time quantities change
  useEffect(() => {
    localStorage.setItem(QUANTITY_KEY, JSON.stringify(quantities));
  }, [quantities]);

  const updateQuantity = (id: number, amount: number) => {
    setQuantities((prev) => {
      const newQty = Math.max((prev[id] ?? 1) + amount, 1);
      return {...prev, [id]: newQty};
    });
  };

  const getQuantity = (id: number) => quantities[id] ?? 1;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.pret * getQuantity(item.id),
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full cursor-pointer h-9 w-9 sm:h-10 sm:w-10"
          disabled={pathname === "/checkout"}>
          <ShoppingBag
            className="h-5 w-5"
            color={pathname === "/checkout" ? "yellow" : undefined}
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Coș de cumpărături</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {cart.length === 0 && (
            <p className="text-center text-sm">Coșul este gol.</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded p-3">
              <div className="flex items-center gap-3">
                <Image
                  src={item.poza ?? "/placeholder.jpg"}
                  alt={item.nume}
                  width={40}
                  height={40}
                  className="rounded object-contain"
                />
                <div>
                  <p className="font-semibold">{item.nume}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.pret} MDL
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => updateQuantity(item.id, -1)}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-6 text-center">{getQuantity(item.id)}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => updateQuantity(item.id, 1)}>
                  <Plus className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    removeFromCart(item.id);
                    setQuantities((prev) => {
                      const updated = {...prev};
                      delete updated[item.id];
                      return updated;
                    });
                  }}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="flex items-center justify-between pt-4">
          <span className="text-lg font-semibold">Total: {totalPrice} MDL</span>
          <DialogClose asChild>
            <Button
              onClick={() => router.push("/checkout")}
              disabled={cart.length === 0}>
              Continuă la plată
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
