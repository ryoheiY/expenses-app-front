import {SEARCH_TABLE_COLUMN} from "../../constants";

function SearchResult() {
    return (
        <>
            <div className=" text-center font-bold">検索結果</div>
            <div className="relative overflow-x-auto">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {SEARCH_TABLE_COLUMN.map(column => {
                            return <th key={column} scope="col"
                                       className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                {column}
                            </th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SearchResult;