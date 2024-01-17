import {BiTrain} from "react-icons/bi";
import {GrInfo} from "react-icons/gr";
import {GiExpense} from "react-icons/gi";
import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <div className="animate-fadeIn">
            <div className="flex flex-wrap justify-center mt-10">
                <div className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                <BiTrain/>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">交通費申請</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                直近の貴方の交通費を申請しましょう。
                            </p>
                            <NavLink to="transportation"
                                     className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Go
                                to the page

                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                <GiExpense/>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">経費申請</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                Web画面で経費を手早く申請してしまいましょう。
                            </p>
                            <NavLink to="/expenses"
                                     className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Go
                                to the page

                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                <GrInfo/>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">ユーザ情報</h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                貴方のユーザ情報を確認することができます。
                            </p>
                            <NavLink to="/userinfo"
                                     className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Go
                                to the page

                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>);
}

export default HomePage;