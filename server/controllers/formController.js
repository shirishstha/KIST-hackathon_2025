//controller for codewar form submission
const codewarController = (req, res) => {
    try {
        const { email, id, name, semester, faculty } = req.body;
        console.log(email, id, name, semester, faculty);

        if (!name || !semester || !faculty || !email || !id) {
            return res.send({
                success: false,
                message: "All fields must be filled"

            })
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
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

        //send to database for record


    } catch (error) {
        console.log("Something went wrong");
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

//controller for graphic designing  
const graphicDesigningController = (req, res) => {
    try {
        const { email, id, name, semester, faculty } = req.body;
        console.log(email, id, name, semester, faculty);

        if (!name || !semester || !faculty || !email || !id) {
            return res.send({
                success: false,
                message: "All fields must be filled"

            })
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
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

        //send to database for record


    } catch (error) {
        console.log("Something went wrong");
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

//controller for hackathon 
const hackathonController = (req, res) => {
    try {

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