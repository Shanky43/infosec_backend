const express = require("express")

const { infosecModel } = require("../Model/Infosec.model");
const infosecDataRouter = express.Router()

infosecDataRouter.get("/", async (req, res) => {
    try {

        const infosecData = await infosecModel.find(req.query);
        console.log(infosecData)
        res.status(200).json({ infosecData })
    } catch (error) {
        res.status(502).json({ error: error.message })
    }
})


module.exports = { infosecDataRouter }