//external module 
const express = require("express");
const { adminCodewarController, adminGraphicDesigningController, adminHackathonController } = require("../controllers/adminController");


//initializing router
const adminRouter = express.Router();


//routes
adminRouter.get('/codewar',adminCodewarController);
adminRouter.get('/graphicdesigning',adminGraphicDesigningController );
adminRouter.get('/hackathon',adminHackathonController);

module.exports = adminRouter;