


export default function Textup({className}: Readonly<{
    className?: string}>) 
    {
    return (
        <div className={`${className} flex justify-end gap-10 font-extrabold text-right`}>
            <div className="flex flex-col">
                <h1 className="text-5xl">
                    50+
                </h1>
                <p className="text-[18px] leading-5"> 
                    Успешных<br></br>
                    проектов
                </p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-5xl">
                    100+
                </h1>
                <p className="text-[18px] leading-5"> 
                    Дизайнерских<br></br>
                    решений
                </p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-5xl">
                    50+
                </h1>
                <p className="text-[18px] leading-5"> 
                    Довольных<br></br>
                    клиентов
                </p>
            </div>
        </div>
    )
}