import React, { Component } from 'react';
import Navbar from './navbar.js'

export default class WizView extends Component{

    render(){
        return(
            
            <div className="bodybg">
                <div id="otherview" className="middlebody">
                    <Navbar/>

                </div>
            </div>
        )
    }
}