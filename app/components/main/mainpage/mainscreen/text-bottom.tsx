export default function TextBottom({className}: Readonly<{
    className?: string}>)  {
    return (
        <div className={`${className} flex mt-[100px] mb-[100px]`}>
            <p className="text-[18px] font-extrabold leading-6">Профессиональный дизайн <br />
            рожденный из ваших идей</p>
        </div>
    )
}