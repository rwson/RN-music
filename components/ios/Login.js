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
    StyleSheet
} from "react-native";

import * as Util from "../../Util";

const background = require("../../static/login-background.png");
const screenWidth = Util.screenInfo.width;
const screenHeight = Util.screenInfo.height;

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.container,styles.fullScreen]}>
                    <Image source={background} style={[styles.bjImage,styles.fullScreen]}>
                        <View style={styles.loginFields}></View>
                    </Image>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    fullScreen:{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    bjImage:{
        width:Util.screenInfo.width,
        height:Util.screenInfo.height
    },
    loginFields:{
        marginLeft: 70 * screenWidth / 750,
        marginRight:  70 * screenWidth / 750,
        height: 750,
        backgroundColor:"red"
    }
});
