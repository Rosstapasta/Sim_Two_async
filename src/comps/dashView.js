import React, { Component } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import deleteIcon from './delete_icon.png';
import { deleteProp } from '../ducks/reducer';


class DashView extends Component{
    constructor(props){
        super(props)

        this.state = {
            filter: 0,
            properties: this.props.properties
        }
    }

   

    render(){

       console.log(this.props);
    //    const {history} = this.props;
        var propBox = this.props.properties.map( (prop, i) => {
            return(
            <div key={i} className="propContainer">
            
                <img className="deleteicon" src={deleteIcon} alt="deleteIcon" onClick={()=> this.props.deleteProp(prop.id, prop.username, this.props.pw)}/>

                <div className="propImgCon">
                
                </div>
                    
                <div className="propTitle">

                    <h3>{prop.property_name}</h3>
                    <p>{prop.property_description}</p>

                </div>

                <div className="propItems">
                
                
                    <p>Loan: ${prop.loan}</p>
                    <p>Monthly Mortgage: ${prop.monthly_mort}</p>
                    <p>Recommended Rent ${prop.recommend_rent}</p>
                    <p>Desired Rent: ${prop.desired_rent}</p>
                    <p>Address: {prop.address}</p>
                    <p>City: {prop.city}</p>
                    <p>State: {prop.stateusa}</p>
                    <p>Zip: {prop.zip}</p>
                
                </div>

            </div>
            )
        })

        return(
            <div id="otherbody" className="bodybg">
                <div id="otherview" className="middlebody">
                    <Navbar/>

                    <Link to="/wiz1"><button className="propbutton">
                        <p className="proptext">Add new property</p>
                    </button></Link>

                    <div className="filterContainer">

                        <p className="rentText">List properties with "desired rent" greator than: $</p>

                        <input className="filter" placeholder="0"></input>

                        <button className="filterB">Filter</button>
                        <button id="resetB" className="filterB">Reset</button>

                    </div>

                    <h1 className="hl">Home Listings</h1>

                        {propBox}



                </div>
            </div>
        )
    }
}


export default connect(state => state, { deleteProp })(DashView)