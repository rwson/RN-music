/**
 * Play.js
 * build by rwson @3/29/16
 * mail:rw_Song@sina.com
 * 聊天界面
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
    StyleSheet,
    Menu
} from "react-native";

import Drawer from "react-native-drawer";

import * as Util from "../../Util";

const screenWidth = Util.screenInfo.width;
const screenHeight = Util.screenInfo.height;
const screenScale = Util.screenInfo.scale;
const scale = screenWidth / 750;

const commonBackground = Util.commonBackground;
const sideMenuBackground = Util.sideMenuBackground;
const defaultProfileCover = Util.defaultProfileCover;
const sideMenuIcon = Util.sideMenuIcon;

const defaultAvatar = Util.defaultAvatar;

const friendsIcon = Util.friendsIcon;
const messageIcon = Util.messageIcon;
const settingsIcon = Util.settingsIcon;
const playlistIcon = Util.playlistIcon;

const userName = "小宋";
const userLocation = "江苏 南京";
const followers = 10000;
const follow = 100;

class Panel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.panelMenu}>
                <Image source={sideMenuBackground} style={styles.sideMenuBackground}>
                    <View style={styles.sideMenuContent}>
                        <View style={styles.sideMenuTop}>
                            <Image source={defaultProfileCover} style={styles.profileCover}>
                                <View style={styles.profileMask}>
                                    <View style={styles.sideMenuTitle}>
                                        <Text style={styles.profileText}>Profile</Text>
                                    </View>
                                    <View style={styles.userInfo}>
                                        <Image source={defaultAvatar} style={styles.avatarPic}/>
                                        <View style={styles.profileInfo}>
                                            <Text style={styles.userName}>{userName}</Text>
                                            <Text style={styles.userLocation}>{userLocation}</Text>
                                            <View style={styles.followInfo}>
                                                <View style={[styles.followItem,styles.followItemLeft]}>
                                                    <Text style={styles.followValue}>{followers}</Text>
                                                    <Text style={styles.followTitle}>followers</Text>
                                                </View>
                                                <View style={styles.followItem}>
                                                    <Text style={styles.followValue}>{follow}</Text>
                                                    <Text style={styles.followTitle}>follow</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Image>
                        </View>
                        <View style={styles.sideMenuOptions}>
                            <View style={[styles.optionItem,styles.noBorderTop]}>
                                <Image source={playlistIcon} style={styles.playListIcon}/>
                                <Text style={styles.menuText}>PlayList</Text>
                            </View>
                            <View style={styles.optionItem}>
                                <Image source={friendsIcon} style={styles.playListIcon}/>
                                <Text style={styles.menuText}>Friends</Text>
                            </View>
                            <View style={styles.optionItem}>
                                <Image source={messageIcon} style={styles.playListIcon}/>
                                <Text style={styles.menuText}>Messages</Text>
                            </View>
                            <View style={[styles.optionItem,styles.noBorderBottom]}>
                                <Image source={settingsIcon} style={styles.playListIcon}/>
                                <Text style={styles.menuText}>Settings</Text>
                            </View>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }

}

export default class NearBy extends Component {

    constructor(props) {
        super(props);
    }

    closeDrawer() {
        this._drawer.close();
    }

    openDrawer() {
        this._drawer.open();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={commonBackground} style={[styles.container,styles.bjImage]}>
                    <Drawer ref={(ref) => this._drawer = ref}
                            tapToClose={true}
                            panCloseMask={0.2}
                            closedDrawerOffset={0}
                            tweenHandler={(ratio) => ({
                                main: { opacity:(2 - ratio) / 2 }
                            })}
                            content={<Panel />}>
                        <View style={styles.mainContent}>
                            <View style={styles.mainContentTop}>
                                <TouchableHighlight style={styles.sideMenuIcon}
                                                    underlayColor="transparent"
                                                    onPress={this.openDrawer.bind(this)}>
                                    <Image style={styles.sideMenuIconImage} source={sideMenuIcon}/>
                                </TouchableHighlight>
                                <Text style={styles.mainContentTopText}>Nearby Friends</Text>
                            </View>
                            <View style={styles.circleArea}>
                                <View style={styles.circleArea1}>
                                    <View style={styles.circleArea2}>
                                        <View style={styles.circleArea3}>
                                            <View style={styles.userPic}>
                                                <Image source={defaultAvatar} style={styles.nearAvatar}/>
                                                <Text style={styles.nearUserName}>{userName}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.notifaction}>
                                <Text style={styles.notifationText}>Nobody Found this time,would you want to research?</Text>
                                <TouchableHighlight style={styles.researchIcon}
                                                    underlayColor="transparent"
                                                    onPress={this.openDrawer.bind(this)}>
                                    <Text style={styles.researchText}>Search</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Drawer>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bjImage: {
        width: screenWidth,
        height: screenHeight
    },
    panelMenu: {
        position: "absolute",
        width: 610 * scale,
        height: screenHeight
    },
    sideMenuBackground: {
        width: 610 * scale,
        height: screenHeight
    },
    sideMenuContent: {
        flex: 1
    },
    sideMenuTop: {
        width: 610 * scale,
        height: 368 * scale
    },
    profileCover: {
        width: 610 * scale,
        height: 368 * scale,
        flexDirection: "row"
    },
    profileMask: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    sideMenuTitle: {
        width: 610 * scale,
        height: 50 * scale,
        marginTop: 80 * scale,
        flexDirection: "row"
    },
    profileText: {
        marginLeft: 30 * scale,
        fontSize: 40 * scale,
        fontWeight: "500",
        color: "#fff",
        backgroundColor: "transparent"
    },
    userInfo: {
        marginTop: 40 * scale,
        marginLeft: 30 * scale,
        height: 180 * scale,
        flexDirection: "row"
    },
    avatarPic: {
        width: 148 * scale,
        height: 148 * scale,
        borderRadius: 74 * scale,
        borderWidth: 4 * scale,
        borderColor: "#fff",
        marginRight: 20 * scale,
        marginTop: 18 * scale
    },
    userName: {
        fontSize: 40 * scale,
        color: "#fff",
        marginBottom: 10 * scale
    },
    userLocation: {
        fontSize: 24 * scale,
        color: "#fff"
    },
    followInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    followItem: {
        flex: 1,
        marginTop: 10 * scale
    },
    followItemLeft: {
        marginRight: 45 * scale
    },
    followValue: {
        fontSize: 30 * scale,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 5 * scale
    },
    followTitle: {
        fontSize: 24 * scale,
        color: "#fff"
    },
    sideMenuOptions: {
        marginLeft: 30 * scale,
        marginTop: 20 * scale,
        width: 580 * scale,
        height: 500 * scale,
        flexDirection: "column"
    },
    optionItem: {
        flex: 1,
        flexDirection: "row",
        height: 110 * scale,
        alignItems: "center",
        borderBottomWidth: 1 / screenScale,
        borderBottomColor: "rgba(32,117,115,1)",
        borderTopWidth: 1 / screenScale,
        borderTopColor: "rgba(36,171,251,1)"
    },
    noBorderTop: {
        borderTopWidth: 0
    },
    noBorderBottom: {
        borderBottomWidth: 0
    },
    playListIcon: {
        width: 49 * scale,
        height: 44 * scale,
        marginLeft: 15 * scale
    },
    menuText: {
        fontSize: 30 * scale,
        color: "#fff",
        backgroundColor: "transparent",
        marginLeft: 60 * scale
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 30 * scale
    },
    mainContentTop: {
        marginTop: 70 * scale,
        height: 50 * scale,
        flexDirection: "row",
        alignItems: "center"
    },
    sideMenuIconImage: {
        width: 40 * scale,
        height: 33 * scale
    },
    mainContentTopText: {
        flex: 1,
        backgroundColor: "transparent",
        fontSize: 35 * scale,
        color: "#fff",
        textAlign: "center"
    },
    circleArea: {
        width: 650 * scale,
        height: 650 * scale,
        borderRadius: 325 * scale,
        borderWidth: 1 / screenScale,
        borderColor: "#ccc",
        marginLeft: 20 * scale,
        marginTop: 50 * scale,
        alignItems: "center",
        justifyContent: "center"
    },
    circleArea1: {
        width: 520 * scale,
        height: 520 * scale,
        borderRadius: 260 * scale,
        borderWidth: 1 / screenScale,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center"
    },
    circleArea2: {
        width: 390 * scale,
        height: 390 * scale,
        borderRadius: 195 * scale,
        borderWidth: 1 / screenScale,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center"
    },
    circleArea3: {
        width: 260 * scale,
        height: 260 * scale,
        borderRadius: 130 * scale,
        borderWidth: 1 / screenScale,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center"
    },
    nearAvatar: {
        width: 100 * scale,
        height: 100 * scale,
        borderRadius: 50 * scale,
        borderWidth: 3 / screenScale,
        borderColor: "#fff",
        marginLeft: 80 * scale
    },
    nearUserName: {
        width: 260 * scale,
        fontSize: 20 * scale,
        backgroundColor: "transparent",
        color: "#fff",
        textAlign: "center"
    },
    notifaction: {
        flex: 1,
        alignItems: "center",
        marginTop: 50 * scale
    },
    notifationText:{
        backgroundColor: "transparent"
    },
    researchIcon: {
        width: 300 * scale,
        height: 80 * scale,
        borderRadius: 15 * scale,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20 * scale
    },
    researchText: {
        fontSize: 40 * scale,
        color: "#fff"
    }
});


