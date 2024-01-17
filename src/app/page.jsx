import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"
import { getAnimeResponse } from "@/libs/api-libs"
import Button from "@/components/utilities/Button";
import MangaList from "@/components/mangalist";

const Page = async () =>
{
const topAnime = await getAnimeResponse("top/anime", "limit=8");
const topManga = await getAnimeResponse("top/manga", "limit=8");


  return (
    <>
      <section>
        <Header title="Anime Paling Populer" linkhref="/populer/anime" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
        <Header title="Manga Paling Populer" linkhref="/populer/manga" linkTitle="Lihat Semua" />
        <MangaList api={topManga}/>
       <div className="p-4 px-4 text-xl">
       <Button title="Random Anime" url="/random"/>
       </div>
      </section>

    </>
  )
}

export default Page