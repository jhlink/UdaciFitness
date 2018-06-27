import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';

function Home () {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
}

function Dashboard () {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View> 
  );
}

const TabNav = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30} color='black' /> 
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='dashboard' size={30} color='black' /> 
    }
  }
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TabNav;

  

