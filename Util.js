/**
 * Util.js
 * 一些公共配置和一些静态资源的引用
 */

"use strict";

import {Dimensions} from "react-native";

const Util = {

    //  屏幕的相关信息
    "screenInfo": Dimensions.get("window"),

    //  背景、logo
    "commonBackground": require("./static/common-background.png"),
    "playControllerBackground": require("./static/player-controller-background.png"),
    "defaultAlbum": require("./static/default-album.jpg"),
    "loginBackground": require("./static/login-background.png"),
    "loginLogo": require("./static/login-logo.png"),

    //  图标类
    "backBtn": require("./static/back-btn.png"),
    "loginBtn": require("./static/login-btn.png"),
    "mailIcon": require("./static/mail-icon.png"),
    "lockIcon": require("./static/lock-icon.png"),
    "playBtn": require("./static/play.png"),
    "pauseBtn": require("./static/pause.png"),
    "last": require("./static/last.png"),
    "lastDisable": require("./static/last-disable.png"),
    "next": require("./static/next.png"),
    "nextDisable": require("./static/next-disable.png"),

    /**
     * 一个对象是否为空,当传入第二个参数的时候,自动判断是否有这些属性
     * @param obj   被判断的对象
     * @param props 判断是否有具体的属性
     * @returns {boolean}
     */
    "isEmpty": (obj,props) => {
        let res = true;
        if (Util.getType(obj) == "array") {
            res = obj.length == 0;
        } else if(Util.getType(obj) == "object"){
            if(!props){
                res = Object.keys(obj).length == 0;
            } else {
                props.forEach((item) => {
                    if(!(item in obj)){
                        res = false;
                    }
                });
            }
        }
        return res;
    },

    /**
     * 获取范围内的随机数
     * @param min   区间的左界
     * @param max
     * @returns {*|number}
     */
    "getRandom": (min, max) => {
        return Math.floor((max - min) * Math.random() + min);
    },

    /**
     * 获取随机id
     * @returns {string}
     */
    "randomId": () => {
        return (Math.random()).toString(16).substr(3);
    },

    /**
     * 获取一个对象构造器的类名
     * @param obj   被判断的对象
     * @returns {string}
     */
    "getType": (obj) => {
        return Object.prototype.toString.call(obj).split(" ")[1].replace("]", "").toLowerCase();
    }
};

module.exports = Util;

