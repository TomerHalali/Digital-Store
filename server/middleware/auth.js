const jwt = require('jsonwebtoken');

module.exports = async function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        return res.sendStatus(401);
    } else {
        jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
            if (err) {
                return res.sendStatus(403);
            } else {
                next();
            }
        })
    }



}