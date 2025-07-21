//external module 
const express = require("express");
const { codewarController, graphicDesigningController } = require("../controllers/formController");

//initializing router
const userRouter = express.Router();


//routes
userRouter.post('/codewar',codewarController);
userRouter.post('/graphicdesigning', graphicDesigningController);

module.exports = userRouter;