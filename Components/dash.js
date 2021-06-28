import React, { PureComponent } from 'react';
import { Platform, StyleSheet, View, Alert, Linking } from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text, Card, Button } from '@ui-kitten/components';
import {Icon} from 'react-native-elements';





const Header = (props) => (
  <View style={{alignItems: 'center', backgroundColor: '#3b3b3b', width: '100%', height: '28%'}}>
    <Text category='h4' style={{color:'white', fontWeight:"bold"}}>{props.title}</Text>
  </View>
);






export default class Dash extends PureComponent<{}> {

  static navigationOptions = {
    title:'WorldWide Stats',
    headerRight: () => (
      <Icon name='star' type='antdesign' onPress={() => Alert.alert("Developer Details","Developed By Aditya Walia \nGitHub - https://github.com/Walia8416")}/>
    ),
    headerLeft: () => null,
    headerStyle: {backgroundColor: 'pink'},
    headerTitleStyle: {color:'black'}
  };


  constructor() {
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    this.apiCall()
    
  }

  async apiCall() {
    let resp = await fetch('https://api.covid19api.com/summary')
    let respJson = await resp.json()
    this.setState({data: respJson.Global})
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={{...eva.dark}}>
        <Layout style={styles.container}>
         <Card header={() => <Header title="New Confirmed"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{this.state.data.NewConfirmed} Cases</Text>
          
         </Card>

        <Card header={() => <Header title="New Recovered"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{this.state.data.NewRecovered} Cases</Text>
        </Card>

        <Card header={() => <Header title="New Deaths"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{this.state.data.NewDeaths} Cases</Text>
        </Card>

        <Card header={() => <Header title="Total Active Cases"/>} style={styles.cards}>
          <Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{this.state.data.TotalConfirmed-this.state.data.TotalRecovered} Cases</Text>
        </Card>

        <Button onPress={() => this.props.navigation.navigate("Country")} style={styles.buttons}>
          Country Stats
        </Button>

        
          
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
  
  cards: {
    backgroundColor:'#434343',
    width:'90%',
    height: '20%',
    alignItems: 'center',

  },

  buttons: {
    
    width: '90%',
    backgroundColor: 'black'
  }



});

