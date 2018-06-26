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
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

//  These commented code excerpts demonstrate how to display platform specific icons.
//import { Ionicons } from '@expo/vector-icons';

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
        <View style={{flex: 1}}>
          <AddEntry />
          {
            //            Platform.OS === 'ios'
            //            ? <Ionicons name='ios-pizza' size={100} color='red' />
            //            : <Ionicons name='md-pizza' size={100} color='red' />
          }
        </View>
      </Provider>
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
    marginTop: 10,
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

