import '../styles/globals.css'
import Navbar from "../components/layout/Navbar";
import "typeface-poppins";

function MyApp({ Component, pageProps }) {
  return (<div>
    <Navbar></Navbar>

    <main className="container mx-auto px-10 pt-32 bg-white">
      <Component {...pageProps} />
    </main>
  </div>)
}

export default MyApp
