import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import {anotherName} from './actions/myactions';

function App(props) {
    console.log(props);
    return (
        <div className="App">
            my name is {props.myname}
            <button onClick={()=>{props.changeName("rich")}}>change me</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myname: state.name
    }
}
const mapDispatchToProps = (dispatch) => {

    // return {
    //     changeName: (name) => {
    //         dispatch({
    //             type: 'CHANGE_NAME',
    //             payload: name
    //         })
    //     }
    // }
    return {
        changeName:(name)=>{dispatch(anotherName(name))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
