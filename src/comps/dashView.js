import React, { Component } from 'react';
import Navbar from './navbar';

export default class DashView extends Component{

    render(){
        return(
            <div id="otherbody" className="bodybg">
                <div id="otherview" className="middlebody">
                    <Navbar/>

                    <button className="propbutton">
                        <p className="proptext">Add new property</p>
                    </button>

                    <div className="filterContainer">

                        <p className="rentText">List properties with "desired rent" greator than: $</p>

                        <input className="filter"></input>

                        <button className="filterB">Filter</button>
                        <button id="resetB" className="filterB">Reset</button>

                    </div>

                    <h1 className="hl">Home Listings</h1>

                </div>
            </div>
        )
    }
}