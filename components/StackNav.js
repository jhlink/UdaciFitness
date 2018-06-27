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
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Text>Press here for the Dashboard</Text>
    </TouchableOpacity>
  </View>
);

function Dashboard () {
  return (
    <View>
      <Text>This is the Dashboard</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StackNav;

  

