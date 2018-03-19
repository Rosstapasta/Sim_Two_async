import React, { Component } from 'react';
import './comps.css';
import houselogo from './auth_logo.png';
import { connect } from 'react-redux';
import { login, register, updateUserName, updatePassword } from '../ducks/reducer';

class AuthView extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            pw: ''
        }

        
        this.handleChange = this.handleChange.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    login(){
       const {history} = this.props;
       const { username, pw } = this.state;
       this.props.login({username, pw}, history);
       
       
    }

    register(){
        const {history} = this.props;
        const { username, pw } = this.state;
        this.props.register({username, pw}, history);
    }

    handleChange(prop, val){
        this.setState({[prop]: val})
        this.props.updateUserName(val)
    }

    changePassword(val){
        this.setState({pw: val})
        this.props.updatePassword(val);
    }

    render(){
        return(
            <div className="bodybg">
                <div className="middlebody">

                    <img src={houselogo} alt="houselogo"/>

                    <p className="authtext">Username</p>
                    <input className="avInput" onChange={(e) => this.handleChange("username", e.target.value)}/>
                    <p className="authtext">Password</p>
                    <input className="avInput" onChange={(e) => this.changePassword(e.target.value)}/>

                    <div className="abelement">

                        <button id="login" className="authButton" onClick={() => this.login()}>Login</button>
                            <div className="spacer1"></div>
                        <button id="register" className="authButton" onClick={() => this.register()}>Register</button>

                    </div>

                </div>
            </div>
        )
    }
}

export default connect(state => state, { login, register, updateUserName, updatePassword })(AuthView)