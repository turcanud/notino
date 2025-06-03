"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  // Define navigation links
  const navLinks = [
    {href: "/machiaj", label: "Machiaj"},
    {href: "/par", label: "Păr"},
    {href: "/corp", label: "Corp"},
    {href: "/parfumuri", label: "Parfumuri"},
  ];

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 uppercase text-sm sm:text-base font-bold w-full justify-center sm:justify-start">
      {navLinks.map(({href, label}) => (
        <Link
          key={href}
          href={href}
          className={`relative group hover:text-[#788AA3] transition-all duration-300`}>
          <span className="block group-hover:-translate-y-0.5 transition-all duration-400">
            {label}
          </span>
          <span
            className={`
      absolute left-0 right-0 -bottom-1 h-0.5 bg-[#824C71] 
      transition-all duration-300 origin-left
      ${pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
    `}
          />
        </Link>
      ))}
    </div>
  );
}
