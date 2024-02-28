import {SiYoutubeshorts} from "react-icons/si";
import {MdHomeFilled, MdOutlineSmartDisplay} from "react-icons/md";

export const Links = () => {
    return [
        {
            name:'Home',
            icon:<MdHomeFilled />,
            href:'/',
        },
        {
            name:'Shorts',
            icon:<SiYoutubeshorts />,
            href:'video',
        },
        {
            name:'Subscriptions',
            icon:<MdOutlineSmartDisplay />,
            href:'Subscriptions',
        }
    ];
};