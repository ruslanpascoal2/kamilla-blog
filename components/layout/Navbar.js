import React from "react";
import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";
import {TiThMenuOutline } from "react-icons/ti"

export default function Navbar() {
    return (
        <header className="h-24 z-50 bg-blue mx-auto fixed w-full bg-black flex items-center">
            <nav className="container px-10 mx-auto">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link href="/">
                            <a>
                                <div className="flex items-center">
                                    <h3 className=" text-white md:hover:text-dark
                          font-bold">Kamilla</h3>
                                    <BsCircleFill className="text-light ml-1" />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <div className="flex items-center space-x-4">
                        <li>
                            <Link href="/about">
                                <a className="navbar-link">
                                    <TiThMenuOutline className="text-white text-2xl md:hover:text-dark"/>
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/about">
                                <a className="navbar-link">
                                    <span className="text-white hover:text-dark"></span>
                                </a>
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link href="/texts">
                                <a className="navbar-link">
                                    <span className="text-white hover:text-dark">Textos</span>
                                </a>
                            </Link>
                        </li> */}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

