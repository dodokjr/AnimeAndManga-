
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"
import Button from "@/components/utilities/Button"


const Page = async() => {
    const anime = await getAnimeResponse("random/anime")

    return(
        <>
        <section>
        <div className="pt-4 px-4">
        <h1 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h1>
        </div>
        </section>
        
        <section>
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
             <h3>detail</h3>
             <Button title={"anime"} url={`/anime/${anime.data.mal_id}`}/>
         </div>
         <div className="w-36 flex flex-col justify-center rounded border border-color-primary text-center p-2">
             <h3>Episode</h3>
             <p>{anime.data.episodes}</p>
         </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
         <Image src={anime.data.images.webp.image_url} width={350} height={350} alt={anime.data.images.jpg.image_url} className="w-full rounded object-cover"/>
         <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
        </section>
         </>
    )
} 


export default Page