import Link from "next/link"
import Image from "next/image"
import Logo from "@media/verstack.png"


export default function FooterLeft() {
    return (
        <div className="bg-white rounded-[50px] p-8 w-[50%] flex flex-col justify-between">
            <div className="flex gap-20">
                <div>
                    <h2 className="font-extrabold text-2xl">Навигация</h2>
                    <nav>
                        <ul>
                            <li className="text-[20px] font-medium gap-1 flex flex-col mt-3">
                                <Link
                                    href={"/"}
                                >
                                    <p>
                                        Главная
                                    </p>
                                </Link>
                                <Link
                                    href={"/projects"}
                                >
                                    <p>
                                        Проекты
                                    </p>
                                </Link>
                                <Link
                                    href={"/contacts"}
                                >
                                    <p>
                                        Контакты
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h2 className="font-extrabold text-2xl">Контакты</h2>
                    <nav>
                        <ul>
                            <li className="text-[20px] font-medium mt-3">
                                <Link
                                    href="mailto:verstackweb@gmail.com"
                                >
                                    <p>
                                        verstackweb@gmail.com
                                    </p>
                                </Link>
                                <Link href="https://t.me/verstack_studio">
                                    <p>Тг: t.me/verstack_studio</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col">
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt="Verstack logo"
                />
                <div className="w-full h-px bg-[#D4D4D4] my-8" />
                <div className="font-extrabold text-[16px] text-[#D4D4D4]">
                    <p>VERSTACK-WEB 2025</p>
                </div>
            </div>
        </div>
    )
}