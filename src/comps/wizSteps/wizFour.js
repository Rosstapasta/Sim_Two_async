import React, { Component } from 'react';
import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import step_active from './step_active.png';
import step_complete from './step_completed.png';
import step_inactive from './step_inactive.png';
import { updateLoan, updateMort } from '../../ducks/reducer';

class Wiz4 extends Component{
    

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
                    <p className="step">Step 4</p>

                    <div className="imgDiv">

                    <img src={step_complete} alt="active"/>
                    <img src={step_complete} alt="active"/>
                    <img src={step_complete} alt="active"/>
                    <img src={step_active} alt="active"/>
                    <img src={step_inactive} alt="active"/>

                    </div>

                    <h2>Loan Amount</h2>
                    <input value={this.props.loan} onChange={(e) => this.props.updateLoan(e.target.value)}/>
                    <h2>Monthly Mortgage</h2>
                    <input value={this.props.monthlyMortgage} onChange={(e) => this.props.updateMort(e.target.value)}/>

                    <div className="imgDiv">
                        <Link to="/wiz3"><button>Previous Step</button></Link>
                        <Link to="/wiz5"><button >Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {loan, monthlyMortgage} = state;
    return{
        loan,
        monthlyMortgage
    }
}

export default connect(mapStateToProps, { updateLoan, updateMort })(Wiz4)