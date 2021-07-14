import Image from "next/image";
const Prismic = require('@prismicio/client');
const apiEndpoint = 'https://kamilla--blog.cdn.prismic.io/api/v2'
import { RichText } from 'prismic-reactjs';

export default function About({ bio }) {
    console.log(bio);
    return (
        <div>
            <div style={{ ...avatarStyle, backgroundImage: `url('${bio.data.foto.url}')` }} className="m-1 mr-2 border-dark border-1 relative flex justify-center items-center rounded-full bg-light j2-500 text-xl text-white uppercase" ></div>
            <section className="my-6">
                    <RichText render={bio.data.descricao} />
                </section>
        </div>
    )
}

export async function getStaticProps(context) {
    const bios = (await Prismic.client(apiEndpoint).query(Prismic.Predicates.at('document.type', 'bio')));
    const bio = bios.results[bios.total_results_size - 1];
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
