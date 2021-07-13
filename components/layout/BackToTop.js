import React from "react";
import { TiArrowUpThick} from "react-icons/ti";

export default function BackToTop() {
    return(
            <button onClick={toTop} style={{position: 'fixed', bottom: '40px', right: '40px', boxShadow: '2px 0px 15px rgba(1,101,254,0.8)'}}  
            className="bg-accent rounded-full p-2 ">
                <TiArrowUpThick className="text-2xl text-white dark:text-dark" />
            </button>
    )
}

export function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
}