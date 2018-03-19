import React, { Component } from 'react';
import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import step_active from './step_active.png';
import step_complete from './step_completed.png';
import step_inactive from './step_inactive.png';
import { updateImg } from '../../ducks/reducer';
import '../comps.css';

class Wiz3 extends Component{
    

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
                    <p className="step">Step 3</p>

                     <div id="step3img"className="imgDiv">

                    <img src={step_complete} alt="active"/>
                    <img src={step_complete} alt="active"/>
                    <img src={step_active} alt="active"/>
                    <img src={step_inactive} alt="active"/>
                    <img src={step_inactive} alt="active"/>

                    </div>

                    <div className="imgcontainer"></div>

                    <h2 className="addresstext">Image URL</h2>
                    <input className="property_name_input" value={this.props.imgurl} onChange={(e) => this.props.updateImg(e.target.value)}/>

                    <div className="placehold2"></div>

                    <div id="inputw3" className="imgDiv">

                    <Link to="/wiz2"><button className="nextButton">Previous Step</button></Link>
                        <Link to="/wiz4"><button className="nextButton">Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { imgurl } = state;
    return {
        imgurl
    }
}

export default connect(mapStateToProps, { updateImg})(Wiz3)