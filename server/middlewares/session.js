module.exports = function(req, res, next){
    const { session } = req;

    if(!session.user ){
        session.user = {
            username: '',
            pw: '',
            properties: []

        }
    }
    console.log(session.id, "session middleware")
    next();
};