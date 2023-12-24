export default function authRedirect() {
    // TODO: this needs to use an env var
    const clientId = null
    const responseType = "code"
    // TODO: this needs to use an env var
    const redirectUri = "http://localhost:5173/"
    const state = "some-state"
    const scope = "user-library-read"
    const showDialog = "true"
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}&show_dialog=${showDialog}`
}
