import getUserId from "./getUserId"
import getAccessToken from "./getAccessToken"

export default async function getUserPlaylists() {
    const userId = await getUserId()
    const accesToken = await getAccessToken()

    
    const response = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists?limit=50`, {
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })

    return (await response.json()).items
}