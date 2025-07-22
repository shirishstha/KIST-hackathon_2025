//external modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//local modules
const userRouter = require('./routes/userRoutes');
const connectDB = require('./helpers/db');
const adminRouter = require('./routes/adminRoutes');

//initialization of app
dotenv.config();
const app = express();

//database connection
connectDB();


// //for testing
// app.use(cors());

// for prodution use
app.use(cors({
  origin: ["https://kisthackfest.vercel.app"], // allow only this domain
  credentials: true,
}));

app.use(express.json());

// routes
app.use('/api/kisthackfest/landing',(req,res)=>{
    res.send("Your backend is running successfully");
})

app.use('/api/kisthackfest/admin',adminRouter);
app.use('/api/kisthackfest',userRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Your server is running on http://localhost:${PORT}`);
})

