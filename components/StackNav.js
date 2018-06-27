import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

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
    screen: Home,
    navigationOptions: {
      //tabBarIcon: () => <FontAwesome name='home' size={30} color='black' /> 
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      //tabBarIcon: () => <FontAwesome name='dashboard' size={30} color='black' /> 
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

  

