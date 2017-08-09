import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import { Header } from '../common';
import LatestAlerts from '../LatestAlerts';
import MyAlerts from '../MyAlerts';

class DashboardScreen extends Component {
    static navigationOptions = {        
        drawerLabel: 'Dashboard',
        drawerIcon: () => (
            <Image
                source={require('../../images/menu_home.png')}
                style={styles.icon}
            />
        ),
    };

    render() {        
        const { latestAlertsStyle, myAlertsStyle, componentStyle } = styles;
        console.log(this.props);

        return (
            <View style={componentStyle}>
                <Header 
                    headerText="Dashboard" 
                    navigate={this.props.navigation.navigate.bind(this)} 
                    icon={require('../../images/ic_home.png')}
                />
                <LatestAlerts style={latestAlertsStyle} navigation={this.props.navigation} />
                <MyAlerts style={myAlertsStyle} />
            </View>
        );
    }
}

const styles = {
    componentStyle: {
        flexDirection: 'column',
        flex: 1 
    },
    latestAlertsStyle: {
        flex: 2
    },
    myAlertsStyle: {
        flex: 1
    },
    icon: {
        width: 24,
        height: 24
    }
};

const mapStateToProps = state => {
    return { nav: state.nav };
};

export default connect(mapStateToProps)(DashboardScreen);
