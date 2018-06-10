import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { getMetricMetaInfo, timeToString } from '../utils/helpers';
import UdaciSlider from './UdaciSlider';
import UdaciStepper from './UdaciStepper';
import DateHeader from './DateHeader';

const INIT_STATE = {
  run: 0,
  bike: 0,
  swim: 0,
  sleep: 0,
  eat: 0
};

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress }>
      <Text>SUBMIT</Text>    
    </TouchableOpacity>
  );
}
  


export default class AddEntry extends Component {
  state = INIT_STATE; 

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric);
  
    this.setState((state) => {
      const count = state[metric] = step;

      return {
        ...state,
        [metric]: count > max ? max: count
      };
    });
  }
        
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step;

      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      };
    });
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }));
  }

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    this.setState(INIT_STATE);


    // Update Redux

    // Navigate to home

    // Save to 'DB'

    // Clear local notification
  }
  
  render() {
    const metaInfo = getMetricMetaInfo();
    const localDateString = new Date().toLocaleDateString();

    return (
      <View> 
        <DateHeader date={ localDateString }/>
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key}>
              { getIcon() }
              { type === 'slider'
                ? <UdaciSlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
                : <UdaciStepper
                  value={value}
                  onDecrement={() => this.decrement(key)}
                  onIncrement={() => this.increment(key)}
                  {...rest}
                />
              }

            </View>
          );
        })}
        <SubmitBtn onPress={this.submit}/>
      </View>
    );
  }
}
