// save token in the local storage
function saveToken (token) {
    if (typeof(Storage) !== undefined) {
       return localStorage.setItem("token", token);
    }
    // afficher un warning
    console.warn('localstorage is not define here')
}

export function extractResponse(response) {
    const { data, headers } = response;
    //save token on Localstorage
    saveToken(headers['x-auth']);

    return data
}
