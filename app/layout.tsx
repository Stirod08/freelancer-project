import type { Metadata } from "next";
import "@/app/UX/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freelancer Stirod",
  description: "Sitio web de Freelancer Stirod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
