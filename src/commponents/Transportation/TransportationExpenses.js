import {AiOutlineForm} from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi";
import ApplicationForm from "./ApplicationForm";
import RecentlyApplication from "./RecntlyApplication";
import {useState} from "react";
import SearchCondition from "./SearchCondtion";
import TabsUI from "../UI/Tabs";
import SearchResult from "./SearchResult";

/**
 * Tabに表示する項目の一覧
 */
const TAB_ARRAY = [
    {name: "application", image: <AiOutlineForm/>, displayName: "申請"},
    {name: "list", image: <BiBookAlt/>, displayName: "一覧検索"},
];

/**
 * 交通費の画面
 * @returns
 */
function TransportationExpensesList() {
    const [propName, setPropName] = useState(TAB_ARRAY[0].name);

    return (
        <div className=" animate-fadeIn p-2">
            {/** Tab */}
            <TabsUI
                propName={propName}
                setPropName={setPropName}
                tabs={TAB_ARRAY}
            />
            <div className="border border-stone-300 ">
                {/** application form */}
                {propName === TAB_ARRAY[0].name &&
                    <div className={`  animate-fadeIn`}>
                        <ApplicationForm/>
                        <RecentlyApplication/>
                    </div>
                }
                {/** search my application */}
                {propName === TAB_ARRAY[1].name &&
                    <div className={`  animate-fadeIn`}>
                        <SearchCondition/>
                        <SearchResult/>
                    </div>
                }
            </div>

        </div>
    );
}

export default TransportationExpensesList;