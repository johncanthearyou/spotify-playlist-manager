import getUserId from "./getUserId"
import getAccessToken from "./getAccessToken"

export default async function getUserTracks() {
    const accesToken = await getAccessToken()
    
    var tracks = []
    var offset = 0
    while(true) {
        const response = await fetch(
            `https://api.spotify.com/v1/me/tracks?limit=50&offset=${offset}`, {
            headers: {
                Authorization: `Bearer ${accesToken}`
            }
        })
        const newTracks = (await response.json()).items
        tracks = [...tracks, ...newTracks]
        if (newTracks.length < 50) {
            break
        }
        offset += 50
    }

    return tracks
}