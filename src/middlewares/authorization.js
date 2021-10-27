const jwt = require('jsonwebtoken');
const { MY_SECRET_KEY } = require('../config/jwt');

const authorizationMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){
        try {
            const decoded = jwt.verify(authorization.replace('Bearer ', ''), MY_SECRET_KEY);
            next()
        } catch(e) {
            res.send({
                error: "Invalid token"
            });
        }
    }
    next();
};

module.exports = authorizationMiddleware;