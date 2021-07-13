
import { getAllPosts } from "../scripts/blog/getAllPosts";
import { Post } from "../components/blog/Post";
import BackToTop from "../components/layout/BackToTop";
import { useState } from "react";
import { useEffect } from "react";

export default function Home({posts}) {
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
        posts.map(post => <Post key={post.metadata.slug} post={post}></Post>)
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
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  }
}