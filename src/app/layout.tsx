import type {Metadata} from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import {FavoritesProvider} from "@/components/FavoritesContext";

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
        <FavoritesProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Navigation />
            {children}
            <div className="h-30"></div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
