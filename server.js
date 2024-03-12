const express = require('express');
const app = express();

const Port = 500;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
})