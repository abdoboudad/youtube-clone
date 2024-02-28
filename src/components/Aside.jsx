import {FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState} from "react";

function Aside({links,listenOn}) {
    const  [on,setOne] = useState(false);
    const hide = ()=>{
        listenOn(on)
        switch (on){
            case true:
                setOne(false);
                break;
            case false :
                setOne(true);
                break;
        }
    }
    return (
        <>
            <aside className={`bg-gray-950 text-white h-screen px-4 ${on ? 'w-5' : 'w-128'} flex flex-col items-center`}>
                <div className="logo w-full px-3 flex items-center space-x-6 my-4">
                    <button onClick={hide}><i className="fa-solid fa-bars text-xl"></i></button>
                    <h1 className={`text-2xl flex items-center tracking-tighter ${on ? 'hidden' : ''}`}>
                        <span><FaYoutube/></span><span>Youtube</span></h1>
                </div>
                <div className="list w-full">
                    <ul>
                        {
                            links.map((l, i) => (
                                <Link key={i} to={l.href}>
                                    <li className={'space-x-6 py-3 px-3 flex items-center w-full rounded-md hover:bg-stone-600 transition-all duration-200'}>
                                        <span className={'text-2xl'}>{l.icon}</span>
                                        <span className={`font-normal text-base`}>{on?'':l.name}</span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <br/>
            </aside>
        </>
    );
}

export default Aside;