import React from 'react';
import { View, Text, Image } from 'react-native';

const MyAlertsListItem = (props) => {   
    const { alert } = props;
    const { 
        rowSectionStyle, 
        leftIconImageStyle, 
        rightIconImageStyle, 
        orgNameTextStyle,         
        leftSectionStyle,
        centerSectionStyle,
        rightSectionStyle 
    } = styles;
    
    return (
        <View style={rowSectionStyle}>
            <View style={leftSectionStyle}>
                <Image 
                    style={leftIconImageStyle}  
                    source={require('../images/audio_alerts_header.png')}
                />
            </View>

            <View style={centerSectionStyle}>
                <Text style={orgNameTextStyle}>{alert.org}</Text>                
            </View>

            <View style={rightSectionStyle}>
                <Image
                    style={rightIconImageStyle}
                    source={require('../images/ic_more_chevron.png')}
                />
            </View>
            
        </View>
    );    
};

const styles = {
    rowSectionStyle: {
        flexDirection: 'row',
        height: 50
    },
    leftIconImageStyle: {
        height: 25,
        width: 25,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIconImageStyle: {
        height: 15,
        width: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orgNameTextStyle: {
        fontSize: 18,
        color: '#142984'
    },    
    leftSectionStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    centerSectionStyle: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    rightSectionStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }    
};

export default MyAlertsListItem;
