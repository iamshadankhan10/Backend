require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")
const userModel = require("./src/models/user.models")


connectToDB()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    })

