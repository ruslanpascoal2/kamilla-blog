
import { getAllPosts } from "../scripts/blog/getAllPosts";
import { Post } from "../components/blog/Post";
import Particles from 'react-particles-js';

export default function Home({posts}) {
  return (
    <div>
        <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 1
              }
            }
          }
        }}
        style={{
          width: '100%',
        }}
      />    
      {
        posts.map(post => <Post key={post.metadata.slug} post={post}></Post>)
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