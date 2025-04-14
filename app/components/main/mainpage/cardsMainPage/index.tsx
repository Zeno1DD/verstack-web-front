import CardLeft from "./cardLeft";
import CardsRight from "./cardsRight";

export default function CardsMainPage() {
    return (
        <div className="mt-[15px] uppercase relative flex"
        >
            <CardLeft />
            <CardsRight />
        </div>
    )
}