import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import EntryDetail from './EntryDetail';
import { white, purple } from '../utils/colors';

const Home = ({ navigation }) => ( 
  <View style={styles.container}>
    <Text style={styles.btnText} >This is the Home view</Text>
    <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.navigate('Dashboard')}>
      <Text style={styles.btnText}>Press here for the Dashboard</Text>
    </TouchableOpacity>
  </View>
);

function Dashboard () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Dashboard</Text>
    </View> 
  );
}

const StackNav = createStackNavigator({
  Home: {
    screen: TabNav,
    navigationOptions: {
      title: 'Home'
    }
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white, 
      headerStyle: {
        backgroundColor: purple, 
      }
    }
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999999'
  },
  btn: {
    backgroundColor: '#E53224',
    marginTop: 10,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
});

export default StackNav;

  

