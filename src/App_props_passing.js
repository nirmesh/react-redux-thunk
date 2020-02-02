import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';

class App extends React.Component {
  state = {
    name: 'nirmesh'
  }
  
  changename(name){
    this.setState({
        name:name
    })
  }

  render() {

    return (
      <div className="App">
          <Home handlenameChild={(name)=>this.changename(name)} />
          <Profile name={this.state.name} />
        <h1>hello {this.state.name}</h1>
       
      </div>

    )
  }

}
export default App;
