import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
} from 'react-native';

import styled from 'styled-components/native';
import { purple } from './utils/colors';

export default class App extends Component {

  render() {
    return (
      <CenterView>
      </CenterView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'black'
  }
});

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
