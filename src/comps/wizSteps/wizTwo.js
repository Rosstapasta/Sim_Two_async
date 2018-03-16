import React, { Component } from 'react';
import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import step_active from './step_active.png';
import step_complete from './step_completed.png';
import step_inactive from './step_inactive.png';
import { updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';

class Wiz2 extends Component{
    

    render(){

        console.log(this.props)

        return(
            
            <div id="otherbody" className="bodybg">

                <div id="otherview" className="middlebody">

                    <Navbar/>

                    <div className="addlist">

                        <h1 className="newl">Add new listing</h1>
                        <Link to="/dashview"><button className="cancelbtn">Cancel</button></Link>

                    </div>

                    <p className="step">Step 2</p>

                    <div className="imgDiv">

                        <img src={step_complete} alt="active"/>
                        <img src={step_active} alt="active"/>
                        <img src={step_inactive} alt="active"/>
                        <img src={step_inactive} alt="active"/>
                        <img src={step_inactive} alt="active"/>

                    </div>

                    <h3 className="addresstext">Address</h3>
                    <input className="property_name_input" value={this.props.address}onChange={(e) => this.props.updateAddress(e.target.value)}></input>

                    <div id="csmargin" className="imgDiv">

                        <h3>City</h3>
                        <h3>State</h3>

                    </div>

                    <div id="citystateI" className="imgDiv">

                        <input id="csi" className="property_name_input" value={this.props.city}onChange={(e) => this.props.updateCity(e.target.value)}></input>

                        <input id="csi" className="property_name_input" value={this.props.stateUSA}onChange={(e) => this.props.updateState(e.target.value)}></input>

                    </div>

                        <h3 className="zip">Zip</h3>
                        <input id="csi2" className="property_name_input" value={this.props.zip} onChange={(e) => this.props.updateZip(e.target.value)}/>

                    <div id="pn_wiz2" className="imgDiv">

                        <Link to="/wiz1"><button className="nextButton">Previous Step</button></Link>

                        <Link to="/wiz3"><button className="nextButton">Next Step</button></Link>

                    </div>


                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { address, city, stateUSA, zip } = state;
    return {
        address,
        city,
        stateUSA,
        zip
    }
}

export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZip})(Wiz2)