import React from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends React.Component {
  state = {
    homename: 'prestige'
  }
  
  
  render() {

    return (
      <div className="App">
         i m home page
        <button onClick={()=>this.props.handlenameChild(this.state.homename)} >change me</button>
       
      </div>

    )
  }

}
export default Home;
