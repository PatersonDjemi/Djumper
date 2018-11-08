const data = require("./articles.json");
const axios = require("axios");

const url = "http://localhost:3000/articles/createarticle";

function sendAllData() { 
    // utiliser async avec map of array ne rend pas les choses asynchrones
    // parce que map s'execute toujours de manière asynchrone !!!!
    // par consequent avec async in map, map nous retournera un array de promise. qui doit etre résolu avec promise all par exp
    // pareil avec la boucle forEach 
    const promised = data.map(async (dt) => {
        try {
            const response = await axios.post(url, {dt});
            if ( response.statusText === "OK") {
                return response.statusText;
            }
        } catch (e) {
            return "error occured";
        }        
    });

    // pas bosin de mettre un await devant un promise block, puisque c est la dernière instruction de la fonction
    // s'il y avait une suite alors du mettre la function en async et await le Promise.all
    Promise.all(promised)
    .then(res => {
        console.log(`after resolving all Promises: status ${res}, Array of ${res.length} elements`);
    })
    .catch(e => console.log("log the error", e));
}

sendAllData();
