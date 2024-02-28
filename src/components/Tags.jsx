import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export const Tags = (props) => {
    return (
        <div className="flex">
            <button className={'bg-gray-500 px-5 rounded-full'} onClick={props.left}><FaChevronLeft/></button>
            <div ref={props.scroll} className={'overflow-x-hidden opacity-75  w-full mx-2 mt-2 flex'}>
                <div className={'flex space-x-3'}>
                    {
                        props.tags.map((n, i) => (
                            <div key={i} className={'bg-stone-700 px-3 py-1 rounded-xl'}>
                                <span>{n}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button className={'bg-gray-500 px-5 rounded-full'} onClick={props.right}><FaChevronRight/></button>
        </div>

    );
};