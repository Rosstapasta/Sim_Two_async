const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const checkSession = require('./middlewares/session');

const app = express();

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use( bodyParser.json() );
app.use( cors() );

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100000000000},
    
  }));
  

app.use( checkSession );


app.post('/api/login', (req, res, next) => {
    const {session} = req;
    const {username, pw } = req.body;

    app.get('db').get_user_props(username, pw).then( 
        
        houser_user => {

            if(houser_user){
                session.user.username = houser_user[0].username;
                res.status(200).send(houser_user); 
            }else{
                res.status(500);
            }  
        })    
    }
);


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )