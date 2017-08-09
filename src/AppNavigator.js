import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';

import DashboardScreen from './components/screens/DashboardScreen';
import AudioAlertsScreen from './components/screens/AudioAlertsScreen';
import StreamingScreen from './components/screens/StreamingScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import NavDrawer from './components/NavDrawer';
import AlertScreen from './components/screens/AlertScreen';

export const AppNavigator = DrawerNavigator({
    Dashboard: { screen: DashboardScreen },
    AudioAlerts: { screen: AudioAlertsScreen },
    Streaming: { screen: StreamingScreen },
    Settings: { screen: SettingsScreen },
    Alert: { screen: AlertScreen }
},
{
    drawerWidth: 200,
    drawerPosition: 'left',    
    contentComponent: (props) => <NavDrawer {...props} />
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({    
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
