

export default function SingleCard({
    className = "",
    children,
}: Readonly<{
    className?: string | null,
    children: React.ReactNode;
}>) {
    return (
        <div className={`${className} h-[75vh] min-h-[75vh] rounded-2xl bg-amber-50  text-2xl font-black text-black flex justify-center items-center sticky top-0 z-0`}> 
        {children}
        </div>
    )
}