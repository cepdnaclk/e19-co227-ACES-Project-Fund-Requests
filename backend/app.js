const exspress = require('express');
const cors = require("cors");
const axios = require('axios');
const multer = require('multer');
const app = exspress();


app.use(exspress.static('./public'))

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Set the file size limit to 10 MB (adjust as needed)
});



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
    // sendToAdmin(data);
   
})

// Handle file upload
app.post('/pdf', upload.single('pdfFile'), (req, res) => {
    console.log(req.body);
  if (!req.file) {
    console.log("No file uploaded.");
    return res.status(400).send('No file uploaded.');
    
  }

  // You can access the uploaded file's information as req.file
  // Here, you can save it to a database, process it, etc.

  console.log("File uploaded successfully.");
  res.status(200).send('File uploaded successfully.');
});

// app.post("/pdf", (req, res) => {
//     const data = req.body
//     console.log("receiving the pdf");
//     console.log(data);
//     if (data) {
//          res.status(200).json({success: true})
//     }
//     // sendToAdmin(data);
   
// })

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

