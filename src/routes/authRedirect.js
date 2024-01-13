export default async function authRedirect() {
    sessionStorage.clear()
    const codeVerifier = generateRandomString(64)
    sessionStorage.setItem("codeVerifier", codeVerifier)

    let url = "https://accounts.spotify.com/authorize?"
    url += "client_id=fe3a4d8ed5574bafa79967dfbc1a12d1"
    url += "&response_type=code"
    url += "&redirect_uri=http://localhost:5173/"
    url += "&scope=user-library-read user-top-read"
    url += "&code_challenge_method=S256"
    url += `&code_challenge=${base64encode(await sha256(codeVerifier))}`
    window.location = url
}

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}