import React, { Component } from 'react';
import Navbar from './navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WizView extends Component{
    

    render(){
        console.log(this.props.properties)
        return(
            
            <div id="otherbody" className="bodybg">
                <div id="otherview" className="middlebody">
                    <Navbar/>

                    <div className="addlist">
                        <h1 className="newl">Add new listing</h1>
                        <Link to="/dashview"><button className="cancelbtn">Cancel</button></Link>
                    </div>
                    <p className="step">Step</p>

                </div>
            </div>
        )
    }
}

export default connect(state => state)(WizView)
