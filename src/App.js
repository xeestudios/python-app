import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount() {
    const api = 'https://5bsos88fy6.execute-api.us-east-2.amazonaws.com/prod/resource';
    //const api = 'https://5iczn48u19.execute-api.us-east-2.amazonaws.com/prod/myPython';
    const data = { "transactionId" : "33", "type" : "Test", "amount" : "100" };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  render() {
    return (
      <div>Medium Tutorial</div>
    );
  }
}
export default App;

//myPythonFunc