import {IoSearchOutline} from "react-icons/io5";
import {FaMicrophone} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import {RiVideoUploadLine} from "react-icons/ri";

export const Navbare = () => {
    return (
        <div className={'flex justify-between py-3'}>
            <div className="search w-full">
                <div className="items w-1/2 flex items-center space-x-3 mx-auto">
                    <div className="input bg-gray-800 w-4/5 h-10 border-gray-900 rounded-2xl flex">
                        <input type="text" placeholder={'Search'} className={'outline-0 px-4 text-md bg-transparent w-full'}/>
                        <button className={'bg-gray-800 text-2xl px-4  rounded-r-2xl border-amber-300'}><IoSearchOutline />
                        </button>
                    </div>
                    <div>
                        <button className={'bg-gray-800 rounded-full text-xl p-3'}><FaMicrophone /></button>
                    </div>
                </div>
            </div>
            <div className="links w-1/6">
                <ul className={'flex space-x-5 items-center justify-end'}>
                    <li>
                        <span className={'text-2xl'}><RiVideoUploadLine/></span>
                    </li>
                    <li>
                        <span className={'text-2xl'}><IoIosNotifications/></span>
                    </li>
                    <li>
                        <img className={'rounded-full w-10 h-10'}
                             src="https://cdn.shopify.com/s/files/1/0559/4788/6783/files/Cigarette.png?v=1679069332"
                             alt=""/>
                    </li>

                </ul>
            </div>
        </div>
    );
};