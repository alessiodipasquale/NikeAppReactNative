import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Background from '../Components/Background';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Background>
          
        </Background>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCF8"
  },
})
