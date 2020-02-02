import React from 'react';
import logo from './logo.svg';
import './App.css';

// const Coder = (props)=>
// {
//   return <h1>{props.name} never quits1</h1>
// }


class Coder extends React.Component {
  render() {
    return <h1>{this.props.name} never quits2</h1>
  }
}
class App extends React.Component {
  state = {
    title: 'loading'
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos').
      then(res => res.json()).

      then(res2 => {
        this.setState({
          title: res2[0].title
        }
        );

      });

  }
  state = {
    title: "rajesh"
  }

  changeName() {
    this.setState({ title: "fafa" })
  }

  changeThisName = () => {
    this.setState({ title: "raghu" })
  }

  anotherThisName = (name) => {
    this.setState({ title: name })
  }

  render() {

    return (
      <div className="App">
        <h1>hello {this.state.title}</h1>
        <Coder name="nirmesh" />
        <button onClick={() => this.changeName()}>change name</button>
        <button onClick={this.changeThisName}>differnt way change name</button>
        <button onClick={this.anotherThisName.bind(this, "selva")}>another way change name</button>
      </div>

    )
  }

}
export default App;
