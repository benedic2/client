import React from 'react';
import { Component } from 'react';

import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
