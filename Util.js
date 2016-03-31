/**
 * Util.js
 * 一些公共配置和一些静态资源的引用
 */

"use strict";

import {Dimensions} from "react-native";

const Util = {

    //  歌曲列表
    "songList": [
        {
            "id": "1772534317",
            "title": "As long as you love me",
            "cover": "http://c.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=2bc411689f22720e6fc3eaa81aa26123/9d82d158ccbf6c81a23998e2bb3eb13533fa40a9.jpg",
            "author": "Justin Bieber",
            "src": "http://yinyueshiting.baidu.com/data2/music/37787707/1489000415840032.m4a?xcode=948410e015c73eaa31189f16455400eb"
        },
        {
            "id": "1772231360",
            "title": "Timber",
            "cover": "http://img.xiami.net/images/album/img40/205140/2051401381205140_4.jpg",
            "author": "Pitbull",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1770242833",
            "title": "International Love",
            "cover": "http://img.xiami.net/images/album/img50/888350/1306888354_4.jpg",
            "author": "Pitbull",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "2652546",
            "title": "Go Girl",
            "cover": "http://img.xiami.net/images/album/img69/37469/2267531390549584_4.jpg",
            "author": "Pitbull",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1769982649",
            "title": "On The Floor",
            "cover": "http://img.xiami.net/images/album/img12/14812/4211761395032965_4.jpg",
            "author": "Jennifer Lopez",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1771869032",
            "title": "Live It Up",
            "cover": "http://img.xiami.net/images/album/img12/14812/15680245231395034295_4.jpg",
            "author": "Jennifer Lopez",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1772497424",
            "title": "Mmm Yeah",
            "cover": "http://img.xiami.net/images/album/img67/105167/15977913611397791361_4.jpg",
            "author": "Austin Mahone",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1769860473",
            "title": "DJ Got Us Fallin' in Love",
            "cover": "http://img.xiami.net/images/album/img58/23258/4103551289359236_4.jpg",
            "author": "Various Artists",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1773682227",
            "title": "We Are One (Ole Ola)",
            "cover": "http://img.xiami.net/images/album/img69/37469/10969487461397015102_4.jpg",
            "author": "Pitbull",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "3619600",
            "title": "Krazy",
            "cover": "http://img.xiami.net/images/album/img56/23256/3249891239263162_4.jpg",
            "author": "Soundtrack",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1769056770",
            "title": "I Know You Want Me",
            "cover": "http://img.xiami.net/images/album/img58/23258/3421691250240207_4.jpg",
            "author": "Various Artists",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "369149",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img97/6997/31551_4.jpg",
            "author": "S.E.N.S.",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1769508434",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img32/66732/3801611393911227_4.jpg",
            "author": "CNBLUE",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "152453",
            "title": "分飞",
            "cover": "http://img.xiami.net/images/album/img15/2315/124041387131671_4.jpg",
            "author": "徐怀钰",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1122123",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img12/10312/544961375327185_4.jpg",
            "author": "John Lennon",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "3404862",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img0/3078121257919902_4.jpg",
            "author": "Yozoh",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "152454",
            "title": "踏浪",
            "cover": "http://img.xiami.net/images/album/img15/2315/124041387131671_4.jpg",
            "author": "徐怀钰",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "2395940",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img91/31591/2005411414129713_4.jpg",
            "author": "Keyshia Cole",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1769469912",
            "title": "ただ一つの願いさえ",
            "cover": "http://img.xiami.net/images/album/img32/65032/3770761338446997_4.jpg",
            "author": "Love",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        },
        {
            "id": "1850273",
            "title": "September: Longing / Love",
            "cover": "http://img.xiami.net/images/album/img8/17508/1558001395977020_4.jpg",
            "author": "George Winston",
            "src": "http://yinyueshiting.baidu.com/data2/music/54202266/5420139850400128.mp3?xcode=343c6b873b167df7c85f964b2abbb8a2"
        }
    ],

    //  屏幕的相关信息
    "screenInfo": Dimensions.get("window"),

    //  背景、logo、头像
    "commonBackground": require("./static/common-background.png"),
    "playControllerBackground": require("./static/player-controller-background.png"),
    "sideMenuBackground": require("./static/side-menu-bj.png"),
    "defaultAlbum": require("./static/default-album.jpg"),
    "defaultProfileCover": require("./static/default-profile-cover.jpeg"),
    "loginBackground": require("./static/login-background.png"),
    "loginLogo": require("./static/login-logo.png"),
    "defaultAvatar": require("./static/default-avatar.png"),
    "defaultScrollItem": require("./static/scroll-pic.png"),

    //  图标类
    "backBtn": require("./static/back-btn.png"),
    "loginBtn": require("./static/login-btn.png"),
    "mailIcon": require("./static/mail-icon.png"),
    "lockIcon": require("./static/lock-icon.png"),
    "locationIcon": require("./static/location-icon.png"),
    "startIcon": require("./static/start-btn.png"),
    "playIng": require("./static/playing.png"),
    "playBtn": require("./static/play.png"),
    "pauseBtn": require("./static/pause.png"),
    "last": require("./static/last.png"),
    "lastDisable": require("./static/last-disable.png"),
    "next": require("./static/next.png"),
    "nextDisable": require("./static/next-disable.png"),
    "sideMenuIcon": require("./static/side-menu.png"),
    "friendsIcon": require("./static/frends-icon.png"),
    "messageIcon": require("./static/message-icon.png"),
    "settingsIcon": require("./static/settings-icon.png"),
    "playlistIcon": require("./static/play-list-icon.png"),

    /**
     * 一个对象是否为空,当传入第二个参数的时候,自动判断是否有这些属性
     * @param obj   被判断的对象
     * @param props 判断是否有具体的属性
     * @returns {boolean}
     */
    "isEmpty": (obj, props) => {
        let res = true;
        if (Util.getType(obj) == "array") {
            res = obj.length == 0;
        } else if (Util.getType(obj) == "object") {
            if (!props) {
                res = Object.keys(obj).length == 0;
            } else {
                props.forEach((item) => {
                    if (!(item in obj)) {
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

