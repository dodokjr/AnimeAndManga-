import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import CardCharacters from "@/components/characterlist/CardCharacters"

const page = async ({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const characters = await getAnimeResponse(`anime/${id}/characters`, `limit=8`)

    return (
        <>
       <section id="title">
       <div className="pt-4 px-4">
       <h1 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h1>
       </div>
       </section>
       
       <section id="box">
       <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2" >
            <h3>Score</h3>
            <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Member</h3>
            <p>{anime.data.member}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Genres</h3>
            <p>{anime.data.genres.name}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Popularity</h3>
            <p>{anime.data.popularity}</p>
        </div>
       </div>
       <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image src={anime.data.images.webp.image_url} width={350} height={350} alt={anime.data.images.jpg.image_url} className="w-full rounded object-cover"/>
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
       </div>
       </section>

       <section id="player">
       <div className="pt-4 px-4">
        <div className="flex justify-center items-center">
        <iframe width={560} height={315} src={anime.data.trailer.embed_url} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
       </div>
       </section>

       <section id="characters">
        <div className="pt-4 px-4">
        <div className="text-2xl text-color-primary font-bold text-center gap-3">Charaters {anime.data.title}</div>
        <div className="gap-4">
        <CardCharacters characters={characters}/>
        </div>
        </div>
       </section>
        </>
    )
}

export default page