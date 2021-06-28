import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View } from 'react-native';

var logo = require('../assets/default.png')
export default class Splash extends Component<{}> {

  static navigationOptions = {
    headerShown:false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate("Dash")
    },1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logos}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logos: {
    width: 306,
    height: 308
  },
});

