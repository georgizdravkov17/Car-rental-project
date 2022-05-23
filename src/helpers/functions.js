export const get_logged_customer = () => {
    return localStorage("customer");
}

export const logout_customer = () => {
    localStorage.removeItem("customer");
}

