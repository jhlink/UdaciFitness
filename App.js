import React, { Component }  from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  TouchableHighlight, 
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import TabNav from './components/TabNav';
import History from './components/History';
import styled from 'styled-components/native';

function touchableDemo () {
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.btn} 
        onPress={this.handlePress} 
        underlayColor='#d4271b'>
        <Text style={styles.btnText}>
            Touchable Highlight
        </Text>
      </TouchableHighlight>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={this.handlePress}>
        <Text style={styles.btnText}>
            Touchable Opacity 
        </Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback 
        onPress={this.handlePress}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>
            Touchable Feedback 
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableNativeFeedback 
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>
            Touchable Native Feedback 
          </Text>
        </View>
      </TouchableNativeFeedback>
         
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
          <View style={{height: 20}} />
          <TabNav />
        </CenterView>
      </Provider>
    );
  }
}

