import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import Link from "next/link"

const CharatersDetail = async({params: {id}}) => {
    const cd = await getAnimeResponse(`characters/${id}/full`)

    return(
        <>
        <section id={`anime ${cd.data.name}`}>
        <div className="p-4 px-4">
            <h3 className="text-color-primary text-2xl font-bold">{cd.data.name}</h3>

            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Favorites Characters</h3>
            <p># {cd.data.favorites}</p>
        </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image src={cd.data.images.webp.image_url} width={350} height={350} alt={cd.data.images.jpg.image_url} className="w-full rounded object-cover"/>
        <p className="text-justify text-xl">{cd.data.about}</p>
       </div>
        </div>
        </section>

        <section id="anime">
        <div className="p-4 px-4">
            <h2 className="text-color-primary text-2xl font-bold">Anime In characters : {cd.data.name}</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {cd.data?.anime.map((character, index) => {
                return(
                    <div className="" key={index}>
                        <Link href={`/anime/${character.anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <img src={character.anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full rounded-t-lg  object-cover" />
                        <h3 className="font-bold md:text-xl text-md p-4">{character.anime.title}</h3>
                        <h3 className="font-bold md:text-xl text-md p-4">Role Characters : {character.role}</h3>
                    </Link>
                    </div>
                )
            })}
            </div>
        </div>
        </section>

        <section id="voice over">
        <div className="p-4 px-4">
            <h2 className="text-color-primary text-2xl font-bold">voice over Characte : {cd.data.name}</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {cd.data?.voices.map((suara, index) => {
                return(
                    <Link href={`/characters/pepole/${suara.person.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                            <img src={suara.person.images.jpg.image_url} alt={suara.person.images.jpg.image_url} width={350} height={350} className="w-full rounded-t-lg object-cover"/>
                        <h3 className="font-bold md:text-xl text-md p-4">{suara.person.name}</h3>
                        <h3 className="font-bold md:text-xl text-md p-4">Voice over language : {suara.language}</h3>
                    </Link>     
                )
            })}
            </div>
        </div>
        </section>
        </>
    )
}

export default CharatersDetail