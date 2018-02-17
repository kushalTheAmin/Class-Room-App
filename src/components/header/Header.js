import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const header = () => {
    return(
      <nav>
        <IndexLink to="/" activeClassName ="active"> HOME </IndexLink>
        {'|'}
        <Link to="about" activeClassName="active" > ABOUT </Link>
        {'|'}
        <Link to="course" activeClassName="active"> COURSE </Link>
      </nav>
    );
};


export default header;
