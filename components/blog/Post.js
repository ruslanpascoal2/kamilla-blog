import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import Link from "next/link";
import { Avatar } from "./Avatar";
import Image from "next/image";
import { RichText } from 'prismic-reactjs';
import { Date } from 'prismic-reactjs'
import { format } from 'date-fns-tz'
import { ptBR } from "date-fns/locale";

export const Post = ({ post }) => {

    const href = `/blog/${post.slugs[0]}`
    return (
        <article className="pb-10 pt-0 md:pt-20">
            <div className="text-primary dark:text-white">
                <section className="flex flex-col items-center justify-items-center">
                    <Link href={href}><a> <h1 className="title">{
                        post.data.titulo[0].text
                    }</h1></a></Link>
                    <div className="my-0 md:my-6 pt-6 md:pt-12 flex items-center space-x-4">
                        <Link href="/about"><a><Avatar size="45px" /></a></Link>
                        <div style={{ color: '#aaa' }}>
                            <Link href="/about"><a><span>Kamilla de Souza Rosa</span></a></Link>
                            <div className="flex  space-x-2">
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillLinkedin className="text-xl  hover:text-accent cursor-pointer" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillInstagram className="text-xl  hover:text-accent cursor-pointer" /></a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillTwitterCircle className="text-xl  hover:text-accent cursor-pointer" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 flex" >
                    <span style={{ color: '#aaa' }} className=" text-xs ">Publicado em {
                        format((Date(post.last_publication_date)),'dd/MMMM/yyyy', { locale: ptBR })
                       
                        }
                    </span>
                </section>

                <section className="pb-8 pt-6 ">
                    <Image layout="responsive" width="100" height="80" alt={post.data.imagem.alt} src={post.data.imagem.url} />
                </section>

                <section className="my-6">
                    <RichText render={post.data.texto} />
                </section>
            </div>
        </article>
    );
}

