import React, { PureComponent } from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text, Card, Button } from '@ui-kitten/components';



export default class Country extends PureComponent<{}> {

  static navigationOptions = {
    title:'Country Stats',
    headerStyle: {backgroundColor: 'pink'},
    headerTitleStyle: {color:'black'}
  };


  constructor() {
    super();
    this.state = {
      data:[],
      loading:true
    }
  }

  componentDidMount(){
    this.apiCall()
    this.setState({loading:false})
      
  }

  async apiCall() {
    let resp = await fetch('https://api.covid19api.com/summary')
    let respJson = await resp.json()
    this.setState({data: respJson.Countries})
  }

  render() {

    return (
      <ApplicationProvider {...eva} theme={{...eva.dark}}>
        <Layout style={styles.container}>


          <FlatList
          
          data={this.state.data}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => this.props.navigation.navigate("CountStat",{name: item.Country, con: item.NewConfirmed, death: item.NewDeaths, rec: item.NewRecovered, Tot: item.TotalConfirmed, TotRec: item.TotalRecovered})}>
              <Card style={styles.cards}>
              	<Text category='h5' style={{color:'pink', fontWeight:"bold"}}>{item.Country}</Text>
            	</Card>
            </TouchableOpacity>
            
          }
          keyExtractor={(item) => item.ID}

          />

     
          
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
    paddingTop: 10,
    paddingBottom: 15,
    justifyContent:'center' 
  },

  
  
  cards: {
    backgroundColor:'#434343',
    alignItems: 'center',
    justifyContent:'center'


  }



});

