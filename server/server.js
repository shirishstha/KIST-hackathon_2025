//external module 
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');

//initialization of app
dotenv.config();
const app = express();


//for testing
app.use(cors());

//for prodution use
// app.use(cors({
//     origin: 'http://localhost:5173', //frontend url 
//      methods: ['GET', 'POST', 'PUT', 'DELETE']
// }));

app.use(express.json());

// routes
app.use('/api/kisthackfest/landing',(req,res)=>{
    res.send("Your backend is running successfully");
})
app.use('/api/kisthackfest',userRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Your server is running on http://localhost:${PORT}`);
})

