
function getCharacter() {
    return fetch("https://www.breakingbadapi.com/api/characters").then(response => {
        return response.json();
    })
};

export { getCharacter};