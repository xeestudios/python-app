import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount() {
    const api = 'https://5w5526zj8a.execute-api.us-east-2.amazonaws.com/prod';
    const data = { "transactionId" : "33", "type" : "Test", "amount" : "100" };
    axios
      .post(api, data, {
        headers: {
          "Access-Control-Allow-Origin": "https://master.dapz2qxoh9jmv.amplifyapp.com",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
        },
      })
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