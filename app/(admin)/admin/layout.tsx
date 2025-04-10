import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Verstack Admin Panel",
    description: "Made by Tregubov Egor",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
            {children}
        </div>
    );
}
