const jwt = require('jsonwebtoken');
const { MY_SECRET_KEY } = require('../config/jwt');

const authorizationMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization; // get token from HTTP (GET, PUT, POST, etc) verbs header
    if(authorization)
    {
        try {
            const decoded = jwt.verify(authorization.replace('Bearer ', ''), MY_SECRET_KEY);
            next();
        } catch(e)
        {
            res.send({
                error: "Error - Invalid token"
            });
        } 
    } else // token is undefined
    {
        res.send({
            error: "Invalid token - does not exist!"
        });
    }
}
module.exports = authorizationMiddleware;