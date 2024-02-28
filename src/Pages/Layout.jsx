import {Outlet} from "react-router-dom";
import {Links} from "../assets/short/Links.jsx";
import {Navbare} from "../components/Navbare.jsx";
import {useRef, useState} from "react";
import Aside from "../components/Aside.jsx";
import {Tags} from "../components/Tags.jsx";

function Layout() {
    const  links = Links();
    const [on,setOne] = useState(false)
    const scroll = useRef(null);
    const tags= [
        "gaming",
        "reading",
        "cooking",
        "travel",
        "fitness",
        "coding",
        "music",
        "photography",
        "painting",
        "hiking",
        "writing",
        "drawing",
        "programming",
        "biking",
        "gardening",
        "yoga",
        "meditation",
        "shopping",
        "skiing"
    ];
    const left = ()=>{
        scroll.current.scrollLeft -= 100;
    }
    const right = ()=>{
        scroll.current.scrollLeft += 100;
    }
    console.log(on)
    return (
        <main className={'flex bg-gray-950'}>
           <Aside listenOn={(c)=>{setOne(c)}} links={links}/>
            <section className={`px-7 ${on?'w-5/6':'w-100'} text-white`}>
                <Navbare/>
                <Tags tags={tags} left={left} right={right} scroll={scroll}/>
                <div>
                    <Outlet/>
                </div>
            </section>
        </main>
    );
}

export default Layout;