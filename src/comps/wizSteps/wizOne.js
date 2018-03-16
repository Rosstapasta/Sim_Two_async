import React, { Component } from 'react';
import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import step_active from './step_active.png';
import step_inactive from './step_inactive.png';
import { updateName, updateDes } from '../../ducks/reducer';

class Wiz1 extends Component{
    constructor(){
        super()

        this.state = {
            propName: '',
            propDes: ''
        }
    }

    render(){
        
        return(
            
            <div id="otherbody" className="bodybg">
                <div id="otherview" className="middlebody">
                    <Navbar/>

                    <div className="addlist">
                        <h1 className="newl">Add new listing</h1>
                        <Link to="/dashview"><button className="cancelbtn">Cancel</button></Link>
                    </div>
                    <p className="step">Step 1</p>
                    
                    <div className="imgDiv">

                    <img src={step_active} alt="active"/>
                    <img src={step_inactive} alt="active"/>
                    <img src={step_inactive} alt="active"/>
                    <img src={step_inactive} alt="active"/>
                    <img src={step_inactive} alt="active"/>

                    </div>

                    <h3 className="textStepOne">Property Name</h3>
                    <input className="property_name_input" value={this.props.propertyName} onChange={(e) => this.props.updateName(e.target.value)}></input>
                    <h3 id="stepOne_2" className="textStepOne">Property Description</h3>
                    <textarea id="prop_description" className="property_name_input" value={this.props.propertyDescription} onChange={(e) => this.props.updateDes(e.target.value)}></textarea>
                    <Link to="/wiz2"><button className="nextButton">Next Step</button></Link>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {propertyName, propertyDescription} = state;
    return {
        propertyName,
        propertyDescription
    }
}

export default connect(mapStateToProps, { updateName, updateDes })(Wiz1)