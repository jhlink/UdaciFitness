import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

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

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

const TabNav = createBottomTabNavigator({
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

  

