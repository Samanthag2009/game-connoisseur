//authorization = has user login id
const reqAuth = (req, res, next) => {
    if (req.session.user_id){
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = reqAuth;