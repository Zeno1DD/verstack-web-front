import Api from "@/app/api";
import A_GridScroll from "@/app/components/admin/forms/entries/scrollGrid";
import A_SingleElem from "@/app/components/admin/forms/entries/single";


export default async function Admin() {
    const formEntries: [] = await new Api().get("forms");
    console.log(formEntries)
    return (

        <main className="rounded-2xl pb-3 bg-blue-200 text-white w-[720px]">
            <div className="rounded-2xl px-5 py-3 bg-blue-600">
                <h2 className="text-center text-2xl">Админ панель</h2>
                <p className="text-center">ver. минус 1</p>
            </div>
            <div className="px-5">
                <A_GridScroll>
                    {formEntries.map((c, i, arr) => {
                        return (
                            <A_SingleElem entry={c} key={i}/>
                        )
                    })}
                </A_GridScroll>
            </div>
        </main>
    );
}
