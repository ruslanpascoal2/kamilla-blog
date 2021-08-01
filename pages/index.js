
import { useState, useEffect } from "react";
import { Post } from "../components/blog/Post";
import BackToTop from "../components/layout/BackToTop";
const Prismic = require('@prismicio/client');
const apiEndpoint = 'https://kamilla--blog.cdn.prismic.io/api/v2'


export default function Home({ posts }) {
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
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
      {
        scrollPosition > 100 ?
          <BackToTop /> :
          <div></div>
      }
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = (await Prismic.client(apiEndpoint).query(Prismic.Predicates.at('document.type', 'post')));
  const posts = allPosts.results;
  console.log(posts);

  return {
    props: {
      posts
    }
  }
}