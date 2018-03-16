module.exports = function(req, res, next){
    const { session } = req;

    if(!session.user ){
        session.user = {
            username: '',
            properties: []
            
        }
    }
    console.log(session, "check session")
    next();
};