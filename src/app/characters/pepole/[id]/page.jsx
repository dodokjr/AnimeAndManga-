import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image";
import Link from "next/link";

const Page = async({params: {id}}) => {
    const pp = await getAnimeResponse(`people/${id}/full`);
    const urlP = pp.data.website_url

    return(
       <>
      <section id="page">
      <div className="p-4 px-4">
            <h3 className="text-color-primary text-2xl font-bold">{pp.data.name}</h3>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <h3>Favorites</h3>
            <p>{pp.data.favorites}</p>
            </div>
            
            {urlP ? <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
            <Link href={urlP} target="_blank" className="cursor-pointer text-color-primary hover:text-color-accent transition-all">Website</Link>
            </div> : null}

            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image src={pp.data.images.jpg.image_url} width={250} height={150} alt={pp.data.images.jpg.image_url} className=" rounded object-cover"/>
        <p className="text-justify text-xl">{pp.data.about}</p>
        <p className="text-justify text-xl">Birthday : {pp.data.birthday}</p>
       </div>
    </div>
      </section>

    <section id="anime">
    <div className="p-4 px-4">
            <h2 className="text-color-primary text-2xl font-bold">anime voice actor</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {pp.data?.voices.map((character, index) => {
                return(
                    <div className="" key={index}>
                        <div className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <Image src={character.character.images.jpg.image_url} alt="..." width={350} height={350} className="w-full rounded-t-lg  object-cover" />
                        <h3 className="font-bold md:text-xl text-md p-4">{character.character.name}</h3>
                        <h3 className="font-bold md:text-xl text-md p-4">{character.anime.title}</h3>
                        <h3 className="font-bold md:text-xl text-md p-4">position Characters : {character.role}</h3>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
    </section>
       </>
    )
}

export default Page