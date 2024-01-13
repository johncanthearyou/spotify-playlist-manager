export default function isLoggedIn() {
    const authToken = sessionStorage.getItem("authToken");
    const accessToken = sessionStorage.getItem("accessToken");
    const loggedIn = (authToken != null && authToken != undefined) || (accessToken != null && accessToken != undefined)

    return loggedIn
}