export default async function logoutRedirect() {
    sessionStorage.clear()
    window.location = "/";
}