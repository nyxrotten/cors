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
        const data = response.data.results;
        const {name, status, species, gender, origin: { name: originName }, image } = data[0]

        res.json({name, status, species, gender, origin: { name: originName }, image})
        
    } catch (ERROR) {
        res.status(404).json({error: "Personaje no encontrado"});
    }
});




app.listen(3000, () => {
    console.log(`El servidor está esuchando en el http://localhost:3000`)
})