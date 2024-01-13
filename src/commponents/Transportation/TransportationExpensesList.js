import { AiOutlineForm } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import ApplicationForm from "./ApplicationForm";
import RecentryApplication from "./RecntryApplication";
import { useState } from "react";
import SearchCondition from "./SearchCondtion";

function TransportationExpensesList() {
    const [isApplication, setIsApplication] = useState(true);

    const onClickTab = function (e) {
        const name = e.currentTarget.name;
        setIsApplication(name === "application");
    }

    return (
        <div className="animate-fadeIn p-2">
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2">
                        <button onClick={onClickTab} name="application"
                            className={`
                        inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg 
                        ${isApplication ? "text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}
                        
                        `}>
                            <AiOutlineForm />申請
                        </button>
                    </li>
                    <li className="me-2">
                        <button onClick={onClickTab} name="list"
                            className={`
                        inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg
                        ${!isApplication ? "text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}
                        `}>
                            <BiBookAlt />一覧
                        </button>
                    </li>

                </ul>
            </div>
            {isApplication &&
                <div className={`  animate-fadeIn`}>
                    <ApplicationForm />
                    <RecentryApplication />
                </div>
            }
            {!isApplication &&
            <div className={`  animate-fadeIn`}>
            <SearchCondition />
            </div>

            }
        </div>
    );
}

export default TransportationExpensesList;