import getAccessToken from "./getAccessToken"

export default async function getTopSongs(timeRange) {
    const accesToken = await getAccessToken()
    const response = await fetch(
        `https://api.spotify.com/v1/me/top/tracks?limit=25&time_range=${timeRange.toLowerCase()}_term`, {
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })
    return (await response.json()).items
}