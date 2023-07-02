const express = require("express")

const { infosecModel } = require("../Model/Infosec.model");
const infosecDataRouter = express.Router()

infosecDataRouter.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const infosec = infosecModel(req.body);
    await infosec.save();
    res.status(200).send("Successfully added Data");
  } catch (error) {
    res.status(502).json({ error: error.message })
  }
})

infosecDataRouter.get("/", async (req, res) => {
  console.log(req.query, "line");
  const { userId } = req.query;
  console.log(userId);

  try {
    const infosecData = await infosecModel.find({ userId });
    console.log(infosecData);
    res.status(200).json({ infosecData });
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
});

infosecDataRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const info = await infosecModel.findById(id);

    if (!info) {
      return res.status(404).send("Data not found");
    }

    if (req.body.userId !== info.userId) {
      return res.status(400).send("Not able to update");
    }

    await infosecModel.findByIdAndUpdate(id, req.body);
    res.send("Data has been updated");
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});




module.exports = { infosecDataRouter }