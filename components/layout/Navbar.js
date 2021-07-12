import React from "react";

export default function Navbar(){
    return(
        <header className="h-24 bg-light mx-auto fixed w-full bg-black flex items-center" style={{borderBottom: "1px solid #ddd"}}>
            <nav className="container px-10 mx-auto">
               <ul className="flex items-center justify-between">
                   <li> <h3 className="text-dark font-bold">Kamilla</h3></li>
                    <div className="flex items-center space-x-4">
                    <li>Sobre mim</li>
                    <li>Textos</li>
                    </div>
               </ul>
            </nav>
        </header>
    )
}