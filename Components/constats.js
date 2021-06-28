import React, { Component } from 'react';
import { Platform, StyleSheet, View, ActivityIndicator } from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text, Card, Button } from '@ui-kitten/components';





const Header = (props) => (
  <View style={{alignItems: 'center', backgroundColor: '#3b3b3b', width: '100%', height: '28%'}}>
    <Text category='h4' style={{color:'white', fontWeight:"bold"}}>{props.title}</Text>
  </View>
  );


export default class Dash extends Component<{}> {

  static navigationOptions = {
    title:'Country Stats',
    headerStyle: {backgroundColor: 'pink'},
    headerTitleStyle: {color:'black'}
  };


  constructor() {
    super();
    this.state = {
      loading:true
    }

  }

  componentDidMount(){
    this.setState({loading:false})
    
  }


  render() {
    const name = this.props.navigation.getParam('name');
    const con = this.props.navigation.getParam('con');
    const death = this.props.navigation.getParam('death');
    const rec = this.props.navigation.getParam('rec');
    const Tot = this.props.navigation.getParam('Tot');
    const TotRec = this.props.navigation.getParam('TotRec');


    if (this.state.loading)
    {
      return(
        <View style={styles.spinner}>
          <ActivityIndicator color={"pink"} size='large'/>
        </View>
        
      );
      
    }

    return (
      <ApplicationProvider {...eva} theme={{...eva.dark}}>
        <Layout style={styles.container}>
         <Card header={() => <Header title="New Confirmed"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{con} Cases</Text>
         </Card>

        <Card header={() => <Header title="New Recovered"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{rec} Cases</Text>
        </Card>

        <Card header={() => <Header title="New Deaths"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{death} Cases</Text>
        </Card>

        <Card header={() => <Header title="Total Active Cases"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{Tot - TotRec} Cases</Text>
        </Card>

    
          
        </Layout>

      </ApplicationProvider>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#121212',
    paddingTop: 50,
    paddingBottom:20,
    justifyContent: 'space-between'

  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#121212',
    justifyContent:'center'  
  },
  cards: {
    backgroundColor:'#434343',
    width:'90%',
    height: '20%',
    alignItems: 'center',

  }



});

