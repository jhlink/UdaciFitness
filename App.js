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

//  There are three types of animations.
//    decay - initial velocity and slow to a stop
//    spring - spring physics model
//    timing - animated a value over time

// For some reason, align-items: center causes some weird problems with alignment on Android

export default class App extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, width, height } = this.state;

    Animated.timing(opacity, { toValue: 1, duration: 1000 } )
      .start();

    Animated.spring(width, { toValue: 300, speed: 5 } )
      .start();

    Animated.spring(height, { toValue: 300, speed: 5 } )
      .start();
  }

  render() {
    const { opacity, width, height } = this.state;
    
    return (
      <CenterView>
        <Animated.Image
          style={[styles.img, { opacity, height, width }]}
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png' }}
        />
      </CenterView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200
  }
});

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
