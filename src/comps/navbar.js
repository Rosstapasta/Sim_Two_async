import React, { Component } from 'react';
import './comps.css';
import headlogo from './header_logo.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Navbar extends Component{

    constructor(){
        super()

        this.state = {
            redirect: false
        }
    }

    logOut(){
        axios.post('/api/logout').then( res => this.setState({redirect: true}))
    }

    render(){

        if(this.state.redirect === true){
            return <Redirect push to='/'/>
        }
        return(
            <div className='navbar'>

                <div className="navelements">
                
                    <img src={headlogo} alt="headerLogo"/>
                    <p id="houser" className="navtext">Houser</p>
                    <p className="navtext">Dashboard</p>

                </div>
            
                <p id="logouttext" className="navtext" onClick={ () => this.logOut() }>Logout</p>

            </div>
        )
    }
}