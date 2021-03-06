// save token in the local storage
function saveToken (token) {
    if (typeof(Storage) !== undefined) {
       return localStorage.setItem("token", token);
    }
    // afficher un warning
    console.warn('localstorage is not define here')
}

export function extractResponse(response, save ) {
    const { data, headers } = response;
    //save token on Localstorage
    if (save) {
        saveToken(headers['x-token']);
    }

    return data
}

export function takeTokenFromLocalStorage(){
    if (typeof(Storage) !== undefined) {
        return localStorage.getItem("token");
     }
     // afficher un warning
     console.warn('localstorage is not define here')    
}

export class ErrorOnRequest {
    constructor(ob, msg) {
        this.ob = ob;
        this.msg = msg;
    }
}

export function handleErrorOnRequest(ob) {
    if ( ob.response ) {
        // server respond but with a bad status code
        throw new ErrorOnRequest(ob.response, 'response back but not was expected');
    }
        // may be pb of connexion
    else if (ob.request) {
        throw new ErrorOnRequest(ob.request, 'request was made but no response received');
    }
}

 