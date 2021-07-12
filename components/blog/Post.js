import React from "react";
import { AiFillLinkedin } from "react-icons/ai"
import Link from "next/link";
import { firstLetterCapital } from "../../scripts/utils/firstLetterCapital"

export const Post = ({ post }) => {
    const href = `/blog/${post.metadata.slug}`
    return (
        <article className="py-10">
            <div className="text-primary dark:text-white">
                <section className="flex flex-col items-center justify-items-center">
                    <Link href={href}><a> <h1 className="title text-center">{
                        firstLetterCapital(post.metadata.title)
                    }</h1></a></Link>
                    <div className="my-6 flex items-center space-x-6">
                        {/* <Link href="/bio"><a><Avatar /></a></Link> */}
                        <Link href="/about"><a><span>Kamilla de Souza Rosa</span></a></Link>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillLinkedin className="text-xl  hover:text-accent cursor-pointer" /></a>
                    </div>
                </section>
                <section className="my-6">
                    <div className="text-justify leading-8 text-lg" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </section>
            </div> 
        </article>
    );
}

