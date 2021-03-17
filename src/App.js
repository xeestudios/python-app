import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount() {
    const api = 'https://t7agkz0332.execute-api.us-east-2.amazonaws.com/beta/transactions?transactionId=44&type=PAYLOAD&amount=22';
    const data = { "transactionId" : "33", "type" : "Test", "amount" : "100" };
    axios
      .post(api, data, {
        headers: {
          'Authorization': `x-api-key B1eKIV3HbeNjglcpVjEu3gMa0BZYCXs4XcvpnMI5`
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