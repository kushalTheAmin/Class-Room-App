import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {

  render(){
    return (<div>
      <h1>Class Room web application</h1>
      <p>This web application is developed to create and manage your video files...</p>
      <Link to="about" className ="btn btn-default"> Let's Try </Link>
    </div>);
  }
}
