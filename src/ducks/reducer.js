import axios from 'axios';

const initialState = {
    username: '',
    pw: '',
    properties: [],
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    stateUSA: '',
    zip: null,
    imgurl: '',
    loan: null,
    monthlyMortgage: null,
    recommendRent: 0,
    desiredRent: null
}

const LOGIN = "LOGIN";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD =  "UPDATE_PASSWORD";
const REGISTER = 'REGISTER';
const LOGOUT = "LOGOUT";

const GETUSER = 'GETUSER';
const GET_PROPS = 'GET_PROPS';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_DES = 'UPDATE_DES';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMGURL = 'UPDATE_IMGURL';
const UPDATE_LOAN = 'UPDATE_LOAN';
const UPDATE_MONTHLYMORT = 'UPDATE_MONTHLYMORT';
const UPDATE_RECOMMEND = 'UPDATE_RECOMMEND';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
const SEND_NEWPROP = 'SEND_NEWPROP';
const DELETE_PROP = 'DELETE_PROP';

export default function reducer( state = initialState , action ) {
        let { payload } = action;
        // console.log(payload, "in redux")
    switch( action.type ){
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state );

        case REGISTER + '_FULFILLED':
            return Object.assign({}, state );

        case LOGOUT + '_FULFILLED':
            return state;

        case GETUSER + '_FULFILLED':
            return Object.assign({}, state, { username: payload.username, pw: payload.pw } )

        case GET_PROPS + '_FULFILLED':
            return Object.assign({}, state, {properties: payload});

        case SEND_NEWPROP + '_FULFILLED':
            return Object.assign({}, state, {properties: payload});

        case DELETE_PROP + '_FULFILLED':
            return Object.assign({}, state, {properties: payload});

        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: payload})

        case UPDATE_PASSWORD:
            return Object.assign({}, state, {pw: payload})
        
        case UPDATE_NAME:
            return Object.assign({}, state, {propertyName: payload} )

        case UPDATE_DES:
            return Object.assign({}, state, {propertyDescription: payload} )

        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: payload} )

        case UPDATE_CITY:
            return Object.assign({}, state, {city: payload})

        case UPDATE_STATE:
            return Object.assign({}, state, {stateUSA: payload})

        case UPDATE_ZIP:
            return Object.assign({}, state, {zip: payload})

        case UPDATE_IMGURL:
            return Object.assign({}, state, {imgurl: payload})

        case UPDATE_LOAN:
            return Object.assign({}, state, {loan: payload})

        case UPDATE_MONTHLYMORT:
            return Object.assign({}, state, {monthlyMortgage: payload})

        case UPDATE_RECOMMEND:
            return Object.assign({}, state, {recommendRent: payload})

        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, {desiredRent: payload})

            default: return state;
    }
}

export function login( obj, history ){
    console.log(obj, "obj from login")
    return {
        type: LOGIN,
        payload: axios.post( `/api/login`, obj ).then(res => { 
            console.log(res.data, "redux login")
            history.push('/dashview'); 
            return res.data;
        })
    }
}

export function logOut(history){
    console.log(history, "history")
    return {
        type: LOGOUT,
        payload:  axios.post('/api/logout').then( res => {
            history.push('/')
        })
    }
}

export function getUser(){
    return {
        type: GETUSER,
        payload: axios.get('/api/getuser').then(res => {
           
            return res.data;
        })
    }
}

export function getProps(username, pw){
    return {
        type: GET_PROPS,
        payload: axios.get( `/api/getproperties?username=${username}&pw=${pw}`).then( res => {
            return res.data;
        })
    }
}

export function sendNewProp(prop, history){
     return {
         type: SEND_NEWPROP,
         payload: axios.post('/api/create', prop ).then(res => {
             if(res.data[0]){
             history.push('/dashview')
             }else{
             history.push('/')
             }
             return res.data;
        })
    }                                   
}

export function deleteProp( prop ){
    console.log(prop, "from redux deleteprop")
    return{
        type: DELETE_PROP,
        payload: axios.delete(`/api/delete?id=${prop}`).then(res => {
           
            return res.data;
        })

    }
}

export function register(obj, history){
    return{
        type: REGISTER,
        payload: axios.post('/api/register', obj ).then( res => {
            history.push('/dashview')
            return res.data
        })
    }
}

export function updateUserName( username ){
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updatePassword( pw ){
    return {
        type: UPDATE_PASSWORD,
        payload: pw
    }
}

export function updateName( propname ){
    return {
        type: UPDATE_NAME,
        payload: propname
    }
}

export function updateDes(des){
    return{
        type: UPDATE_DES,
        payload: des
    }
}

export function updateAddress(add){
    return{
        type: UPDATE_ADDRESS,
        payload: add
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(stateUSA){
    return{
        type: UPDATE_STATE,
        payload: stateUSA
    }
}

export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(img){
    return{
        type: UPDATE_IMGURL,
        payload: img
    }
}

export function updateLoan(loan){
    return{
        type: UPDATE_LOAN,
        payload: loan
    }
}

export function updateMort(morty){
    return{
        type: UPDATE_MONTHLYMORT,
        payload: morty
    }
}

export function updateRrent(recommend){
    return{
        type: UPDATE_RECOMMEND,
        payload: recommend
    }
}

export function updateDrent(rent){
    return{
        type: UPDATE_DESIRED_RENT,
        payload: rent
    }
}