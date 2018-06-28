import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { white, purple } from '../utils/colors';

const Home = ({ navigation }) => ( 
  <View style={styles.container}>
    <Text style={styles.btnText} >This is the Home view</Text>
    <TouchableOpacity 
      style={styles.btn}
      onPress={() => navigation.openDrawer()}>
      <Text style={styles.btnText}>Open Drawer</Text>
    </TouchableOpacity>
  </View>
);

function Dashboard ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.btnText} >This is the Dashboard</Text>
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.btnText}>Open Drawer</Text>
      </TouchableOpacity>
    </View> 
  );
}

const DrawerNav = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Dashboard: {
    screen: Dashboard,
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

export default DrawerNav;
