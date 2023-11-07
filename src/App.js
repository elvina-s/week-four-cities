import './App.css';
import NY from './NY';
import Paris from './Paris';
import { Component } from 'react';

class App extends Component {
  state = {
    show: true
  }

  render() {
    const btnText = this.state.show ? "New York" : "Paris";

    return (
    <div>
      <p>{this.state.show ? <NY/> : <Paris/> }</p>
      <button onClick={() => { this.setState({show: !this.state.show})} }>{btnText}</button>
    </div>
  );
}

}

export default App;
