import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  StatusBar
} from 'react-native';

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
      <CenterView>
        <UdaciStatusBar backgroundColor={ purple } barStyle='light-content'/>
        <Image
          style={styles.img}
          source={{uri: 'https://typermcginnis.com/tylermcginnis_glasses-300.png' }}
        />
      </CenterView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

