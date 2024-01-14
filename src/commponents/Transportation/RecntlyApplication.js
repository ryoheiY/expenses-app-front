import {APPLICATION_TABLE_COLUMN} from "../../constants";

function RecentryApplication() {
    return (
        <>
            <div className=" text-center font-bold">直近一か月の申請（上限100件）</div>
            <div className="relative overflow-x-auto">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {APPLICATION_TABLE_COLUMN.map(column => {
                            return <th key={column} scope="col"
                                       className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                {column}
                            </th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2022-12-31
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2022-12-31
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            市ヶ尾
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            川崎
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            田園都市線
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            片道
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            200円
                        </th>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RecentryApplication;