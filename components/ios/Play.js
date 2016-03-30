/**
 * Play.js
 * build by rwson @3/29/16
 * mail:rw_Song@sina.com
 * 音乐播放界面
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
    ProgressViewIOS,
    ListView,
    StyleSheet
} from "react-native";

import * as Util from "../../Util";

const screenWidth = Util.screenInfo.width;
const screenHeight = Util.screenInfo.height;
const screenScale = Util.screenInfo.scale;
const scale = screenWidth / 750;
const commonBackground = Util.commonBackground;
const playControllerBackground = Util.playControllerBackground;
const defaultAlbum = Util.defaultAlbum;

const backBtn = Util.backBtn;
const playBtn = Util.playBtn;
const pauseBtn = Util.pauseBtn;
const last = Util.last;
const lastDisable = Util.lastDisable;
const next = Util.next;
const nextDisable = Util.nextDisable;

export default class Play extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            playing: false,
            modes: ["repeat-list", "repeat-one", "shuffle"],
            curMode: "repeat-list",
            curSong: {},
            progress: 0,
            songsList: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    componentWillMount() {
        fetch("http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js",{
            "method": "GET"
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((res) => {
            //console.log(res);
        });
    }

    renderPlayerHeader() {
        const {curSong} = this.state;
        const isEmpty = Util.isEmpty(curSong);
        let controllerBackground;
        let curAlbum;
        let songName;
        let songAuthor;
        let lastBtn;
        let playPause;
        let nextBtn;
        if (isEmpty) {
            controllerBackground = playControllerBackground;
            curAlbum = defaultAlbum;
            songName = "no song is playing";
            songAuthor = "no song is playing";
            lastBtn = lastDisable;
            playPause = playBtn;
            nextBtn = nextDisable;
        } else {
            controllerBackground = require(curSong.thumbImage);
            curAlbum = require(curSong.album);
            songName = curSong.soneName;
            songAuthor = curSong.songAuthor;
            lastBtn = last;
            playPause = pauseBtn;
            nextBtn = next;
        }
        return (
            <View style={styles.playController}>
                <Image source={controllerBackground} style={styles.controllerBj}>
                    <View style={styles.playIng}>
                        <Image souce={curAlbum} style={styles.songAlbum}/>
                        <View style={styles.songInfo}>
                            <View style={styles.name}>
                                <Text style={styles.songName}>{songName}</Text>
                                <Text style={styles.songAuthor}>{songAuthor}</Text>
                            </View>
                            <View style={styles.progress}>
                                <ProgressViewIOS progress={0.6}
                                                 trackTintColor="#fff"
                                                 progressTintColor="#00aeff"
                                                 style={styles.progressBar}/>
                                <View style={styles.ctrlBtns}>
                                    <TouchableHighlight style={[styles.btnItem]}>
                                        <Image source={lastBtn} style={styles.lastNext}/>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={[styles.btnItem,styles.btnPause]}>
                                        <Image source={playPause} style={styles.playPause}/>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={[styles.btnItem]}>
                                        <Image source={nextBtn} style={styles.lastNext}/>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }

    renderSongs() {
        return (
            <View></View>
        );
    }

    renderPlayerList() {
        const {songsList} = this.state;
        return (
            <View style={[styles.container,styles.playList]}>
                <ScrollView>
                    <ListView
                        ref="listview"
                        dataSource={songsList}
                        renderRow={this.renderSongs}
                        automaticallyAdjustContentInsets={false}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersisiTaps={true}
                        showVerticalIndicatpr={false}/>
                </ScrollView>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={commonBackground} style={[styles.container,styles.fullScreen]}>
                    {this.renderPlayerHeader()}
                    {this.renderPlayerList()}
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    playController: {
        height: 420 * scale,
        flexDirection: "column",
        overflow: "hidden"
    },
    controllerBj: {
        width: 750 * scale,
        height: 420 * scale
    },
    playIng: {
        flexDirection: "row",
        width: 690 * scale,
        height: 160 * scale,
        marginLeft: 30 * scale,
        marginRight: 30 * scale,
        marginTop: 145 * scale
    },
    songAlbum: {
        width: 160 * scale,
        height: 160 * scale,
        borderWidth: 6 / screenScale,
        borderColor: "#cebacc",
        marginRight: 30 * scale
    },
    songInfo: {
        width: 500 * scale,
        flexDirection: "column"
    },
    name: {
        flex: 1
    },
    progress: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    songName: {
        flex: 1,
        backgroundColor: "transparent",
        fontSize: 8 / scale,
        color: "#fff",
        textAlign: "center"
    },
    songAuthor: {
        flex: 1,
        backgroundColor: "transparent",
        fontSize: 7 / scale,
        color: "#fff",
        textAlign: "center"
    },
    progressBar: {
        width: 485 * scale,
        height: 6 / screenScale,
        marginTop: 10 * scale,
        marginBottom: 20 * scale
    },
    ctrlBtns: {
        flex: 1,
        flexDirection: "row",
        height: 25 * scale
    },
    btnItem: {
        flex: 1
    },
    btnPause: {
        marginLeft: 50 * scale,
        marginRight: 50 * scale
    },
    lastNext: {
        width: 54 * scale,
        height: 33 * scale
    },
    playPause: {
        width: 30 * scale,
        height: 33 * scale
    },
    playList: {
        marginTop: 420 * scale
    }
});

