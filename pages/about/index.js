import { AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
const Prismic = require('@prismicio/client');
const apiEndpoint = 'https://kamilla--blog.cdn.prismic.io/api/v2'
import { RichText } from 'prismic-reactjs';

export default function About({ bio }) {
    return (
        <div className="py-6">
            <div className="flex items-center justify-between">
                <div style={{ ...avatarStyle, backgroundImage: `url('${bio.data.foto.url}')` }} className="m-1 mr-2 border-dark border-1 relative flex justify-center items-center rounded-full bg-light j2-500 text-xl text-white uppercase" ></div>
                <div className="flex space-x-2">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillLinkedin className="text-3xl text-gray  hover:text-accent cursor-pointer" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ka_millasouza"><AiFillInstagram className="text-3xl text-gray  hover:text-accent cursor-pointer" /></a>
                    {/* <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kamilla-souza-6b4425184/"><AiFillTwitterCircle className="text-3xl text-gray  hover:text-accent cursor-pointer" /></a> */}
                </div>
            </div>
            <section className="my-8 text-justify">
                <RichText render={bio.data.descricao} />
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const bios = (await Prismic.client(apiEndpoint).query(Prismic.Predicates.at('document.type', 'bio')));
    const bio = bios.results[0];
    return {
        props: {
            bio
        }
    }
}


export const avatarStyle = {
    height: "200px",
    width: "200px",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}
