import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import Link from "next/link";
import { Avatar } from "./Avatar";
import Image from "next/image";

export const Post = ({ post }) => {
    const href = `/blog/${post.metadata.slug}`
    return (
        <article className="pb-10 pt-0 md:pt-20">
            <div className="text-primary dark:text-white">
                <section className="flex flex-col items-center justify-items-center">
                    <Link href={href}><a> <h1 className="title text-center" style={{ lineHeight: "3.25rem" }}>{
                        (post.metadata.title)
                    }</h1></a></Link>
                    <div className="my-0 md:my-6 pt-6 md:pt-12 flex items-center space-x-4">
                        <Link href="/about"><a><Avatar size="45px" /></a></Link>
                        <div style={{color: '#aaa'}}>
                            <Link href="/about"><a><span>Kamilla de Souza Rosa</span></a></Link>
                            <div className="flex  space-x-2">
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillLinkedin className="text-xl  hover:text-accent cursor-pointer" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillInstagram className="text-xl  hover:text-accent cursor-pointer" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillTwitterCircle className="text-xl  hover:text-accent cursor-pointer" /></a>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-8 pt-10 ">
                    <Image layout="responsive" width="100" height="80" src="https://images.unsplash.com/photo-1571564756948-51c10b7f058e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                </section>

                <section className="my-6">
                    <div className="text-justify leading-8 text-lg" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </section>
            </div>
        </article>
    );
}

