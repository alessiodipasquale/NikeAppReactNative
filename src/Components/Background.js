import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
            
        
      <View style={styles.container}>
         <View style={styles.left}/>
         <View style={styles.right}/>
         <View style={styles.content}>
            {this.props.children}
         </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    left: {
        backgroundColor: '#fff',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width 
    },
    right: {
        backgroundColor: '#F6F8FF',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width * 0.5
    },
    content: {
        position: 'absolute',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    }
})
