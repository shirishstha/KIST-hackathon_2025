//local modules
const { codewarModel, graphicdesigningModel, hackathonModel } = require("../models/hackfest");



//controller for codewar form submission
const codewarController = async (req, res) => {
    try {
        const { email, id, name, semester, faculty, contact } = req.body;

        if (!name || !semester || !faculty || !email || !id ||!contact ) {
            return res.send({
                success: false,
                message: "All fields must be filled"

            })
        }
        const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.send({
                success: false,
                message: "Invalid email format."
            })
        }
        const idRegex = /^[0-9]{4,}$/
        if (!idRegex.test(id)) {
            return res.send({
                success: false,
                message: "Invalid id."
            })
        }
        const contactRegex = /^(98|97|96)\d{8}$/
        if (!contactRegex.test(contact)) {
           return res.send({
                success: false,
                message: "Invalid contact"
            })
        }

        // check for existance of registration
        const exists = await codewarModel.findOne({ email });
        if (exists) {
            return res.send({
                success: false,
                message: "You have already registered with this email."
            })
        }
        //send to database for record
        const register = await new codewarModel({ email, id, name, semester, faculty, contact }).save();
        if (!register) {
            return res.send({
                success: false,
                message: "something went wrong recording the data in the database"
            })
        }
        res.send({
            success: true,
            message: "Registration success",
            register
        })


    } catch (error) {
        console.log("Something went wrong");
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

//controller for graphic designing  
const graphicDesigningController = async (req, res) => {
    try {
        const { email, id, name, semester, faculty, contact } = req.body;


        if (!name || !semester || !faculty || !email || !id || !contact) {
            return res.send({
                success: false,
                message: "All fields must be filled"

            })
        }
        const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.send({
                success: false,
                message: "Invalid email format."
            })
        }
        const idRegex = /^[0-9]{4,}$/
        if (!idRegex.test(id)) {
            return res.send({
                success: false,
                message: "Invalid id."
            })
        }
         const contactRegex = /^(98|97|96)\d{8}$/
         if (!contactRegex.test(contact)) {
           return res.send({
                success: false,
                message: "Invalid contact"
            })
        }

        // check for existance of registration
        const exists = await graphicdesigningModel.findOne({ email });
        if (exists) {
            return res.send({
                success: false,
                message: "You have already registered with this email."
            })
        }
        //send to database for record
        const register = await new graphicdesigningModel({ email, id, name, semester, faculty, contact }).save();
        if (!register) {
            return res.send({
                success: false,
                message: "something went wrong recording the data in the database"
            })
        }
        res.send({
            success: true,
            message: "Registration success",
            register
        })
    } catch (error) {
        console.log("Something went wrong");
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

//controller for hackathon 

const hackathonController = async (req, res) => {
    try {
        const { team, members } = req.body;
        const validateMembers = () => {
            const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const idRegex = /^[0-9]{4,}$/
            const values = Object.values(members);
            let fullyValidCount = 0;
            const errors = [];

            for (let i = 0; i < values.length; i++) {
                const { name, email, id, semester, faculty } = values[i];
                const filledFields = [name, email, id, semester, faculty].filter(Boolean).length;

                //all field empty case 
                if (filledFields === 0) continue; //skips the optional members

                //partially filled case
                if (filledFields < 5) {
                    errors.push(`Member ${i + 1} has incomplete fields`);
                    continue;
                }

                //if all fields are filled check for validations 
                if (!emailRegex.test(email)) {
                    errors.push(`Member ${i + 1} consist invalid email`);
                }
                if (!idRegex.test(id)) {
                    errors.push(`Member ${i + 1} has invalid id`);
                    continue;
                }

                fullyValidCount++;
            }

            if (fullyValidCount < 2) {
                errors.push("At least two members must be fully filled.")
            }

            return {
                isValid: errors.length === 0,
                errors,
            }
        }

        const validateTeam = () => {
            const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const contactRegex = /^(98|97|96)\d{8}$/

            if (!team.email || !team.name || !team.faculty || !team.contact) {
                return false;
            }
            if (!emailRegex.test(team.email)) {
                return false;
            }
            if (!contactRegex.test(team.contact)) {
                return false;
            }

            return true;
        }

        const validTeam = validateTeam();
        if (!validTeam) {
            return res.send({
                success:false,
                message:"Invalid or empty dataformat provided for team information."
            })
        };

        //members validation
        const { isValid, errors } = validateMembers();
        if (!isValid) {
            return res.send({
                success:false,
                message:"Invalid data for members or empty data provided",
                errors:errors
            })
        }

        //checking already exist registration
        const exists = await hackathonModel.findOne({email:team.email});
        if(exists){
            return res.send({
                success:false,
                message: "You have already registered for hackathon with this email"
            })
        }

        const memberArray = Object.values(members);
        const data = new hackathonModel({
            name:team.name,
            email:team.email,
            contact:team.contact,
            faculty:team.faculty,
            members:memberArray
        })

        await data.save();

        if(!data){
           return res.send({
                success:false,
                message: "Couldnot record the data in the database" 
            })
        }
        res.send({
            success:true,
            message: "Registration successfull"
        })

    } catch (error) {
        console.log("Something went wrong");
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

exports.codewarController = codewarController;
exports.graphicDesigningController = graphicDesigningController;
exports.hackathonController = hackathonController;