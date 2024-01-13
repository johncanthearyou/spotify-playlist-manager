import getAccessToken from "./getAccessToken"

export default async function getUserId() {
    const accesToken = await getAccessToken()
    const response = await fetch(
        `https://api.spotify.com/v1/me`, {
        headers: {
            Authorization: `Bearer ${accesToken}`
        }
    })
    
    return (await response.json()).id
}