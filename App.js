import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ImageEditor,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ImagePicker } from 'expo';

import styled from 'styled-components/native';
import { purple } from './utils/colors';

export default class App extends Component {
  state = {
    image: null,
  }

  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowEditting: true,
      aspect: [2, 1]
    }).then((result) => {
      if (result.cancelled) {
        return;
      }

      ImageEditor.cropImage(result.uri, {
        offset: {x: 0, y: 0},
        size: { width: result.width, height: result.height },
        displaySize: { width: 200, height: 100},
        resizeMode: 'contain',
      }, 
      (uri) => this.setState(() => ({ image: uri })),
      () => console.log('Euror'));
    });  
  }

  render() {
    const { image } = this.state;

    return (
      <CenterView>
        <TouchableOpacity onPress={this.pickImage}>
          <Text>Open Camera Roll</Text>

          {image && (
            <Image style={styles.img} source={{uri: image}} />
          )}
        </TouchableOpacity>
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
