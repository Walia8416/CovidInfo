import React, { Component } from 'react';
import { Platform, StyleSheet, Button } from 'react-native';
import Navigator from './routes/homeStack';


export default class App extends Component<{}> {
  render() {
    return (
      <Navigator/>
      
    );
  }
}

