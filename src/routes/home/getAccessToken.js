// TODO: need to use pkce extension for proper security

export default async function getAccessToken() {
    const clientId = null
    const clientSecret = null

    if (sessionStorage.getItem("refreshToken") === null) {
        console.log("getting access token from auth token")
        const response = await fetch(
            "https://accounts.spotify.com/api/token",
            {
                method:"POST",
                headers: {
                    "Authorization": `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    "Access-Control-Allow-Origin": "*",
                    "grant_type": "authorization_code",
                    "code": sessionStorage.getItem("authToken"),
                    "redirect_uri": "http://localhost:5173/"
                })
            }
        )
        const json = await response.json()
        sessionStorage.setItem("accessToken", json.access_token)
        sessionStorage.setItem("refreshToken", json.refresh_token)
    }
    else {
        console.log("getting access token from refresh token")
        const response = await fetch(
            "https://accounts.spotify.com/api/token",
            {
                method:"POST",
                headers: {
                    "Authorization": `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    "Access-Control-Allow-Origin": "*",
                    "grant_type": "refresh_token",
                    "refresh_token": sessionStorage.getItem("refreshToken")
                })
            }
        )
        const json = await response.json()
        console.log(json)
        sessionStorage.setItem("accessToken", json.access_token)
    }
    alert(sessionStorage.getItem("accessToken"))
}
