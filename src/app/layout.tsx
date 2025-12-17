import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invitación Navideña · 21 de diciembre",
  description: "Invitación navideña para el 21 de diciembre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-dvh text-white antialiased">
        <div className="relative min-h-dvh bg-gradient-to-br from-red-700 via-red-600 to-rose-700">
          <div className="absolute inset-0 -z-10">
            <div className="relative h-full w-full">
              <Image
                src="/Fondo.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-30 blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-700/60 via-red-600/70 to-rose-700/60" />
            </div>
          </div>

          <div className="min-h-dvh">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
