//external module 
const express = require('express');
const cors = require('cors');

//initialization of app
const app = express();


//for testing
app.use(cors());

//for prodution use
// app.use(cors({
//     origin: 'http://localhost:5173', //frontend url 
//      methods: ['GET', 'POST', 'PUT', 'DELETE']
// }));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Your backend is running successfully");
})

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Your server is running on http://localhost:${PORT}`);
})

