import {DiNodejsSmall} from "react-icons/di";
import {RxHamburgerMenu} from "react-icons/rx"
import {useState} from "react";
import {NavLink} from "react-router-dom";

const ROUTES = [
    {name: "Home", link: "/"},
    {name: "交通費申請", link: "/transportation"},
    {name: "交通費管理（管理者）", link: "/mng/transportation"},
    {name: "経費申請（工事中）", link: "/expenses"},
    {name: "ユーザ情報", link: "/userinfo"},
];

/**
 * ヘッダー
 * @param {*} param0
 * @returns
 */
function Nav({keycloak}) {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (
        <header>
            <nav className=" bg-gray-50 h-full relative z-10 flex flex-wrap items-center justify-between">
                <DiNodejsSmall className="h-20 w-20 dark:fill-white"/>
                <button
                    onClick={() => {
                        setIsMobileMenuShown(!isMobileMenuShown)
                    }}
                    className="lg:hidden hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200 p-2">

                    <RxHamburgerMenu size={25}/>
                </button>

                <div className={`${!isMobileMenuShown && "hidden"} lg:block w-full lg:w-auto `}>
                    <ul className="lg:space-x-8 p-4 lg:bg-transparent flex flex-col lg:flex-row bg-gray-50 text-lg  rounded-lg">
                        {ROUTES.map((route, i) => {
                            return <NavLink
                                to={route.link}
                                className={` 
                                rounded cursor-pointer py-2 px-3 
                                hover:bg-gray-400 
                                ${(isActive) => console.log(isActive, route.link, route.name)}
                                `} key={i} end>{route.name}</NavLink>
                        })}
                    </ul>
                </div>

            </nav>
        </header>
    )

}

export default Nav;