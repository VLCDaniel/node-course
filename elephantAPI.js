const fetch = require('node-fetch');

const elephantsAPI = async (req, res) => {
    const response = await fetch('https://elephant-api.herokuapp.com/elephants');
    const body = await response.json();

    let elephantDetails = "";
    body.filter(({name, species, sex, note, image}) => name != undefined && species != undefined)
    .map(({name, species, sex, note, image}) => {
        elephantDetails += "<p> Name: " + name + ", Species: " + species + ", Sex: " + sex + " <br/>" + note + " <br/> <img src=" + image + " width='500' height='600'> </p>\n";
    });

    res.send(elephantDetails);
}

module.exports = elephantsAPI;