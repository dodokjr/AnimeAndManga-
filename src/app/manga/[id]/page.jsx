import CardCharacters from "@/components/characterlist/CardCharacters"
import { getAnimeResponse, getMangaResponse } from "@/libs/api-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async({params: {id}}) => {
    const manga = await getAnimeResponse(`manga/${id}/full`)
    const characters = await getAnimeResponse(`manga/${id}/characters`, `limit=2`)
    let info = manga.data
    return(
        <>
       <section id={`title-${manga.data.title}`}>
       <div className="pt-4 px-4">
       <h1 className="text-2xl text-color-primary">{info.title} - {info.published.string}</h1>
       </div>
       </section>
       
       <section id="box">
       <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Ranked</h3>
            <p>#{info.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Popularity</h3>
            <p># {info.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2" >
            <h3>Score</h3>
            <p> {info.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Member</h3>
            <p>{info.members}</p>
        </div>
        
       </div>
       <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image src={info.images.webp.image_url} width={350} height={350} alt={manga.data.images.jpg.image_url} className="w-full rounded object-cover"/>
        <p className="text-justify text-xl">{info.synopsis}</p>
       </div>
       <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap text-color-primary justify-center items-center">
       <div className="grid grid-cols-4 gap-2">
       {info.external.map((mangaM) => (
            <Link href={mangaM.url} target="_blank"># {mangaM.name}</Link>
            ))}
       </div>
       </div>
       </section>

       <section id="characters-box">
        <div className="pt-4 px-4">
        <div className="text-2xl text-color-primary font-bold text-center gap-3">Charaters {info.title}</div>
        <div className="gap-4">
        <CardCharacters characters={characters}/>
        </div>
        </div>
       </section>
        </>
    )
}

export default Page