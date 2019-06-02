import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: true
    }
    this.displayClock = this.displayClock.bind(this);
  }
  displayClock() {
    this.setState({
      clock: !this.state.clock
    })
    console.log(this.state.clock)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock clickHandler={this.displayClock} clockState={this.state.clock}/>
        </header>
      </div>
    );
  }
}

export default App;
