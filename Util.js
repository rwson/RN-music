/**
 * Util.js
 * 一些公共配置和一些静态资源的引用
 */

"use strict";

import {Dimensions} from "react-native";

module.exports = {
    "screenInfo": Dimensions.get("window"),
    "loginBackground": require("./static/login-background.png"),
    "loginLogo": require("./static/login-logo.png"),
    "loginBtn": require("./static/login-btn.png"),
    "mailIcon": require("./static/mail-icon.png"),
    "lockIcon": require("./static/lock-icon.png")
};

