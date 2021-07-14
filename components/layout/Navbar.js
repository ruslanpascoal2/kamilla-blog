import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti"
import Menu from "../menu/Menu";

export default function Navbar() {
    
    useEffect(()=>{
        
    })

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <header className="h-24 z-50 bg-blue mx-auto fixed w-full bg-black flex items-center">
            <nav className="container px-10 mx-auto">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link href="/">
                            <a>
                                <div className="flex items-center">
                                    <h3 className=" text-white md:hover:text-pink
                          font-bold">Kamilla</h3>
                                    <BsCircleFill className="text-light ml-1" />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <div className="flex items-center space-x-4">
{/*                         
                            <li>
                                <a className="navbar-link" role="button" onClick={toggleMenu}>
                                    <TiThMenuOutline className="text-white text-2xl md:hover:text-dark" />
                                </a>
                            </li> */}
                  
                        <div className="flex space-x-6"> 
                        <li>
                            <Link href="/about"><a className="text-white md:hover:text-pink">Sobre mim</a></Link>
                        </li>
                        {/* <li>
                            <Link href="/about"><a className="text-white hover:text-pink">Contato</a></Link>
                        </li> */}
                        </div>
                        
                    </div>
                </ul>
            </nav>
            {
                menuIsOpen ?
                    <Menu closed={console.log("fechou")} /> :
                    <div></div>
            }
        </header>
    )
}

