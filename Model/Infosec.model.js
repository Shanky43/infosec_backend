const { Schema, model } = require("mongoose")

const infosecSchema = Schema({

    likelihood: { type: Number },

}, {
    versionKey: false
})


const infosecModel = model("infosecData", infosecSchema)

module.exports = { infosecModel }