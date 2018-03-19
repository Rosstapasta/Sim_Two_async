import React, { Component } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import deleteIcon from './delete_icon.png';
import { deleteProp, getProps } from '../ducks/reducer';


class DashView extends Component{
    constructor(props){
        super(props)

        this.state = {
            filterinput: '',
            filter: 0,
            properties: this.props.properties

        }

        this.filterInput = this.filterInput.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.resetFilter = this.resetFilter.bind(this);
    }


    componentWillMount(){
        const { username, pw } = this.props;
        this.props.getProps(username, pw);
    }

    filterInput(val){
        this.setState({filterinput: val});
    }

    setFilter(){
        this.setState({ filter: parseInt(this.state.filterinput, 10) });
        console.log(this.state.filter);
    }

    resetFilter(){
        this.setState({ filter: 0 });
        this.setState({ filterinput: ''});
    }
   
    render(){

       var filteredProps = this.props.properties.filter( prop => prop.desired_rent > this.state.filter );
        console.log(filteredProps);
    
        var propBox = filteredProps.map( (prop, i) => {
            return(
            <div key={i} className="propContainer">
            
                <img className="deleteicon" src={deleteIcon} alt="deleteIcon" onClick={()=> this.props.deleteProp(prop.id, this.props.username, this.props.pw)}/>

                <div className="propImgCon">
                    <img className="imageDisplay" src={`${prop.imgurl}`} alt="loading"/>
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

                        <input className="filter" placeholder="0" value={this.state.filterinput} onChange={(e) => this.filterInput(e.target.value)}></input>

                        <button className="filterB" onClick={ () => this.setFilter() }>Filter</button>
                        <button id="resetB" className="filterB" onClick={() => this.resetFilter()}>Reset</button>

                    </div>

                    <h1 className="hl">Home Listings</h1>

                        {propBox}



                </div>
            </div>
        )
    }
}

export default connect(state => state, { deleteProp, getProps })(DashView)