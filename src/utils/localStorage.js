export const getDataFromLocalStorage = (key, callback = null) => {
    if(callback) {
        console.log("AA", callback(JSON.parse(localStorage.getItem(key))))
        return callback(JSON.parse(localStorage.getItem(key)));
    }
    return localStorage.getItem(key);
}