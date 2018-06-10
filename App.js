import React, { Component }  from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  TouchableHighlight, 
  TouchableNativeFEedback,
  TouchableOpacity,
  ToucableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends Component {
  handlePress = () => {
    alert('Hello!');
  }

  render() {
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
});

