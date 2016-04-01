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
    StyleSheet,
    NativeModules
} from "react-native";

let temp;
let currentId;
let now = 0;
let playInterval = null;

const audio = NativeModules.RNAudioPlayerURL;

import * as Util from "../../Util";

const screenWidth = Util.screenInfo.width;
const screenHeight = Util.screenInfo.height;
const screenScale = Util.screenInfo.scale;
const scale = screenWidth / 750;
const commonBackground = Util.commonBackground;
const playControllerBackground = Util.playControllerBackground;
const defaultAlbum = Util.defaultAlbum;

const startIcon = Util.startIcon;
const playIng = Util.playIng;
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
            songList: new ListView.DataSource({
                rowHasChanged: (r1, r2) => {
                    return r1.status && r2.status;
                }
            })
        };
        this.renderSongItem = this.renderSongItem.bind(this);
    }

    componentWillMount() {
        const {songList} = this.state;
        let songs = Util.songList;
        songs.forEach((song, index) => {
            let temp = song;
            temp.status = "pausing";
            song[index] = temp;
        });
        this.setState({
            songList: songList.cloneWithRows(songs)
        });
    }

    handlePress(id) {
        let songs = Util.songList;
        const {songList} = this.state;
        //if (!pause) {
        //    now = 0;
        //} else {
        //    audio.pause();
        //    clearInterval(playInterval);
        //    this.setState({
        //        playing: false
        //    });
        //    return;
        //}
        songs.map((song) => {
            temp = song;
            temp.status = "pausing";
            if (temp.id == id) {
                currentId = id;
                this.setState({
                    curSong: temp,
                    playing: true
                });
                temp.status = "playing";
            }
            return temp;
        });
        audio.initWithURL(this.state.curSong.src);
        audio.play();

        audio.getDuration((duration) => {
            clearInterval(playInterval);
            playInterval = setInterval(()=> {
                now += 1;
                this.setState({
                    progress: now / duration
                });
            }, 1000);
        });
        this.setState({
            songList: songList.cloneWithRows(songs)
        });
    }

    lastSong() {
        if (!currentId) {
            return;
        }
        let lastIndex = -1;
        let songs = Util.songList;
        songs.forEach((song, index) => {
            if (song.id == currentId) {
                lastIndex = (index == 0 ? songs.length - 1 : index - 1);
            }
        });
        this.handlePress(songs[lastIndex]["id"]);
    }

    play() {
        const songs = Util.songList;
        const {playing} = this.state;
        this.handlePress(songs[0]["id"],playing);
    }

    nextSong() {
        if (!currentId) {
            return;
        }
        let nextIndex = -1;
        let songs = Util.songList;
        songs.forEach((song, index) => {
            if (song.id == currentId) {
                nextIndex = (index == songs.length - 1 ? 0 : index + 1);
            }
        });
        this.handlePress(songs[nextIndex]["id"]);
    }

    renderPlayerHeader() {
        const {curSong,progress,playing} = this.state;
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
            controllerBackground = {uri: curSong.cover};
            curAlbum = {uri: curSong.cover};
            songName = curSong.title;
            songAuthor = curSong.author;
            lastBtn = last;
            playPause = pauseBtn;
            nextBtn = next;
        }

        if(!playing){
            playPause = playBtn;
        }

        return (
            <View style={styles.playController}>
                <Image source={controllerBackground} style={styles.controllerBj}>
                    <View style={styles.playerUnder}>
                        <View style={styles.playIng}>
                            <View style={styles.songInfo}>
                                <View style={styles.name}>
                                    <Text style={styles.songName}>{songName}</Text>
                                    <Text style={styles.songAuthor}>{songAuthor}</Text>
                                </View>
                                <View style={styles.progress}>
                                    <ProgressViewIOS progress={progress}
                                                     trackTintColor="#fff"
                                                     progressTintColor="#00aeff"
                                                     style={styles.progressBar}/>
                                    <View style={styles.ctrlBtns}>
                                        <TouchableHighlight style={[styles.btnItem]}
                                                            underlayColor="transparent"
                                                            onPress={this.lastSong.bind(this)}>
                                            <Image source={lastBtn} style={styles.lastNext} />
                                        </TouchableHighlight>
                                        <TouchableHighlight style={[styles.btnItem,styles.btnPause]}
                                                            underlayColor="transparent"
                                                            onPress={this.play.bind(this)}>
                                            <Image source={playPause} style={styles.playPause} />
                                        </TouchableHighlight>
                                        <TouchableHighlight style={[styles.btnItem]}
                                                            underlayColor="transparent"
                                                            onPress={this.nextSong.bind(this)}>
                                            <Image source={nextBtn} style={styles.lastNext} />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }

    renderSongItem(music:Object) {
        let rightBtn = startIcon;
        if (music.status == "playing") {
            rightBtn = playIng;
        }
        return (
            <View key={music.id} style={styles.musicItem}>
                <Image source={{uri:music.cover}}
                       style={styles.musicCover}/>
                <View style={styles.musicInfo}>
                    <View style={styles.musicInfoInner}>
                        <Text style={styles.title}>{music.title}</Text>
                        <Text style={styles.author}>{music.author}</Text>
                    </View>
                    <TouchableHighlight onPress={this.handlePress.bind(this,music.id)}
                                        underlayColor="transparent"
                                        activeOpacity={0.8}>
                        <Image source={rightBtn}
                               style={styles.rightBtn}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    renderPlayerList() {
        const {songList} = this.state;
        if (songList.getRowCount() > 0) {
            return (
                <View style={[styles.container,styles.playList]}>
                    <ScrollView>
                        <ListView
                            ref="listview"
                            dataSource={songList}
                            renderRow={this.renderSongItem}
                            automaticallyAdjustContentInsets={false}
                            keyboardDismissMode="on-drag"
                            keyboardShouldPersisiTaps={true}
                            showVerticalIndicatpr={false}/>
                    </ScrollView>
                </View>
            );
        }
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={commonBackground} style={[styles.container,styles.fullScreen,styles.bjImage]}>
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
    bjImage: {
        width: screenWidth,
        height: screenHeight
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
    playerUnder: {
        width: 750 * scale,
        height: 420 * scale,
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    playIng: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        fontWeight: "bold",
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
        height: 150 / screenScale,
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
        flex: 1,
        flexDirection: "row"
    },
    musicItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 160 * scale,
        backgroundColor: "transparent",
        borderTopColor: "rgba(255,255,255,0.4)",
        borderTopWidth: 1 / screenScale,
        borderBottomColor: "#156a96",
        borderBottomWidth: 1 / screenScale
    },
    musicCover: {
        width: 100 * scale,
        height: 100 * scale,
        marginLeft: 30 * scale,
        marginRight: 30 * scale
    },
    musicInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    musicInfoInner: {
        width: 495 * scale
    },
    title: {
        fontSize: 30 * scale,
        color: "#fff",
        fontWeight: "bold"
    },
    author: {
        fontSize: 25 * scale,
        color: "#fff"
    },
    rightCtrl: {
        width: 30 * scale,
        height: 30 * scale
    },
    rightBtn: {
        width: 40 * scale,
        height: 40 * scale
    }
});

