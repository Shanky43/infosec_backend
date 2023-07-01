const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/user.route")
const { auth } = require("./Middleware/auth.middleware")


const app = express()
const cors = require("cors");
const { infosecDataRouter } = require("./Routes/infosec.route")
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter)

app.use("/infosec", auth, infosecDataRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`Server is running at ${process.env.PORT}`)
    } catch (error) {
        console.log(`Something error happened \n Error:${error}`)
    }
})