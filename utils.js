// save token in the local storage
function saveToken (token) {
    if (typeof(Storage) !== undefined) {
        localStorage.setItem("token", token);
    }
}

export function extractResponse(response) {
    const { data, headers } = response;
    //save token
    saveToken(headers.x_auth);

    return data
}
