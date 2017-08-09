import React from 'react';
import { Text, View, Image, TouchableNativeFeedback } from 'react-native';

const Header = (props) => {
    const { 
        textStyle, 
        viewStyle,         
        leftSectionStyle,        
        centerSectionStyle,
        rightSectionStyle,
        leftIconStyle,
        centerIconStyle,
        rightIconStyle
    } = styles;
    
    return (        
        <View style={viewStyle}>            
            <View style={leftSectionStyle}>
                <TouchableNativeFeedback onPress={() => props.navigate('DrawerOpen')}>
                    <View>
                        <Image 
                            style={leftIconStyle}
                            source={require('../../images/icon.png')} 

                        />
                    </View>
                </TouchableNativeFeedback>
            </View>

            <View style={centerSectionStyle}>
                <Image 
                    style={centerIconStyle}
                    source={props.icon} 
                />
                <Text style={textStyle}>{props.headerText}</Text>
            </View>

            <View style={rightSectionStyle}>
                <Image 
                    style={rightIconStyle}
                    source={require('../../images/ic_refresh.png')} 
                />
            </View>
            
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40, 
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        position: 'relative',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20
    },
    leftIconStyle: {
        height: 20,
        width: 20     
    },
    centerIconStyle: {
        height: 20,
        width: 20,
        marginRight: 5        
    },
    rightIconStyle: {
        height: 20,
        width: 20     
    },    
    leftSectionStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 5
    },
    centerSectionStyle: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightSectionStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: 10
    }
};

export { Header };
