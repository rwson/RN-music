/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
    Router,
    routerReducer,
    Route,
    Container,
    Animations,
    Schema
} from "react-native-redux-router";
//import { createStore, combineReducers } from 'redux';
//import { Provider } from 'react-redux';
//let store = createStore(combineReducers({routerReducer}));

import {
    Login,
    Play
} from "./components/ios";

class music extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Play />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

AppRegistry.registerComponent("music", () => music);
