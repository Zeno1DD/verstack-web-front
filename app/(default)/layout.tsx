import Header from "@comp/main/form/header";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col">
        <Header/>
            {children}
            <nav></nav>
        </div>
    );
}