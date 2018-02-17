import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';

export default class App extends Component{


  render()
  {
   //console.log(this.props.children);
    return ( <div>
              <Header/>
              {this.props.children}
           </div>);
  }
}

App.propTypes ={
  children: PropTypes.object.isRequired
};
