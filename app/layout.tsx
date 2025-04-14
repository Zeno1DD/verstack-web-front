import type { Metadata } from "next";
import "./globals.css";
import { Montserrat_Alternates } from "next/font/google";

export const metadata: Metadata = {
  title: "Verstack-web",
  description: "Verstack-web",
};
const montserrat = Montserrat_Alternates({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-montserrat-alternates",
    display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.className} max-w-box-xl mx-auto `}
      >
        {children}
      </body>
    </html>
  );
}
