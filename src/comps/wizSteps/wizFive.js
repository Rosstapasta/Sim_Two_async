import React, { Component } from 'react';
import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import step_active from './step_active.png';
import step_complete from './step_completed.png';

class Wiz5 extends Component{
    

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
                    <p className="step">Step 5</p>

                    <div className="imgDiv">

                    <img src={step_complete} alt="active"/>
                    <img src={step_complete} alt="active"/>
                    <img src={step_complete} alt="active"/>
                    <img src={step_complete} alt="active"/>
                    <img src={step_active} alt="active"/>

                    </div>

                    <h3>Recommended Rent $</h3>

                    <h2>Desired Rent</h2>
                    <input/>
                    
                    <div className="imgDiv">
                        <Link to="/wiz4"><button>Previous Step</button></Link>
                        <Link to="/dashview"><button>Complete</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(state => state)(Wiz5)