import Image from "next/image";
import Circle from "@media/2.png";

export default function CardLeft() {
    return (
        <div className="bg-white rounded-[40px] p-[30px] w-[50%] min-h-[780px] flex flex-col justify-between h-[500px] relative overflow-hidden">
            <p className="uppercase font-extrabold text-2xl leading-7 z-10 text-right">
                Дизайн, который работает. <br />
                Решения, которые вдохновляют. <br />
                Сервисы, которые двигают вперёд.
            </p>
            <div className="absolute bottom-[-150px] left-[-120px] rotate-[-40deg]">
                <Image
                    src={Circle}
                    width={700}
                    height={700}
                    alt="circe img"
                    className="object-contain"
                />
            </div>
        </div>
    );
}
