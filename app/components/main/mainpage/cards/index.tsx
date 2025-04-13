import SingleCard from "./singleCard";
import ScrollSliderWrapper from "./singleCard";

export default function Cards() {
    return (
        <ScrollSliderWrapper>
            <SingleCard>Контент 1</SingleCard>
            <SingleCard>Контент 2</SingleCard>
            <SingleCard>Контент 3</SingleCard>
            <SingleCard>
                <div className="grid grid-cols-2 w-full h-full bg-amber-700">
                    <div className="bg-neutral-100 rounded-2xl flex justify-center items-center"> Я КАРТИНКА</div>
                    <div>
                        <h2>Проект</h2>
                        <span>Описание</span>
                        <p className="break-all">Текст</p>
                    </div>
                </div>
            </SingleCard>
        </ScrollSliderWrapper>

    )
}