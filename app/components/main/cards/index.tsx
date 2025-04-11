import SingleCard from "./singleCard";

export default function Cards() {
    return (
        <div className="max-h-[80vh] gap-y-0 w-full flex flex-col overflow-y-auto rounded-2xl relative hiddenScrollBar">
            <SingleCard>Контент 1</SingleCard>
            <SingleCard>Контент 2</SingleCard>
            <SingleCard>Контент 3</SingleCard>
            <SingleCard className={"bg-red-400"}>
                <div className="w-full h-full grid grid-cols-2">
                    <div className="bg-neutral-100 rounded-2xl flex justify-center items-center"> Я КАРТИНКА</div>
                    <div> 
                        <h2>Проект хуй в очо</h2>
                        <span>ОПИСАние</span>
                        <p className="break-all">ПОЛТИВЫЩДОПИТЩВОЫПТИЩЫОВПЩЗОЫВПЗШЫВОПЗЛЫВпжлжл выфЖЛПвжлыпожл ыовжлпыВЛЖпоыВЖЛпж лЫпожыВоп жывопж лывОжлп оЫВЖЛп оыВЖЛп ж</p>
                    </div>
                </div>
            </SingleCard>
        </div>
    )
}