import { useEffect } from 'react';
import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        // Явное указание типа для переменных
        (function(m: any, e: Document, t: string, r: string, i: string) {
            // Инициализация ym (тип any)
            m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments); };
            // Получение текущего времени через getTime()
            m[i].l = new Date().getTime();  // Получаем количество миллисекунд с начала эпохи

            // Работа с k (HTMLScriptElement) и a (HTMLElement)
            let k: HTMLScriptElement = e.createElement(t);
            let a: HTMLElement | null = e.getElementsByTagName(t)[0];
            if (a && a.parentNode) {
                k.async = true;
                k.src = r;
                a.parentNode.insertBefore(k, a);
            }
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        // Инициализация метрики
        if (typeof ym !== 'undefined') {
            ym(101153409, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        }
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз после рендера

    return (
        <html lang="ru">
            <head>
                <noscript>
                    <div>
                        <img src="https://mc.yandex.ru/watch/101153409" className="position:absolute; left:-9999px;" alt="" />
                    </div>
                </noscript>
            </head>
            <body>
                <div className={`flex flex-col mt-2`}>
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
