/**
 * Play.js
 * build by rwson @3/29/16
 * mail:rw_Song@sina.com
 * 个人资料界面
 */

"use strict";

import React, {
    Component,
    Image,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from "react-native";

import {
    Actions
} from "react-native-redux-router";

import ParallaxView from "react-native-parallax-view";

import * as Util from "../../Util";

const screenWidth = Util.screenInfo.width;
const screenHeight = Util.screenInfo.height;
const screenScale = Util.screenInfo.scale;
const scale = screenWidth / 750;

const commonBackground = Util.commonBackground;
const defaultProfileCover = Util.defaultProfileCover;
const defaultAvatar = Util.defaultAvatar;
const locationIcon = Util.locationIcon;
const backBtn = Util.backBtn;

const userName = "小宋";
const userLocation = "江苏 南京";
const followers = 10000;
const follow = 100;
const playLists = 10;
let scrollItems = [
    Util.defaultScrollItem,
    Util.defaultScrollItem,
    Util.defaultScrollItem,
    Util.defaultScrollItem,
    Util.defaultScrollItem,
    Util.defaultScrollItem
];


export default class Profile extends Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        alert("开发中。。。");
    }

    renderProfileHeader() {
        return (
            <View style={styles.userInfo}>
                <View style={styles.infoItem}>
                    <Text style={[styles.infoText,styles.userName]}>{userName}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Image source={locationIcon} style={styles.locationIcon}/>
                    <Text style={[styles.infoText,styles.userLocation]}>{userLocation}</Text>
                </View>
            </View>
        );
    }

    renderScrollItem() {
        let self = this;
        return scrollItems.map(function (item) {
            return (
                <View key={Util.randomId()} style={styles.scrollItem}>
                    <TouchableHighlight underlayColor="transparent"
                                        onPress={self.handleClick.bind(self)}>
                        <Image source={item} style={styles.scrollImage}/>
                    </TouchableHighlight>
                </View>
            );
        });
    }

    renderProfileFooter() {
        return (
            <View style={styles.footerArea}>
                <View style={styles.followInfo}>
                    <View style={styles.infoPart}>
                        <Text style={styles.partValue}>{followers}</Text>
                        <Text style={styles.partTitle}>followers</Text>
                    </View>
                    <View style={styles.infoPart}>
                        <Text style={styles.partValue}>{follow}</Text>
                        <Text style={styles.partTitle}>following</Text>
                    </View>
                    <View style={styles.infoPart}>
                        <Text style={styles.partValue}>{playLists}</Text>
                        <Text style={styles.partTitle}>playlists</Text>
                    </View>
                </View>
                <ScrollView style={styles.scroller}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                    {this.renderScrollItem()}
                </ScrollView>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={commonBackground} style={[styles.container,styles.bjImage]}>
                    <ParallaxView
                        backgroundSource={defaultProfileCover}
                        windowHeight={420 * scale}
                        style={styles.scrollTopArea}
                        header={(
                                 <View>
                                    <TouchableHighlight style={styles.backButton}
                                                        underlayColor="transparent"
                                                        onPress={() => Actions.NearBy()}>
                                        <Image source={backBtn} style={styles.backBtn}/>
                                    </TouchableHighlight>
                                    <Image source={defaultAvatar} style={styles.avatar} />
                                 </View>
                               )}
                        contentInset={{top: 0}}>
                        <View>
                            {this.renderProfileHeader()}
                            {this.renderProfileFooter()}
                        </View>
                    </ParallaxView>
                    <View style={styles.followBtn}>
                        <TouchableHighlight style={[styles.followBtnItem,styles.followBtnLeft]}
                                            underlayColor="transparent"
                                            onPress={this.handleClick.bind(this)}>
                            <Text style={styles.btnText}>Follow</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.followBtnItem,styles.followBtnRight]}
                                            underlayColor="transparent"
                                            onPress={this.handleClick.bind(this)}>
                            <Text style={styles.btnText}>Message</Text>
                        </TouchableHighlight>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backButton: {
        marginLeft: 30 * scale,
        marginTop: 70 * scale
    },
    backBtn: {
        width: 24 * scale,
        height: 41 * scale
    },
    bjImage: {
        width: screenWidth,
        height: screenHeight
    },
    scrollTopArea: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    avatar: {
        width: 242 * scale,
        height: 242 * scale,
        borderRadius: 121 * scale,
        borderWidth: 4 / screenScale,
        borderColor: "#fff",
        marginLeft: (screenWidth - 248 * scale) * scale,
        marginTop: 250 * scale
    },
    profileInfo: {
        justifyContent: "center"
    },
    userInfo: {
        width: 750 * scale,
        marginTop: 90 * scale,
        flexDirection: "column"
    },
    infoItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    infoText: {
        color: "#fff",
        textAlign: "center",
        justifyContent: "center"
    },
    userName: {
        fontSize: 54 * scale,
        marginBottom: 5 * scale
    },
    userLocation: {
        fontSize: 32 * scale
    },
    locationIcon: {
        width: 18 * scale,
        height: 27 * scale,
        marginTop: 3 * scale,
        marginRight: 18 * scale
    },
    footerArea: {
        marginTop: 55 * scale,
        width: 750 * scale
    },
    followInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    infoPart: {
        flex: 1,
        height: 50 * scale,
        justifyContent: "center"
    },
    partValue: {
        fontSize: 40 * scale,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
    },
    partTitle: {
        fontSize: 30 * scale,
        color: "#fff",
        textAlign: "center"
    },
    scroller: {
        flexDirection: "row",
        marginTop: 40 * scale,
        width: 750 * scale,
        height: 200 * scale
    },
    scrollItem: {
        width: 176 * scale,
        height: 176 * scale,
        marginLeft: 5 * scale,
        marginRight: 5 * scale
    },
    scrollImage: {
        width: 176 * scale,
        height: 176 * scale,
        borderWidth: 6 / screenScale,
        borderColor: "#54bed2"
    },
    followBtn: {
        width: 750 * scale,
        height: 116 * scale,
        flexDirection: "row",
        paddingTop: 46 * scale,
        backgroundColor: "#24acc4",
        borderTopColor: "#fff",
        borderTopWidth: 2 / screenScale
    },
    followBtnItem: {
        flex: 1,
        alignItems: "center"
    },
    followBtnLeft: {
        borderRightWidth: 1 / screenScale,
        borderRightColor: "#26c2ee"
    },
    followBtnRight: {
        borderLeftWidth: 1 / screenScale,
        borderLeftColor: "#12748f"
    },
    btnText: {
        fontSize: 36 * scale,
        color: "#fff"
    }
});
