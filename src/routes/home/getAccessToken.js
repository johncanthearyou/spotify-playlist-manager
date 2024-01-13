// TODO: need to use pkce extension for proper security
export default async function getAccessToken() {
    if (sessionStorage.getItem("accessToken") != null) {
        return sessionStorage.getItem("accessToken")
    }

    const response = await fetch(
        "https://accounts.spotify.com/api/token",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                "Access-Control-Allow-Origin": "*",
                "client_id": "fe3a4d8ed5574bafa79967dfbc1a12d1",
                "grant_type": "authorization_code",
                "code": sessionStorage.getItem("authToken"),
                "redirect_uri": "http://localhost:5173/",
                "code_verifier": sessionStorage.getItem("codeVerifier")
            })
        }
    )
    const json = await response.json()
    sessionStorage.setItem("accessToken", json.access_token)
    sessionStorage.setItem("refreshToken", json.refresh_token)

    return sessionStorage.getItem("accessToken")
}
