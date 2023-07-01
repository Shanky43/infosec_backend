const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)
    if (token) {
        try {
            const decoded = jwt.verify(token.split(" ")[1], "userAuth")
            if (decoded) {
                req.body.userId = decoded.userId;
                req.body.userName = decoded.userName;
                next()
            }
        } catch (error) {
            res.status(401).json({ error: error.message })
        }
    } else {
        res.status(406).json({
            error: error.message,
            message: "Please Login!!!"
        })
    }
}


module.exports = { auth }