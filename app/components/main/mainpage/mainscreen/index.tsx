import Textup from "./textup"
import TextMiddle from "./text-middle"
import BgImage from "@media/1.png"
import Image from "next/image"
import TextBottom from "./text-bottom"



export default function MainScreen() {
    return (
        <div className="bg-white rounded-[40px] p-[40px] mt-[15px] uppercase relative"
        >
            <Image className="absolute left-[10%] z-0 top-0"
                src={BgImage}
                width={755}
                height={755}
                alt="BgImage"
            />
            <Textup className="z-10 relative"/>
            <TextMiddle className="z-10 relative"/>
            <TextBottom className="z-10 relative"/>
        </div>
    )
}