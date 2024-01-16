export default function isLoggedIn() {
    const isNull = (sessionStorageName) => { 
        const value = sessionStorageName.getItem(value)
        return (value != null && value != "undefined")
    }
    return isNull("authToken") || isNull("accessToken")
}