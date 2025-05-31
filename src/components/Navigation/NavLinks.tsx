"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

export default function NavLinks() {
  const pathname = usePathname(); // Get current route
  // Define navigation links
  const navLinks = [
    {href: "/machiaj", label: "Machiaj"},
    {href: "/par", label: "Păr"},
    {href: "/corp", label: "Corp"},
    {href: "/parfumuri", label: "Parfumuri"},
  ];

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 uppercase text-sm sm:text-base font-bold">
      {navLinks.map(({href, label}) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-gray-600 transition-colors duration-200 ${
            pathname === href ? "text-red-600" : ""
          }`}
          aria-current={pathname === href ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </div>
  );
}
