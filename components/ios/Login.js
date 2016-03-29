/**
 * Login.js
 * build by rwson @3/29/16
 * mail:rw_Song@sina.com
 * 登录界面
 */

"use strict";

import React, {
    Component,
    Image,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    StyleSheet
} from "react-native";

import * as Util from "../../Util";

const screenWidth = Util.screenInfo.width;
const screenHeight = Util.screenInfo.height;
const screenScale = Util.screenInfo.scale;
const scale = screenWidth / 750;
const background = Util.loginBackground;
const logo = Util.loginLogo;
const mailIcon = Util.mailIcon;
const lockIcon = Util.lockIcon;
const loginBtn = Util.loginBtn;

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    onLogin() {
        alert("正在开发中...");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.container,styles.fullScreen]}>
                    <Image source={background} style={[styles.bjImage,styles.fullScreen]}>
                        <View style={styles.loginFields}>
                            <View>
                                <Image source={logo} style={styles.loginLogo}/>
                            </View>
                            <View style={styles.loginForm}>
                                <View style={[styles.fileds,styles.email]}>
                                    <Image source={mailIcon} style={[styles.filedIcon,styles.mailIcon]}/>
                                    <TextInput style={styles.input} placeholder="email" keyboardType="email-address"
                                               autoCorrect={false} clearButtonMode="while-editing"/>
                                </View>
                                <View style={[styles.fileds,styles.password]}>
                                    <Image source={lockIcon} style={[styles.filedIcon,styles.lockIcon]}/>
                                    <TextInput style={styles.input} placeholder=" password" secureTextEntry={true}
                                               autoCorrect={false} clearButtonMode="while-editing"/>
                                </View>
                                <View style={styles.fileds}>
                                    <TouchableHighlight underlayColor="transparent" activeOpacity={0.8}
                                                        onPress={this.onLogin.bind(this)}>
                                        <Image source={loginBtn} style={styles.button}/>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Image>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fullScreen: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    bjImage: {
        width: screenWidth,
        height: screenHeight
    },
    loginLogo: {
        width: 333 * scale,
        height: 135 * scale
    },
    loginFields: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 70 * scale,
        marginRight: 70 * scale,
        marginTop: 300 * scale,
        width: 610 * scale,
        height: 750 * scale,
        overflow: "visible"
    },
    loginForm: {
        marginTop: 100 * scale,
        flexDirection: "column",
        width: 610 * scale,
        height: 270 * scale,
        backgroundColor: "rgba(54,106,214,0.8)",
        shadowColor: "rgba(0,0,0,0.8)",
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    fileds: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        flex: 1,
        paddingLeft: 30,
        color: "#fff",
        fontSize: 30 * scale
    },
    email: {
        borderBottomColor: "#2556c4",
        borderBottomWidth: 1
    },
    mailIcon: {
        width: 26 * scale,
        height: 20 * scale,
        marginLeft: 40 * scale,
        marginTop: 36 * scale
    },
    password: {
        width: 610 * scale,
        borderTopColor: "#5582e9",
        borderTopWidth: 1
    },
    lockIcon: {
        width: 17 * scale,
        height: 24 * scale,
        marginLeft: 40 * scale,
        marginTop: 30 * scale
    },
    button: {
        width: 610 * scale,
        height: 90 * scale
    }
});

