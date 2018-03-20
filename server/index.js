const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
const checkForSession = require('./middlewares/session');
require('dotenv').config();

const app = express();

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
} = process.env;

app.use( bodyParser.json() );
app.use( cors() );

app.use( session({ 
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.post('/api/login', (req, res, next) => 
    {
        const {session} = req;
        const {username, pw} = req.body;

        session.user = {
            username: '',
            pw: '',
            properties: []

        }

        app.get('db').login_user(username, pw).then( 
            
            houser_user => {
                    console.log(houser_user);
                if(houser_user[0]){

                    session.user.username = username;
                    session.user.pw = pw;
                    session.user.properties = [];
                    
                    res.status(200).send(session.user)
                    console.log(session.user, "login endpoint");

                }else{

                res.status(500)
            }
        })    
    }
);

app.post('/api/register',  (req, res, next) => {

    const {session} = req;
    const {username, pw} = req.body;

    session.user.username = username;
    session.user.pw = pw;
    session.user.properties = [];

    app.get('db').register_user(username, pw).then(
        houser_user => {
            res.status(200).send(session.user);
        }
    )
})

// app.get('/api/getuser', checkForSession, (req, res, next) => {
    
//     const {session} = req;
//     // console.log(session.user, "endpoint getuser")
    
//     // session.user.username = session.user.username;
//     // session.user.pw = session.user.pw;
//     // session.user.properties = [];

//     res.status(200).send(session.user)
    
// })

app.get('/api/getproperties', (req, res, next) => {

        const {username, pw} = req.query;
        const {session} = req;

        
        console.log(session.user, "getproperties endpoint")
        
        app.get('db').get_user_props(username, pw).then(
            houser => {

                // session.user.username = username;
                // session.user.pw = pw;
                // session.user.properties = houser;
                
                res.status(200).send(houser);
            }
        )
    }
)

app.post('/api/create', (req, res, next) => {

    const { username, propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, recommendRent, desiredRent, monthlyMortgage } = req.body;

    app.get('db').new_property(username, propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, monthlyMortgage, recommendRent, desiredRent).then( 
        houser => {
            res.status(200).send(houser)
        }
    )
    console.log("hit create endpoint in server")

});

app.delete('/api/delete', (req, res, next) => {
    const {id, username, pw} = req.query;
    const {session} = req;

    app.get('db').delete_prop( id, username, pw ).then(

        houser_user => {

            if(houser_user){
                res.status(200).send(houser_user); 
            }else{
                res.status(500);
            }  
        }
    )
    console.log("hit delete endpoint")
})

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )