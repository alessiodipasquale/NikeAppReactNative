import React, { Component } from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import Background from "../Components/Background";
import Header from "../Components/Header";
import { TextInput } from "react-native-gesture-handler";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Background>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Header />
          <TextInput placeholderTextColor="#02004E"placeholder="Search"style={styles.textInput}></TextInput>
          <View style={styles.imageContainer}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}}source={require('./../../assets/shoe.png')} />
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>Nike</Text>
            <Text style={styles.subtitle}>Collection</Text>
          </View>
          <View style={styles.onTrend}>
            <View style={styles.trendLeft}>
              <Text style={styles.trendText}>On Trend</Text>
            </View>
            <View style={styles.trendRight}>
              <Text style={{fontWeight: 'bold'}}>1/10</Text>
              <Image style={{marginTop: 5, marginBottom: 5}} source={require('./../../assets/Bar.png')} />
            </View>
            
          </View>
        </KeyboardAvoidingView>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    borderRadius: 25,
    borderWidth: 0.2,
    borderColor: "#f6f7ff",
    backgroundColor: "#fff",
    marginTop: 30,
    marginHorizontal: 40,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  imageContainer: {
    height: '35%'
  },
  text: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 30
  },
  title: {
    fontSize: 50,
    fontWeight: '500',
    color: '#02004E',
  },
  subtitle: {
    fontSize: 50,
    color: '#02004E',
    fontWeight: '200',
    letterSpacing: 4
  },
  onTrend: {
    height: '10%',
    flexDirection: 'row',
    paddingHorizontal: 35,
  },
  trendLeft: {
    width: '50%',
    justifyContent: 'center'
  },
  trendRight: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  trendText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#02004E'
  }

});
