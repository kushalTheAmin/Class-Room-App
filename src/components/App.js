import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component{


  render()
  {
   //console.log(this.props.children);
    return ( <div>
              {this.props.children}
           </div>);
  }
}

App.propTypes ={
  children: PropTypes.object.isRequired
};
