"use client"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"
import MangaList from "@/components/mangalist"

const Page = async() =>
{
    const [page, setPage] = useState(1)
    const [topManga, setTopManga] = useState([])

    const fetchData = async() => {
const populerManga = await getAnimeResponse("top/manga", `page=${page}`)
  setTopManga(populerManga)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`Anime Terpopuler #${page}`} />
            <MangaList api={topManga}/>
            <Pagination page={page} lastPage={topManga.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}


export default Page