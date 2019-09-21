import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity>
            <Image style={{width: 30, height: 30, resizeMode: 'contain'}}source={require('./../../assets/menu.png')} />
        </TouchableOpacity>
        <Image style={{width: 80, height: 80, resizeMode: 'contain'}}source={require('./../../assets/nike.png')} />
        <TouchableOpacity>
            <Image style={{width: 30, height: 30, resizeMode: 'contain'}}source={require('./../../assets/shopping-bag.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginTop: 20,
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})


