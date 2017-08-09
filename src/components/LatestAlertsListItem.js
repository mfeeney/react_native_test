import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

const LatestAlertsListItem = (props) => {   
    const { alert, onPress } = props;
    const { 
        rowSectionStyle, 
        iconImageStyle, 
        orgNameTextStyle, 
        orgNameSubTextStyle,
        dateTextStyle,
        dateSubTextStyle,
        leftSectionStyle,
        centerSectionStyle,
        rightSectionStyle,
        farRightSectionStyle,
        rightIconImageStyle 
    } = styles;
    
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={rowSectionStyle}>
                <View style={leftSectionStyle}>
                    <Image 
                        style={iconImageStyle}  
                        source={require('../images/audio_alerts_header.png')}
                    />
                </View>

                <View style={centerSectionStyle}>
                    <Text style={orgNameTextStyle}>{alert.org}</Text>
                    <Text style={orgNameSubTextStyle}>Tap here to play audio</Text>
                </View>

                <View style={rightSectionStyle}>
                    <Text style={dateTextStyle}>
                        08/01 at 13:38
                    </Text>
                    <Text style={dateSubTextStyle}>
                        eDispatches
                    </Text>
                </View>

                <View style={farRightSectionStyle}>
                    <Image
                        style={rightIconImageStyle}
                        source={require('../images/ic_more_chevron.png')}
                    />
                </View>
                
            </View>
        </TouchableNativeFeedback>
    );    
};

const styles = {
    rowSectionStyle: {
        flexDirection: 'row',
        height: 50
    },
    iconImageStyle: {
        height: 25,
        width: 25,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orgNameTextStyle: {
        fontSize: 18,
        color: '#142984'
    },
    orgNameSubTextStyle: {
        fontSize: 14
    },
    dateTextStyle: {

    },
    dateSubTextStyle: {

    },
    leftSectionStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    centerSectionStyle: {
        flex: 3
    },
    rightSectionStyle: {
        flex: 2
    },
    farRightSectionStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightIconImageStyle: {
        height: 15,
        width: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default LatestAlertsListItem;
