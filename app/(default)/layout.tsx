"use client"
import { useEffect } from 'react';
import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        (function(m: any, e: Document, t: string, r: string, i: string) {
            m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments); };
            m[i].l = 1 * new Date();
            
            let k: HTMLScriptElement = e.createElement(t);
            let a: HTMLElement | null = e.getElementsByTagName(t)[0];
            if (a && a.parentNode) {
                k.async = true;
                k.src = r;
                a.parentNode.insertBefore(k, a);
            }
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        if (typeof ym !== 'undefined') {
            ym(101153409, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        }
    }, []);

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
