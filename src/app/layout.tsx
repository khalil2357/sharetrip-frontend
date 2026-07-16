import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "SkyRoute — Book Flights, Hotels & Tours",
  description: "Your trusted travel partner. Book flights, hotels, tour packages, visa services and travel insurance at the best prices.",
  keywords: ["flights", "hotels", "tours", "visa", "travel", "Bangladesh", "booking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
