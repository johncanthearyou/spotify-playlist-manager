export default function isLoggedIn() {
    const isNull = (sessionStorageName) => { 
        const value = sessionStorage.getItem(sessionStorageName)
        return (value != null && value != "undefined")
    }
    return isNull("authToken") || isNull("accessToken")
}