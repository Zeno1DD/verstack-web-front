import Image from "next/image";
import LinkoImg from "@media/Linco.png";
import skr from "@media/skr.png"
import Link from "next/link";


export default function Linko() {
    return (
        <div className="flex w-full justify-center mt-[15px]">
            <div className="w-full max-w-[1440px] flex min-h-screen relative">
                <div className="w-[70%] shrink-0">
                    <Image
                        src={LinkoImg}
                        alt="Verstack logo"
                        className="w-full h-auto"
                    />
                </div>

                <div className="ml-5">
                    <div className="w-[400px] h-[615px] bg-white shadow-xl p-6 rounded-[50px]">
                        <h2 className="text-4xl font-extrabold mb-4 ">Linco | Corporate Website Design</h2>
                        <div className="flex gap-2">
                            <div className="py-2 px-5 bg-white border-[1px] border-black font-extrabold text-[20px] rounded-full">
                                <p>
                                    UI/UX
                                </p>
                            </div>
                            <div className="py-2 px-5 bg-white border-[1px] border-black font-extrabold text-[20px] rounded-full">
                                <p>
                                    WEBSITE
                                </p>
                            </div>
                        </div>
                        <div className="flex mb-3 mt-3 items-center gap-1">
                            <Image
                                src={skr}
                                alt="skrepka"
                                width={15}
                                height={15}
                                className="h-[15px] w-[15px]"
                            />
                            <p>Сайт проекта:</p>
                            <Link href="https://lincogroup.ru/"
                                className="ml-1 text-blue-500"
                                target="_blank"
                            > lincogroup.ru</Link>


                        </div>
                        <div className="w-full h-px bg-[#D4D4D4] my-3" />
                        <p className="">

                            Здесь описание проекта, его особенности, используемые технологии и т.д.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
