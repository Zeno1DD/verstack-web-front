import Icon from "@media/icon-header.png"
import Image from "next/image"

export default function LeftIcon() {
    return (
        <div>
            <Image 
                src={Icon}
                width={41}
                height={41}
                alt="Icon"
            />
        </div>
    )
}