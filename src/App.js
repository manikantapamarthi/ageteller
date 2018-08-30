import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './AgeStats'

class App extends Component {
  constructor() {
    super()

    this.state = {
      newDate: "",
      birthday: '1991-09-08'
    }
  }
 
  changeBirthday() {
    this.setState({birthday: this.state.newDate});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Age Teller</h1>
        </header>
        <p className="App-intro">
        </p>
        <Form inline>
          <h2>Enter Your Birthday</h2>
          <FormControl type="date"
            onChange={e => this.setState({newDate: e.target.value})}
          >
          </FormControl><br/>
          <Button onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          <AgeStats date={this.state.birthday}/>
        </Form>
      </div>
    );
  }
}

export default App;
