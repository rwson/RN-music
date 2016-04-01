/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    StatusBar
} from "react-native";

import {
    Router,
    routerReducer,
    Route,
    Container,
    Animations,
    Schema
} from "react-native-redux-router";

import {
    createStore,
    combineReducers
} from "redux";

import {
    Provider
} from "react-redux";

const store = createStore(combineReducers({routerReducer}));

import {
    Login,
    Play,
    Profile,
    NearBy
} from "./components/ios";

console.log(Animations);

/**
 * 配置路由
 */
class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Router>
                    <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} />
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} />
                    <Route name="Login" component={Login} schema="modal" />
                    <Route name="NearBy" component={NearBy} schema="modal" sceneConfig={Animations.FlatFloatFromBottom} />
                    <Route name="Profile" component={Profile} schema="modal" sceneConfig={Animations.FlatFloatFromBottom} />
                    <Route name="Play" component={Play} schema="modal" sceneConfig={Animations.FlatFloatFromBottom} />
                </Router>
            </View>
        );
    }
}

/**
 * app主入口
 */
class music extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent("music", () => music);

