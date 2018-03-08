import React, { Component } from 'react';
import Navbar from './navbar';

export default class DashView extends Component{

    render(){
        return(
            <div className="bodybg">
                <div className="middlebody">
                    <Navbar/>

                </div>
            </div>
        )
    }
}