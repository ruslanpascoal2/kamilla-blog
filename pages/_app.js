import '../styles/globals.css'
import Navbar from "../components/layout/Navbar";

function MyApp({ Component, pageProps }) {
  return (<div>
    <Navbar></Navbar>
    <main className="container px-10 mx-auto pt-32 bg-light dark:bg-dark">
      <Component {...pageProps} />
    </main>
  </div>)
}

export default MyApp
