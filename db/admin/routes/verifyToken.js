const jwt = require('jsonwebtoken');
const globel = require('../../globelFunction');
const User = require('../../model/User');

var ITM = globel.apiErrorMessage({ // Invalid Token Massage
    message: "Invalid `access_token`."
})
module.exports = async function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send(ITM);

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        // Checking if the user is already in the database
        const authorExist = await User.findOne({ _id: verified });
        if (!authorExist) return res.status(400).send(ITM);

        req.user = verified;
        next();
    } catch (err) {
        console.log("err");
        res.status(400).send(ITM);
    }
}