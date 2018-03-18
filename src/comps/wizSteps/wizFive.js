import React, { Component } from 'react';
import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import step_active from './step_active.png';
import step_complete from './step_completed.png';
import { updateDrent, updateRrent, sendNewProp } from '../../ducks/reducer';

class Wiz5 extends Component{

    componentDidMount(){
        const { monthlyMortgage } = this.props;
        this.props.updateRrent(monthlyMortgage * 1.25)
    }

    sendProperty(){

        const { username, propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, recommendRent, desiredRent, monthlyMortgage, history } = this.props;

        this.props.sendNewProp({username, propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, recommendRent, desiredRent, monthlyMortgage}, history )
    }
    

    render(){
        const rRent = this.props.monthlyMortgage * 1.25;
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

                    <h3>Recommended Rent ${rRent}</h3>

                    <h2>Desired Rent</h2>
                    <input value={this.props.desiredRent} onChange={(e) => this.props.updateDrent(e.target.value)}/>
                    
                    <div className="imgDiv">
                        <Link to="/wiz4"><button>Previous Step</button></Link>
                        <button onClick={() => this.sendProperty()}>Complete</button>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { 
        username, propertyName, propertyDescription, address, city, stateUSA, zip, imgurl, loan, recommendRent, desiredRent, monthlyMortgage 
    } = state;

    return{
        username,
        propertyName,
        propertyDescription,
        address,
        city,
        stateUSA,
        zip,
        imgurl,
        loan,
        recommendRent,
        desiredRent,
        monthlyMortgage
    }
}

export default connect(mapStateToProps, { updateDrent, updateRrent, sendNewProp })(Wiz5)