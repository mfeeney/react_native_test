import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../common';

class SettingsScreen extends Component { 
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: () => (
            <Image
                source={require('../../images/menu_settings.png')}
                style={styles.icon}
            />
        ),
    };
    
    render() {  
        return (
            <View>
                <Header 
                    headerText="Settings" 
                    navigate={this.props.navigation.navigate.bind(this)} 
                    icon={require('../../images/settings_header.png')}
                />
                <Text> Settings Screen </Text>
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

export default SettingsScreen;
