import { YMInitializer } from 'react-yandex-metrika';
import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";
import { ReactNode, useEffect } from 'react';
import ym from 'react-yandex-metrika';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Инициализация метрики
  useEffect(() => {
    ym('hit', '/home');  // Пример отслеживания страницы
  }, []);

  return (
    <html lang="ru">
      <head>
        {/* Инициализация Яндекс.Метрики */}
        <YMInitializer
          accounts={[101153409]} // Здесь указываем ваш номер аккаунта Яндекс.Метрики
          options={{ webvisor: true }} // Опционально, если нужно включить Webvisor
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
