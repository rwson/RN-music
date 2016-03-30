/**
 * Util.js
 * 一些公共配置和一些静态资源的引用
 */

"use strict";

import {Dimensions} from "react-native";

const Util = {

    //  歌曲列表
    "songList":[
        {
            "id": "1772231360",
            "title": "Timber",
            "cover": "http://img.xiami.net/images/album/img40/205140/2051401381205140_4.jpg",
            "author": "Pitbull",
            "src": "http://m5.file.xiami.com/469/37469/1881205141/1772231360_10884805_l.mp3?auth_key=a25580f9b9354b3f87f00d79d34b6f98-1459382400-0-null"
        },
        {
            "id": "1770242833",
            "title": "International Love",
            "cover": "http://img.xiami.net/images/album/img50/888350/1306888354_4.jpg",
            "author": "Pitbull",
            "src": "http://m5.file.xiami.com/469/37469/443900/1770242833_2338069_l.mp3?auth_key=14a792808cba2a1b601df1f17dea905a-1459382400-0-null"
        },
        {
            "id": "2652546",
            "title": "Go Girl",
            "cover": "http://img.xiami.net/images/album/img69/37469/2267531390549584_4.jpg",
            "author": "Pitbull",
            "src": "http://m5.file.xiami.com/469/37469/226753/2652546_16915763_l.mp3?auth_key=8410cab53e89f89ca3014dcb7a64a1ce-1459382400-0-null"
        },
        {
            "id": "1769982649",
            "title": "On The Floor",
            "cover": "http://img.xiami.net/images/album/img12/14812/4211761395032965_4.jpg",
            "author": "Jennifer Lopez",
            "src": "http://m5.file.xiami.com/812/14812/421176/1769982649_1936216_l.mp3?auth_key=8acce4c96207964259e831122a723542-1459382400-0-null"
        },
        {
            "id": "1771869032",
            "title": "Live It Up",
            "cover": "http://img.xiami.net/images/album/img12/14812/15680245231395034295_4.jpg",
            "author": "Jennifer Lopez",
            "src": "http://m5.file.xiami.com/812/14812/1568024523/1771869032_4412555_l.mp3?auth_key=602c7d95e009cdeca0a8e2ef64271af6-1459382400-0-null"
        },
        {
            "id": "1772497424",
            "title": "Mmm Yeah",
            "cover": "http://img.xiami.net/images/album/img67/105167/15977913611397791361_4.jpg",
            "author": "Austin Mahone",
            "src": "http://m5.file.xiami.com/167/105167/1890366200/1772497424_11334602_l.mp3?auth_key=8c6d926027ae9831f6a0b4832bb7c434-1459382400-0-null"
        },
        {
            "id": "1769860473",
            "title": "DJ Got Us Fallin' in Love",
            "cover": "http://img.xiami.net/images/album/img58/23258/4103551289359236_4.jpg",
            "author": "Various Artists",
            "src": "http://m5.file.xiami.com/258/23258/410355/1769860473_1745115_l.mp3?auth_key=91b8761fef4728d22273fd8bed093c7c-1459382400-0-null"
        },
        {
            "id": "1773682227",
            "title": "We Are One (Ole Ola)",
            "cover": "http://img.xiami.net/images/album/img69/37469/10969487461397015102_4.jpg",
            "author": "Pitbull",
            "src": "http://m5.file.xiami.com/469/37469/1015104974/1773682227_16008046_l.mp3?auth_key=5fe1cd3cd07c267bdef73f3b7c55b1a4-1459382400-0-null"
        },
        {
            "id": "3619600",
            "title": "Krazy",
            "cover": "http://img.xiami.net/images/album/img56/23256/3249891239263162_4.jpg",
            "author": "Soundtrack",
            "src": "http://m5.file.xiami.com/1/256/23256/324989/3619600_423468_l.mp3?auth_key=5e095f66540a67221b46a9fa46169480-1459382400-0-null"
        },
        {
            "id": "1769056770",
            "title": "I Know You Want Me",
            "cover": "http://img.xiami.net/images/album/img58/23258/3421691250240207_4.jpg",
            "author": "Various Artists",
            "src": "http://m5.file.xiami.com/1/258/23258/342169/1769056770_682285_l.mp3?auth_key=812aac20297d6a9b0bc55f9f774a940d-1459382400-0-null"
        },
        {
            "id": "369149",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img97/6997/31551_4.jpg",
            "author": "S.E.N.S.",
            "src": "http://m5.file.xiami.com/997/6997/31551/369149_2725973_l.mp3?auth_key=69dfd98ae5e22849695152d3a935bab4-1459382400-0-null"
        },
        {
            "id": "1769508434",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img32/66732/3801611393911227_4.jpg",
            "author": "CNBLUE",
            "src": "http://m5.file.xiami.com/732/66732/380161/1769508434_15279198_l.mp3?auth_key=4de156ed8cfc6a3e20206bbadcc62f3b-1459382400-0-null"
        },
        {
            "id": "152453",
            "title": "分飞",
            "cover": "http://img.xiami.net/images/album/img15/2315/124041387131671_4.jpg",
            "author": "徐怀钰",
            "src": "http://m5.file.xiami.com/315/2315/12404/152453_48643_l.mp3?auth_key=1e280ea4a9d086f89eb670017ab84e83-1459382400-0-null"
        },
        {
            "id": "1122123",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img12/10312/544961375327185_4.jpg",
            "author": "John Lennon",
            "src": "http://m5.file.xiami.com/1/312/10312/54496/1122123_361559_l.mp3?auth_key=5cf6fb4668f734d3491812ae5a958016-1459382400-0-null"
        },
        {
            "id": "3404862",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img0/3078121257919902_4.jpg",
            "author": "Yozoh",
            "src": "http://m5.file.xiami.com/379/23379/307812/3404862_15617293_l.mp3?auth_key=313067e0c2e1a0be5737c070349fbf8b-1459382400-0-null"
        },
        {
            "id": "152454",
            "title": "踏浪",
            "cover": "http://img.xiami.net/images/album/img15/2315/124041387131671_4.jpg",
            "author": "徐怀钰",
            "src": "http://m5.file.xiami.com/315/2315/12404/152454_48644_l.mp3?auth_key=78e075419da3c03ae4b85542e442ab86-1459382400-0-null"
        },
        {
            "id": "2395940",
            "title": "Love",
            "cover": "http://img.xiami.net/images/album/img91/31591/2005411414129713_4.jpg",
            "author": "Keyshia Cole",
            "src": "http://m5.file.xiami.com/1/591/31591/200541/2395940_271215_l.mp3?auth_key=8b59f8615e6cddf1fcce1e3c874129a6-1459382400-0-null"
        },
        {
            "id": "1769469912",
            "title": "ただ一つの願いさえ",
            "cover": "http://img.xiami.net/images/album/img32/65032/3770761338446997_4.jpg",
            "author": "Love",
            "src": "http://m5.file.xiami.com/32/65032/377076/1769469912_1208500_l.mp3?auth_key=a86ec330dd1b096b4c774c1189805d2f-1459382400-0-null"
        },
        {
            "id": "1850273",
            "title": "September: Longing / Love",
            "cover": "http://img.xiami.net/images/album/img8/17508/1558001395977020_4.jpg",
            "author": "George Winston",
            "src": "http://m5.file.xiami.com/508/17508/155800/1850273_876532_l.mp3?auth_key=c6bc74cc797216e5729c49edab6a2721-1459382400-0-null"
        }
    ],

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
    "startIcon": require("./static/start-btn.png"),
    "playIng": require("./static/playing.png"),
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

