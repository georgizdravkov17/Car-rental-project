export const get_logged_customer = () => {
    return JSON.parse(localStorage.getItem("customer"));
}

export const logout_customer = () => {
   return localStorage.removeItem("customer");
}

// export const printCollection = (collection, Component) => {
//     return collection.map(element => <Component />)
// }



