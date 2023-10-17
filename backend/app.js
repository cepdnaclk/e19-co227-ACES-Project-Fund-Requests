const express = require('express');
const cors = require("cors");
const axios = require('axios');
const multer = require('multer');
const app = express();

const session = require('express-session');

const bodyParser = require('body-parser');

const emailService = require('./Services/emailService');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require("mongoose");

const Request = require("./models/fundrequest")

const User = require("./models/user")


// app.use(express.static('./public'))

// Increase the request size limit to 50MB (or set it to your desired limit)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use(cors({ origin: 'http://127.0.0.1:5173' }));



// Set up mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://e19210:IsotkvutF3XHtIyh@cluster0.tthbjjk.mongodb.net/local_library?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  
  await mongoose.connect(mongoDB);
  console.log("Database connected");


}

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: "252888321357-ft7hukbmlljdnf5nisjeienit9cdu216.apps.googleusercontent.com",
//       clientSecret: "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",
//       callbackURL: 'http://localhost:5000/auth/google/callback', // This should match your authorized redirect URI
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       // Check if the user already exists in your database
//       const existingUser = await User.findOne({ googleId: profile.id });

//       if (existingUser) {
//         // User already exists, no need to create a new one
//         return done(null, existingUser);
//       }

//       // Create a new user based on the Google profile information
//       const newUser = new User({
//         googleId: profile.id,
//         displayName: profile.displayName,
//         email: profile.emails[0].value,
//         // You can add more fields as needed
//       });

//       // Save the new user to the database
//       await newUser.save();

//       done(null, newUser);
//     }
//   )
// );

// app.use(
//   session({
//     secret: 'someSecretKey', // Replace with a strong, random secret key
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
// passport.deserializeUser((user, done) => {
//   done(null, user)
// });

// // Define routes for authentication
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     // Successful authentication, redirect to the React app
//     res.redirect('http://127.0.0.1:5173/');
//   }
// );

// // Add a route for checking if the user is authenticated
// app.get('http://127.0.0.1:5173/', (req, res) => {

//   // res.render(StudentHome)
//   if (req.isAuthenticated()) {
//     // The user is authenticated, serve your React page here
//     console.log("backend user: ", req.user);

//     res.status(200).json({ user: req.user });
//   } else {
//     // The user is not authenticated, show a modal or any other UI
//     console.log("backend user not auth: ", req.user);

//     res.status(200).json({ user: null }); // You can replace this with your modal logic
//   }
// });

// // Checking whether the user is logged in
// app.get('/check-auth-status', (req, res) => {
//   if (req.isAuthenticated()) {
//     console.log("API authenticated");
 
//     // User is authenticated, send user information
//     res.json({ user: req.user });
//   } else {
//     // User is not authenticated, send null or an empty object
//     console.log("API not authenticated");


//     res.json({ user: null });
//   }
// });

// app.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect("/");
// })


app.get("/admin", (req, res)=>{
  res.send('Hi there')
})




// const countriesMiddleware = require('./routes/countries')

app.use(express.urlencoded({extended: false})) // handle POST requests body. Handle data in the trype "application/x-www-form-urlencoded"
app.use(express.json()); // Handle the data in the type "application/json"

// app.use("/change/",countriesMiddleware);
app.use(cors())

// app.get("/", (req, res) => {
//     res.status(200).json({success:true})
// })

function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// Function to get data from the database based on the ID
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


// Take the fund request details and save them in the databse
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
        lecturer_email: data.lecturerEmail,
        lecturer_response: false,
        hod_response: false,
        aces_response: false

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


// GEt data from the database
app.get("/find/:id", async (req, res)=>{
  console.log(
    "finding"
  );
  const id = req.params.id;
  console.log(id);

  const foundRequest = await getRequestDataByID(id);

  if (foundRequest != null){
    // You can do whatever you need in this section with the found request
        res.status(200).json(foundRequest)
  }else{
        res.status(404).json({success: false})

  }
  
})

app.get("/admin/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const foundRequest = await getRequestDataByID(id);

    if (foundRequest !== null) {
      // Can customize how the data is displayed here
      res.status(200).json(foundRequest);
    } else {
      res.status(404).json({ success: false, message: "Data not found" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
})



app.listen(5000, ()=>{
    console.log("Server started and running on port 5000");
})

