import React, { Component } from 'react';
import './comps.css';
import houselogo from './auth_logo.png';
import { connect } from 'react-redux';
import { login } from '../ducks/reducer';

class AuthView extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            pw: ''
        }

        
        this.handleChange = this.handleChange.bind(this);
    }

    login(){
       const {history} = this.props;
       const { username, pw } = this.state;
       this.props.login({username, pw}, history)
       
    }


    handleChange(prop, val){
        this.setState({[prop]: val})
    }

    render(){
      
        return(
            <div className="bodybg">
                <div className="middlebody">

                    <img src={houselogo} alt="houselogo"/>

                    <p className="authtext">Username</p>
                    <input className="avInput" onChange={(e) => this.handleChange("username", e.target.value)}/>
                    <p className="authtext">Password</p>
                    <input className="avInput" onChange={(e) => this.handleChange('pw', e.target.value)}/>

                    <div className="abelement">

                        <button id="login" className="authButton" onClick={() => this.login()}>Login</button>
                            <div className="spacer1"></div>
                        <button id="register" className="authButton">Register</button>

                    </div>

                </div>
            </div>

        )
    }
}

export default connect(state => state, { login })(AuthView)