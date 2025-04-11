import { Montserrat } from "next/font/google";
import Header from "@comp/main/form/header";
const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${montserrat.className} flex flex-col`}>
            <Header />
            {children}
            <nav></nav>
        </div>
    );
}