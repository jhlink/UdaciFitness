import React, { Component }  from 'react';
import { 
  View,
  StatusBar
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import StackNav from './components/StackNav';

import styled from 'styled-components/native';
import { purple } from './utils/colors';
import { Constants } from 'expo';

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

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
          <UdaciStatusBar backgroundColor={ purple } barStyle='light-content'/>
          <StackNav />
        </CenterView>
      </Provider>
    );
  }
}


