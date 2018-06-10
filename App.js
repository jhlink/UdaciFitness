import React, { Component }  from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  TouchableHighlight, 
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider
} from 'react-native';
import AddEntry from './components/AddEntry';

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
      <View>

        <AddEntry />

        <Slider
          minimumValue={-10}
          maximumValue={10}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value })) }
        />

        <Text>
           Value: {this.state.value}
        </Text>

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

