import React, { Component }  from 'react';
import { 
  View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import History from './components/History';
import AddEntry from './components/AddEntry';

import styled from 'styled-components/native';
import { createTabNavigator } from 'react-navigation';
import { purple, white } from './utils/colors';
import { FontAwesome, Ionicons }  from '@expo/vector-icons';

const Tabs = createTabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Ionicons 
        name='ios-bookmarks' 
        size={30} 
        color={tintColor} />
    }
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Entry',
      tabBarIcon: ({ tintColor }) => <FontAwesome 
        name='ios-bookmarks' 
        size={30} 
        color={tintColor} />
    }
  }
});

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  background: #333;
`;
// For some reason, align-items: center causes some weird problems with alignment on Android

export default class App extends Component {
  state = {
    value: 0
  }

  handlePress = () => {
    alert('Hello!');
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <CenterView>
          <View style={{height: 20}} />
          <History />
        </CenterView>
      </Provider>
    );
  }
}


