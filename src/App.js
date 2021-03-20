import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {person: []};
    
  }


  componentDidMount() {
    //const api = 'https://5bsos88fy6.execute-api.us-east-2.amazonaws.com/prod/resource';
    const api = 'https://5iczn48u19.execute-api.us-east-2.amazonaws.com/prod/myPython';
    const data = { "first_name" : "Ahmed", "last_name" : "Rabi"};
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
        this.setState({ person: response.data.message })
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
  render() {
    const persons = this.state.person;
    return (
      <div>{ persons }</div>
    );
  }
}
export default App;

//myPythonFunc