const { codewarModel, hackathonModel, graphicdesigningModel } = require("../models/hackfest");
const adminModel  = require("../models/adminModel");

const adminCodewarController = async (req, res) => {
    try {
        const codewarData = await codewarModel.find({});
        if (!codewarData) {
            return res.send({
                success: false,
                message: "Data is undefined"
            })
        }
        res.send({
            success: true,
            message: "Data fetch success",
            codewarData
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong getting codewar info"
        })
    }
}
const adminHackathonController = async (req, res) => {
    try {
        const hackathonData = await hackathonModel.find({});
        if (!hackathonData) {
            return res.send({
                success: false,
                message: "Data is undefined"
            })
        }
        res.send({
            success: true,
            message: "Data fetch success",
            hackathonData
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong getting codewar info"
        })
    }
}
const adminGraphicDesigningController = async (req, res) => {
    try {
        const graphicDesigningData = await graphicdesigningModel.find({});
        if (!graphicDesigningData) {
            return res.send({
                success: false,
                message: "Data is undefined"
            })
        }
        res.send({
            success: true,
            message: "Data fetch success",
            graphicDesigningData
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong getting codewar info"
        })
    }
}

const adminAuthController = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const password = req.body.password?.trim();

    if (!email || !password) {
      return res.send({ success: false, message: "Both fields required" });
    }

    const adminData = await adminModel.findOne({
      email: { $regex: new RegExp(`^${email}$`, 'i') }
    });

    if (!adminData) {
      return res.send({
        success: false,
        message: "Unauthorized access: wrong email"
      });
    }

    if (adminData.password !== password) {
      return res.send({
        success: false,
        message: "Unauthorized access"
      });
    }

    res.send({
      success: true,
      message: "Login success",
      email: adminData.email
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Could not fetch admin details",
      error: error.message
    });
  }
};


exports.adminCodewarController = adminCodewarController;
exports.adminHackathonController = adminHackathonController;
exports.adminGraphicDesigningController = adminGraphicDesigningController;
exports.adminAuthController = adminAuthController;