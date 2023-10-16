const express = require('express');
const cors = require("cors");
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');

const emailService = require('./Services/emailService');



const mongoose = require("mongoose");

const Request = require("./models/fundrequest")

app.use(express.static('./public'))

// Increase the request size limit to 50MB (or set it to your desired limit)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://e19210:IsotkvutF3XHtIyh@cluster0.tthbjjk.mongodb.net/local_library?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  
  await mongoose.connect(mongoDB);
  console.log("Database connected");


}

app.get("/admin", (req, res)=>{
  res.send('Hi there')
})


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

// const convertFileToBuffer = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
    
//     reader.onload = (event) => {
//       const buffer = Buffer.from(event.target.result);
//       resolve(buffer);
//     };

//     reader.onerror = (event) => {
//       reject(event.error);
//     };

//     reader.readAsArrayBuffer(file);
//   });
// };



// const countriesMiddleware = require('./routes/countries')

app.use(express.urlencoded({extended: false})) // handle POST requests body. Handle data in the trype "application/x-www-form-urlencoded"
app.use(express.json()); // Handle the data in the type "application/json"

// app.use("/change/",countriesMiddleware);
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({success:true})
})

function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

async function getRequestDataByID(id) {

  try {
    const neededRequest = await Request.findById(id);
    console.log(neededRequest);
    return neededRequest;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
  
}



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

app.post("/fundRequest", async (req, res) => {

    const data = req.body
    console.log("receiving data");
    console.log(data);
    if (data) {
      // const selectedFile = data.projectExpenses;
      // const fileBuffer = await convertFileToBuffer(selectedFile);

      const arrayBuffer = base64ToArrayBuffer(data.projectExpenses);

      console.log(arrayBuffer);

      const buffer = Buffer.from(arrayBuffer);
      console.log(buffer);
      
      const newRequest = new Request({
        applicants_names: data.ApplicantsNames,
        leader_name: data.leadersName,
        email: data.email,
        contact_no: data.contactNo,
        project_title: data.projectTitle,
        project_description: data.projectDescription,
        goals: data.goals,
        risks: data.risks,
        project_type: data.projectType,
        Project_expenses: buffer,
        starting_date: data.startingDate,
        ending_date: data.endingDate,
        agreement: data.agreement,
        lecturer_name: data.lecturerName,
        lecturer_email: data.lecturerEmail

      });


     try {
      // Save the instance to the database
      const savedRequest = await newRequest.save();
      console.log('Request saved successfully:', savedRequest);

     emailService.sendEmail('csdmntest@gmail.com', "A New Fund Request",
      "You have a new request to review. Please visit this link: (the link)"
      )

      // Respond with a success JSON response
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving request:', error);
      // Handle the error and respond with an error JSON response
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  } else {
    // If no data is provided in the request, respond with an error JSON response
    res.status(400).json({ success: false, error: 'Bad request' });
  }
        
    } 
);
    // sendToAdmin(data);
   


// Handle file upload
// app.post('/pdf', upload.single('pdfFile'), (req, res) => {
//     console.log(req.body);
//   if (!req.file) {
//     console.log("No file uploaded.");
//     return res.status(400).send('No file uploaded.');
    
//   }

  // You can access the uploaded file's information as req.file
  // Here, you can save it to a database, process it, etc.

//   console.log("File uploaded successfully.");
//   res.status(200).send('File uploaded successfully.');
// });

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

// GEt data from the database

app.get("/find/:id", async (req, res)=>{
  console.log(
    "finding"
  );
  const id = req.params.id;
  console.log(id);

  const foundRequest = await getRequestDataByID(id);

  if (foundRequest != null){
        res.status(200).json({success: true})
  }else{
        res.status(404).json({success: false})

  }
  
  

  

})

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

