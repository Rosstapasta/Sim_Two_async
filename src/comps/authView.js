import React, { Component } from 'react';
import './comps.css';
import houselogo from './auth_logo.png';

export default class AuthView extends Component{

    render(){
        return(
            <div className="bodybg">
                <div className="middlebody">

                    <img src={houselogo} alt="houselogo"/>

                    <p className="authtext">Username</p>
                    <input className="avInput"/>
                    <p className="authtext">Password</p>
                    <input className="avInput"/>

                    <div className="abelement">

                        <button id="login" className="authButton">Login</button>
                            <div className="spacer1"></div>
                        <button id="register" className="authButton">Register</button>

                    </div>

                </div>
            </div>

        )
    }
}