import { YMInitializer } from 'react-yandex-metrika';
import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";
import { ReactNode, useEffect } from 'react';
import ym from 'react-yandex-metrika';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    ym('hit', '/home'); 
  }, []);

  return (
    <html lang="ru">
      <head>
        <YMInitializer
          accounts={[101153409]} 
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
