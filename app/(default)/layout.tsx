import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";
import YandexMetrikaContainer from "../YandexMetrika";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head />
            <body>
                <YandexMetrikaContainer enabled={true} />
                <div className={`flex flex-col mt-2 `}>
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