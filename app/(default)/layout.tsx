import Header from "@/app/components/main/header";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`flex flex-col mt-2 `}>
            <div className="bg-white rounded-[40px]">
                <Header />
            </div>
            {children}
        </div>
    );
}