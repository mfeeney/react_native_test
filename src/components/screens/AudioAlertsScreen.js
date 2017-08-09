import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../common';

class AudioAlertsScreen extends Component { 
    static navigationOptions = {
        drawerLabel: 'Audio Alerts',
        drawerIcon: () => (
            <Image
                source={require('../../images/menu_audio_alert.png')}
                style={styles.icon}
            />
        ),
    };
    
    render() {  
        return (
            <View>
                <Header 
                    headerText="Audio Alerts" 
                    navigate={this.props.navigation.navigate.bind(this)} 
                    icon={require('../../images/audio_alerts_header.png')}
                />
                <Text> Audio Alerts Screen </Text>
            </View>
        );
    }
}

const styles = {    
    icon: {
        width: 24,
        height: 24
    }
};

export default AudioAlertsScreen;
