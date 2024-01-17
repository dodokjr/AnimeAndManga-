export const getAnimeResponse = async (resource, query) =>
{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getMyApiResponse = async () =>
{
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL_MY)
    const myApi = await response.json()
    return myApi
}