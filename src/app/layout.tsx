import type {Metadata} from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import {FavoritesProvider} from "@/context/FavoritesContext";
import BackToTopButton from "@/components/BackToTopButton";
import {CartProvider} from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Notino",
  description: "Your one-stop shop for all things beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <CartProvider>
            <FavoritesProvider>
              <Navigation />
              {children}
              <div className="h-30"></div>
              <Footer />
              <Toaster />
              <BackToTopButton />
            </FavoritesProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
