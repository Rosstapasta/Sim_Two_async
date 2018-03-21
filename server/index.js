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

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use( bodyParser.json() );
app.use( cors() );

app.use( session({ 
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));


app.post('/api/login', checkForSession, (req, res, next) => 
    {
        const {session} = req;
        const {username, pw} = req.body;

    console.log(req.body, "req.body");

        app.get('db').login_user(username, pw).then( 
            
            houser_user => {
                if(houser_user[0]){

                    session.user.username = username;
                    session.user.pw = pw;
                    
                    res.status(200).send(session.user)
                }else{

                res.status(500)
            }
        })    
    }
);

app.post('/api/register', checkForSession, (req, res, next) => {

    const {session} = req;
    const {username, pw} = req.body;
    session.user.username = username;
    session.user.pw = pw;

    app.get('db').register_user(username, pw).then(
        houser_user => {
            res.status(200).send(session.user);
        }
    )
})

app.get('/api/getuser', checkForSession, (req, res, next) => {
    
    const {session} = req;
    res.status(200).send(session.user)
})

app.get('/api/getproperties', (req, res, next) => {
    
        const {session} = req;
        app.get('db').get_user_props(session.user.username, session.user.pw).then(
            houser => {
                res.status(200).send(houser);
            }
        )
    }
)

app.post('/api/create', (req, res, next) => {

    const { propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, recommendRent, desiredRent, monthlyMortgage } = req.body;
    const {session} = req;

    app.get('db').new_property(session.user.username, propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, monthlyMortgage, recommendRent, desiredRent).then( 
        houser => {
            res.status(200).send(houser)
        }
    )
});

app.delete('/api/delete', (req, res, next) => {
    const {id } = req.query;
    const {session} = req;

    app.get('db').delete_prop( id, session.user.username, session.user.pw ).then(

        houser_user => {
            if(houser_user){
                res.status(200).send(houser_user); 
            }else{
                res.status(500);
            }  
        }
    )
})

app.post('/api/logout', (req, res, next) => {
    const { session } = req;
    session.destroy();
    res.status(200).send( req.session );
},)

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )