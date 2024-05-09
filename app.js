const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/rickandmorty/:characterName", async (req, res) => {
    const name = req.params.characterName;
    const url =`https://rickandmortyapi.com/api/character/?name=${name}`

    try {
        const response = await axios.get(url);
       
        const {name, status, species, gender, origin: {}, image} = response.data;;
         
        // results.forEach((key) => character.push(key.name, key.status, key.species, key.gender, key.origin.name, key.image))
        console.log(name)

            
        res.json({nombre, edad})
    } catch (ERROR) {
        res.status(404).json({error: "Personaje no encontrado"});
    }
});




app.listen(3000, () => {
    console.log(`El servidor está esuchando en el http://localhost:3000`)
})