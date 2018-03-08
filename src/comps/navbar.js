import React, { Component } from 'react';
import './comps.css';
import headlogo from './header_logo.png';
// import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>

                <div className="navelements">
                
                    <img src={headlogo} alt="headerLogo"/>
                    <p id="houser" className="navtext">Houser</p>
                    <p className="navtext">Dashboard</p>

                </div>
            
                <p id="logouttext" className="navtext">Logout</p>

            </div>
        )
    }
}