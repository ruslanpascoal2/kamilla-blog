import { useState, useEffect } from "react";
import BackToTop from "../../components/layout/BackToTop";
import { Post } from "../../components/blog/Post";
const Prismic = require('@prismicio/client');
const apiEndpoint = 'https://kamilla--blog.cdn.prismic.io/api/v2'

export default function BlogPost({ post }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            {
                <Post key={post.id} post={post}></Post>
            }
            {
                scrollPosition > 100 ?
                    <BackToTop /> :
                    <div></div>
            }
        </div>
    )
}


export async function getStaticProps(context) {
    const allPosts = (await Prismic.client(apiEndpoint).query(Prismic.Predicates.at('document.type', 'post')));
    const post = allPosts.results.find(x => x.slugs.includes(context.params.slug));

    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const allPosts = (await Prismic.client(apiEndpoint).query(Prismic.Predicates.at('document.type', 'post')));
    const posts = allPosts.results;
    return {
        paths: posts.map(x => {
            return ({
                params: {
                    slug: x.slugs[0]
                }
            })
        }),
        fallback: false
    };
}