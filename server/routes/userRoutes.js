//external module 
const express = require("express");
const { codewarController, graphicDesigningController, hackathonController } = require("../controllers/formController");
const { adminAuthController } = require("../controllers/adminController");

//initializing router
const userRouter = express.Router();


//routes
userRouter.post('/codewar',codewarController);
userRouter.post('/graphicdesigning', graphicDesigningController);
userRouter.post('/hackathon',hackathonController);
userRouter.post('/adminLogin', adminAuthController );

module.exports = userRouter;