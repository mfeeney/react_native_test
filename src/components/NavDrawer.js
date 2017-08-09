import React from 'react';
import { View, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

const NavDrawer = (props) => {
    const { container, navHeaderImage, navHeaderSection, itemLabel } = styles;        
    
    return (
        <View style={container}>
            <View style={navHeaderSection}>
                <Image   
                    style={navHeaderImage}                     
                    source={require('../images/menu_logo.png')}
                />
            </View>
            <DrawerItems 
                {...props} 
                labelStyle={itemLabel}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#383b3f'        
    },
    navHeaderSection: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
    navHeaderImage: {        
        height: 35,
        width: 190,
        marginTop: 10,
        marginLeft: 5       
    },
    itemLabel: {
        fontSize: 18,
        fontFamily: 'sans-serif-thin',
        color: '#FFFFFF',
        margin: 8
    }    
};

export default NavDrawer;
