import { DiNodejsSmall } from "react-icons/di"; 
import { DiAtom } from "react-icons/di"; 
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";
const ROUTES = [
    "Home",
    "交通費申請",
    "交通費管理（管理者）",
    "経費申請（工事中）",
];

function Nav({onClickShoppingBtn}) {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (
        <nav className=" bg-gray-50 h-full relative z-10 flex flex-wrap items-center justify-between">
            <a href="#"><DiNodejsSmall  className="h-20 w-20 dark:fill-white"/></a>
            <button 
            onClick={() => {setIsMobileMenuShown(!isMobileMenuShown)}}
            className="lg:hidden hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200 p-2">
                <RxHamburgerMenu size={25} />
            </button>
            <div className={`${ !isMobileMenuShown && "hidden"} lg:block w-full lg:w-auto `}>
                <ul className="lg:space-x-8 p-4 lg:bg-transparent flex flex-col lg:flex-row bg-gray-50 text-lg  rounded-lg">
                    {ROUTES.map((route, i) => {
                        return <li
                            className={` rounded cursor-pointer py-2 px-3 ${
                                i === 0 
                                ? "bg-blue-500 text-white lg:text-blue-500 lg:bg-transparent" 
                                : " hover:bg-gray-400 "
                                } `} key={i}>{route}</li>
                    })}
                </ul>
            </div>
            
        </nav>)

}

export default Nav;