const {countries} = require('../data');


const updateACountry = (req, res)=>{
   
    const {id} = req.params;
    const {title} = req.body;
    
    console.log(id);
    console.log(req.body);
    if (id) {

        const selectedCountry = countries.find((country) => country.id == Number(id));

        selectedCountry.title = title

        return res.status(200).send(selectedCountry)
    }
    res.status(401).send("No id there");
}

const deleteACountry = (req, res)=>{
   
    const {id} = req.params;

    
    console.log(id);

    if (id) {

        const selectedCountry = countries.find((country) => country.id == Number(id));

        if (!selectedCountry) {
            return res.status(404).send(`No country with that id: ${id}`)
        }

        const newCountries = countries.filter((country) => country.id !== Number(id));

    

        return res.status(200).json(newCountries);
    }
    res.status(401).send("No id there");
}

module.exports = {updateACountry, deleteACountry}