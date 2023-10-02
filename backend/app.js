const exspress = require('express');
const cors = require("cors");
const axios = require('axios');

const app = exspress();


app.use(exspress.static('./public'))




const countriesMiddleware = require('./routes/countries')

app.use(exspress.urlencoded({extended: false})) // handle POST requests body. Handle data in the trype "application/x-www-form-urlencoded"
app.use(exspress.json()); // Handle the data in the type "application/json"

app.use("/change/",countriesMiddleware);
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({success:true})
})

// POST

// app.post("/login", (req, res)=>{
//     const {name} = req.body; // To handle the POST request properly we have to use a middleware, that is urlencoded
//     console.log(name);
//     if(name){
//        return res.status(200).send("Success")
//     }else{
//        return res.status(401).send("Please enter valid credentials")
//     }
// });

app.post("/contactDetails", (req, res) => {
    const data = req.body
    console.log("receiving data");
    console.log(data);
    if (data) {
         res.status(200).json({success: true})
    }
    sendToAdmin(data);
   
})

app.post("/aboutProject", (req, res) => {
    const data = req.body
    console.log("receiving data");
    console.log(data);
    if (data) {
         res.status(200).json({success: true})
    }
   
})

app.post("/contact", (req, res)=>{
    const {names, leadsName, email, phoneNo} = req.body;
    if (names && leadsName && email && phoneNo) {
        console.log(names);
        console.log(leadsName);
        console.log(email);
        console.log(phoneNo);
        res.status(200).json({success: true})
    }
})

app.post("/about", (req, res)=>{
    const {title, description, goals, risks, prType, startDate, endDate} = req.body;
    if (title && description && goals && risks && prType && startDate && endDate) {
        console.log(title);
        console.log(description);
        console.log(goals);
        console.log(risks);
        console.log(prType);
        console.log(startDate);
        console.log(endDate);
        res.status(200).json({success: true})

    }
})

app.listen(5000, ()=>{
    console.log("Server started and running on port 5000");
})

//Function to send data to admin

async function sendToAdmin(data){
    try {
        const adminEndpoint = 'Include_Admin_Endpoint_URL'; 
    
        const response = await axios.post(adminEndpoint, data);
    
        if (response.status === 200) {
          console.log('Data sent to admin');
        } else {
          console.error('Failed to send data to admin');
        }
      } catch (error) {
        console.error('Error sending data to admin:', error.message);
      }
}

module.exports = { sendToAdmin };

