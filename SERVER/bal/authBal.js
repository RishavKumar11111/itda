const sha512 = require('js-sha512').sha512;
const { sequelize } = require('../config/config');
//TODO: Add SALTED Hash
exports.signIn = async (req, res) => {
    try {
        const query = `SELECT a."Password", a."Role", 
        case 
        when a."Role" ='ITDA' then b."ITDAName" 
        when a."Role" = 'ADMIN' then 'ADMIN'
        end as "UserName" 
        FROM "Users" as a
        LEFT JOIN "ITDAMaster" as b ON a."UserID" = b."UserID"
        WHERE a."UserID"='${req.body.userId}'`;
        const result = await sequelize.query(query);
        const userDetails = result[0][0];
        const response = {
            userId: req.body.userId
        }
        if (userDetails) {
            if (sha512(req.body.password) === userDetails.Password) {
                req.session.userId = req.body.userId;
                req.session.role = userDetails.Role;
                req.session.userName = userDetails.UserName;
                console.log(req.session);
                response.isSuccess = true;
                response.userName = userDetails.UserName;
                response.userRole = userDetails.Role;
                response.message = 'Successfully loggedin.';
            } else {
                response.isSuccess = false;
                response.message = 'Wrong Credential';
            }
        } else {
            response.isSuccess = false;
            response.message = 'Wrong Credential';
        }
        res.send(response);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}