export const setLoggedIn = (loginData) => {
    return {
        type : 'LOGIN',
        payload : loginData,
    }
}

export const Logout = () => {
    return {
        type : 'LOGOUT'
    }
}