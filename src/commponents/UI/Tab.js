/**
 * Tab
 * @param onClickTab
 * @param name
 * @param img
 * @param displayName
 * @param propName
 * @returns {JSX.Element}
 * @constructor
 */
function TabUI({onClickTab, name, img, displayName, propName}) {
    return (
        <li className="me-2">
            <button onClick={onClickTab} name={name}
                    className={`
                        inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg 
                        ${propName === name ? "  border border-stone-300 shadow-sm text-blue-600  rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}
                        `}>
                {img}{displayName}
            </button>
        </li>
    )
}

export default TabUI;