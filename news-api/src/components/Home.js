import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render(){
    return (
        <div>
          <h1>Checking Home</h1>
          <Link to = "/">Home</Link> 
        </div>
    )
  }
}
export default Home;