const express = require("express")

const { infosecModel } = require("../Model/Infosec.model");
const infosecDataRouter = express.Router()

infosecDataRouter.post("/userdata", async (req, res) => {
    console.log(req.body)
    try {
        const infosec = infosecModel(req.body);
        await infosec.save();
        res.status(200).send("Successfully added Data");
    } catch (error) {
        res.status(502).json({ error: error.message })
    }
})

infosecDataRouter.get("/userdata", async (req, res) => {
    try {
        const infosecData = await infosecModel.find(req.query);
        console.log(infosecData)
        res.status(200).json({ infosecData })
    } catch (error) {
        res.status(502).json({ error: error.message })
    }
})


module.exports = { infosecDataRouter }