import React, { Component }  from 'react';
import { 
  View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import styled from 'styled-components/native';

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


