import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import EntryDetail from './EntryDetail';
import { white, purple } from '../utils/colors';

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

export default StackNav;

  

