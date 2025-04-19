"use client";

import { YMInitializer } from 'react-yandex-metrika';
import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";
import { ReactNode, useEffect } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    // Use window.ym if available
    if (typeof window !== 'undefined' && window.ym) {
      window.ym('hit', window.location.pathname);
    }
  }, []);

  return (
    <html lang="ru">
      <head>
        {/* YMInitializer should be a self-closing tag in head */}
        <YMInitializer
          accounts={[101153409]}
          options={{
            defer: true,
            webvisor: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          }}
          version="2"
        />
      </head>
      <body>
        <div className="flex flex-col mt-2">
          <div className="bg-white rounded-[40px]">
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}