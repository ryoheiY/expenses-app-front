import TabUI from "./Tab";

/**
 * Tabのラッパー
 * @param tabs
 * @param propName
 * @param setPropName
 * @returns {JSX.Element}
 * @constructor
 */
function TabsUI({tabs, propName, setPropName}) {
    const onClickTab = function (e) {
        const name = e.currentTarget.name;
        setPropName(name);
    }
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {tabs.map(tab => {
                    return <TabUI key={tab.name}
                                  onClickTab={onClickTab}
                                  name={tab.name}
                                  img={tab.image}
                                  displayName={tab.displayName}
                                  propName={propName}
                    />
                })}
            </ul>
        </div>
    );
}

export default TabsUI;