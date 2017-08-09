import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import { Header } from '../common';
import { getAlert } from '../../actions/AlertActions';

class AlertScreen extends Component {     
    // NOTE: This is a hack so the alert selector doesn't show up in the drawer navigator component
    //       Need to look into nesting an alert stack navigator into the dashboard
    static navigationOptions = {        
        drawerLabel: ' ' 
    };

    componentWillMount() {            
        /*
            NOTE: this works as an audio streamer

            const url = 'http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3';
            ReactNativeAudioStreaming.pause();
            ReactNativeAudioStreaming.resume();
            ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });
            ReactNativeAudioStreaming.stop();
        */
    }

    render() {  
        return (
            <View style={{ flex: 1 }}>
                <Header 
                    headerText="Alert" 
                    navigate={this.props.navigation.navigate.bind(this)} 
                    icon={require('../../images/audio_alerts_header.png')}
                />
                <View style={styles.alertHeader}>
                    <Text style={styles.alertHeaderText}>WabashFD</Text>
                    <Text style={styles.alertHeaderSubText}>2017-08-08 15:35:42</Text>
                </View>
                <View style={styles.playbackSection}>
                    <Image
                        source={require('../../images/audio_playback_up.png')}
                        style={styles.playbackButton}
                    />
                </View>
                <View style={styles.mappingSection}>
                    <View style={styles.mappingSection1}>
                        <TextInput                        
                            placeholder="Enter Address"  
                            style={styles.addressInput}                      
                        />
                    </View>
                    <View style={styles.mappingSection2}>
                        <TextInput                        
                            placeholder="City, ST"    
                            style={styles.cityStateInput}                    
                        />
                        <TouchableOpacity style={styles.mapItButton}>
                            <Text style={styles.mapItText}>Map It!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.streamingSection}>
                    <TouchableOpacity style={styles.streamingButton}>
                        <Image
                            source={require('../../images/menu_streaming.png')}
                            style={styles.streamingIcon}
                        />
                        <Text style={styles.streamingText}>Launch Streaming Audio</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        );
    }
}

const styles = {        
    alertHeader: {
        //height: 18,
        backgroundColor: '#142984',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertHeaderText: {
        color: '#FFFFFF',
        fontSize: 28
    },
    alertHeaderSubText: {
        color: '#FFFFFF',
        fontSize: 18
    },
    playbackSection: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playbackButton: {
        width: 160,
        height: 160               
    },
    mappingSection: {
        flex: 2,
        padding: 10
    },
    mappingSection1: {
        flexDirection: 'row'
    },
    mappingSection2: {
        flexDirection: 'row'
    },
    streamingSection: {
        flex: 1
    },
    addressInput: {
        flex: 2
    },
    cityStateInput: {
        flex: 2
    },
    mapItButton: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#009b19',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginLeft: 5,
        marginRight: 5
    },
    mapItText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 5
    },
    streamingButton: {
        flex: 1,
        //alignSelf: 'stretch',
        backgroundColor: '#3e423f',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    streamingText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        //paddingTop: 10,
        //paddingBottom: 5
    },
    streamingIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 20,
        width: 20
    }
};

const mapStateToProps = state => {
    console.log(state.alertAudioFile);
    return { alertAudioFile: state.alertAudioFile };
}; 

export default connect(mapStateToProps, { getAlert })(AlertScreen);
