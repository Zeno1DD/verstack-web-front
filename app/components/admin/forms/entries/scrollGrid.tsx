
export default function A_GridScroll({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex flex-col gap-y-4 max-h-[720px] w-full overflow-y-auto my-5 rounded-2xl">
            {children}
        </div>
    )
}