function getCharacter() {
    const characterNameInput = document.getElementById("character");
    const characterInfo = document.getElementById("characterInfo");

    const characterName = characterNameInput.value.toLowerCase();
    console.log(characterName)

    fetch(`http://localhost:3000/rickandmorty/${characterName}`)
        .then(response => response.json())
        .then(data => {
            const {nombre, edad} = data;
            console.log(data)

            characterInfo.innerHTML = `
                                        <h2>${id}</h2>
                                        <p>${status}</p>
                                        <p>${species}</p>
                                        <p>${gender}</p>
                                        <img src=${image}>`
        })
        .catch(error => characterInfo.innerHTML = `<p>Personaje no encontrado</p>`)
}