import Image from "next/image"
import Link from "next/link"

const CardCharacters = ({characters}) => {
    return(
        <>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {characters.data?.map((anime, index) => 
            {
                return (
                    <div className="max-w-sm bg-white border border-color-secondary rounded-lg shadow text-color-primary" key={index}>
                        <Link href={`/characters/${anime.character.mal_id}`}>
                            <img src={anime.character.images.webp.image_url} width={250} height={150} alt=".." className="rounded-t-lg object-cover w-full"/>
                        <div className="text-2xl text-center font-bold">
                        <p>Name : {anime.character.name}</p>
                        <p>Role : {anime.role}</p>
                        </div>
                        </Link>
                    </div>
                )
            }
            )}
        </div>
        </>
    )
}

export default CardCharacters