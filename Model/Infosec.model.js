const { Schema, model } = require("mongoose")

const infosecSchema = Schema({
    fullName: { type: String },
    designation: { type: String },
    emailaddress: { type: String },
    dob: { type: String },
    contactnumber: { type: String },
    city: { type: String },
    profilepicture: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    other: { type: String },
    userId: { type: String || Number, },
}, {
    versionKey: false
})


const infosecModel = model("infosecData", infosecSchema)

module.exports = { infosecModel }