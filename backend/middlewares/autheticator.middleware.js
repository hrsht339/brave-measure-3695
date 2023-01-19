const jwt = require("jsonwebtoken")

const authenticator = (req, res, next) => {
    let token = req.headers.authorization
    if (token) {
        let decoded = jwt.verify(token, "masai")
        if (decoded) {
            next()
        }
        else {
            res.send("please login")
        }
    }
    else {
        res.send("please login")
    }
}

module.exports = {
    authenticator
}