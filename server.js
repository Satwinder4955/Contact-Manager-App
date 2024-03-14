const express = require('express');
const errorHandler = require('./middleWare/errorhandler');
const connectDb = require('./config/dbConnection');

// .env file called;
const dotenv = require( 'dotenv' ).config() ;
const app = express();

// getting api on web
// app.get('/api/contacts', (req, res) => {
//     res.send('get all contacts.')
// });

// Calling DataBase connection
connectDb();




// getting message in the form of Json
// app.get('/api/contacts', (req, res) => {
//     res.json({message :'Getting response in the form of JSON.'})
// });


// INBUILT - MiddleWare
app.use(express.json());
// connecting routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));



// Handling Error
app.use(errorHandler)




// running Port on web
const Port = process.env.PORT || 5000;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
})
//