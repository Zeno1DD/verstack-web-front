import type { Metadata } from "next";
import "./globals.css";
import { Montserrat_Alternates } from "next/font/google";

export const metadata: Metadata = {
  title: "Verstack App",
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
      <body className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
