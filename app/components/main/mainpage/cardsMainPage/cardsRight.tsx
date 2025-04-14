import Image from "next/image"
import Link from "next/link"
import Arrow3 from "@media/arrow3.png"
import Arrow2 from "@media/arrow2.png"
import Rectangle from "@media/3.png"
import Donat from "@media/4.png"



export default function CardsRight() {
    return (
        <div className="uppercase font-extrabold w-[50%] gap-y-[15px] flex flex-col pl-[15px]">
            <div className="bg-white rounded-[40px] w-[100%] p-[30px] relative overflow-hidden min-h-[250px] text-[20px] leading-6">
                <p>От логотипа до голоса бренда <br />
                    визуальный стиль, который выделяет.</p>
                <div className="absolute bottom-[-130px] right-[-70px] rotate-[-60deg]">
                    <Image
                        src={Rectangle}
                        width={300}
                        height={300}
                        alt="rectangle"
                        className="object-contain"
                    />
                </div>
            </div>
            <Link
                href="/contacts"
            >
                <div className="bg-accent text-white rounded-[40px] w-[100%] bc-accent p-[30px] relative overflow-hidden min-h-[250px] flex flex-col justify-between text-[32px] leading-6">
                    <h1>Web & Mobile Design</h1>
                    <div className="z-10 flex flex-row justify-end flex-wrap">
                        <h1>Связаться с нами </h1>
                        <Image
                            src={Arrow2}
                            width={25}
                            height={23}
                            alt="arrow2"
                            className="object-contain ml-[10px]"
                        />
                    </div>
                    <div className="absolute bottom-[-170px] left-[-50px] rotate-[8deg]">
                        <Image
                            src={Donat}
                            width={420}
                            height={420}
                            alt="rectangle"
                            className="object-contain z-0"
                        />
                    </div>
                </div>
            </Link>
            <Link
                href="/projects"
            >
                <div className="bg-white rounded-[40px] w-[100%] p-[30px] relative overflow-hidden min-h-[250px] flex flex-col justify-between text-[32px] leading-6">
                    <h1>UX/UI Design</h1>
                    <div className="z-10 flex flex-row justify-end flex-wrap">
                        <h1>Наше портфолио</h1>
                        <Image
                            src={Arrow3}
                            width={25}
                            height={23}
                            alt="arrow2"
                            className="object-contain ml-[10px]"
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}