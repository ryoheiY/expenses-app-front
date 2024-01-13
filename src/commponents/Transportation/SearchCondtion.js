import InputUI from "../UI/Input";
import SelectUI from "../UI/Select";
function SearchCondition() {

    const handleSubmit = function (event) {
        event.preventDefault();
        console.log("submit");
    }
    const labelClassName = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    const inputClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    return (
        <div className=" p-2 ">
            <form
                onSubmit={handleSubmit}
                className=" pt-2 bg-orange-200 pb-2 ">

                <div className="grid gap-6 mb-6 md:grid-cols-2 p-2">
                    <InputUI type="date" name="start-date" displayName="開始日" labelClassName={labelClassName} inputClassName={inputClassName} />
                    <InputUI type="date" name="end-date" displayName="終了日" labelClassName={labelClassName} inputClassName={inputClassName} />
                    <SelectUI name="one-way" displayName="検索項目" inputClassName={inputClassName} labelClassName={labelClassName} required
                        options={
                            [
                                { val: 1, name: "利用日" },
                                { val: 0, name: "申請日" },
                            ]
                        } />
                    <SelectUI name="one-way" displayName="順序" inputClassName={inputClassName} labelClassName={labelClassName} required
                        options={
                            [
                                { val: "ASC", name: "ASC" },
                                { val: "DESC", name: "DESC" },
                            ]
                        } />
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </form>
        </div >
    )
}

export default SearchCondition;