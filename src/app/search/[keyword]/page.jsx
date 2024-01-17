import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"
import MangaList from "@/components/mangalist"


const Page = async ({ params }) =>
{
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    const searchManga = await getAnimeResponse("manga", `q=${decodedKeyword}`)
    return (
        <>
            <section>
                <Header title={`pencarian untuk anime dan Manga ${decodedKeyword}`} />
                <AnimeList api={searchAnime} />
                <Header title={`Manga`} />
                <MangaList api={searchManga}/>
            </section>
        </>
    )
}

export default Page