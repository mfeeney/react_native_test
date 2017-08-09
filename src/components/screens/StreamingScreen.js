import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../common';

class StreamingScreen extends Component { 
    static navigationOptions = {
        drawerLabel: 'Streaming',
        drawerIcon: () => (
            <Image
                source={require('../../images/menu_streaming.png')}
                style={styles.icon}
            />
        ),
    };
    
    render() {  
        return (
            <View>
                <Header 
                    headerText="Streaming" 
                    navigate={this.props.navigation.navigate.bind(this)} 
                    icon={require('../../images/menu_streaming.png')}
                />
                <Text> Streaming Screen </Text>
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

export default StreamingScreen;
