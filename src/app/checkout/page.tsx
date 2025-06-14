"use client";

import {useCart} from "@/context/CartContext";
import Image from "next/image";
import {useEffect, useState} from "react";
import {CheckoutForm} from "@/components/CheckoutForm";

const QUANTITY_KEY = "cart_quantities";

export default function CheckoutPage() {
  const {cart} = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    const stored = localStorage.getItem(QUANTITY_KEY);
    if (stored) {
      try {
        setQuantities(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse quantities", e);
      }
    }
  }, []);

  const getQuantity = (id: number) => quantities[id] ?? 1;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.pret * getQuantity(item.id),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side: User Form */}
      <CheckoutForm />

      {/* Right side: Cart Summary */}
      <div className="space-y-6 order-1 sm:order-2">
        <h2 className="text-2xl font-bold">Rezumat comandă</h2>

        {cart.length === 0 ? (
          <p className="text-muted-foreground">Coșul este gol.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.poza ?? "/placeholder.jpg"}
                    alt={item.nume}
                    width={40}
                    height={40}
                    className="rounded object-contain h-[90px]"
                  />
                  <div>
                    <p className="font-semibold truncate max-w-[200px]">
                      {item.nume}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {getQuantity(item.id)} x {item.pret} MDL
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  {item.pret * getQuantity(item.id)} MDL
                </p>
              </div>
            ))}

            <div className="flex justify-between pt-4 border-t font-bold text-lg">
              <span>Total:</span>
              <span>{totalPrice} MDL</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
