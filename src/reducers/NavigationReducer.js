import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';
import {
    NAV_DASHBOARD,
    NAV_AUDIO_ALERTS,
    NAV_STREAMING,
    NAV_SETTINGS,
    NAV_ALERT
} from '../actions/types';

const DashboardRoute = AppNavigator.router.getActionForPathAndParams('Dashboard');

// The reducer that outputs the new navigation state for a given action, with
// an optional previous state. When the action is considered handled but the
// state is unchanged, the output state is null.
const INITIAL_STATE = AppNavigator.router.getStateForAction(
    DashboardRoute
);

export default (state = INITIAL_STATE, action) => {
    let nextState;
    switch (action.type) {
        case NAV_DASHBOARD:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Dashboard' }),
                state
            );
            break;        
        case NAV_AUDIO_ALERTS:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'AudioAlerts' }),
                state
            );
            break; 
        case NAV_STREAMING:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Streaming' }),
                state
            );
            break; 
        case NAV_SETTINGS:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Settings' }),
                state
            );
            break; 
        case NAV_ALERT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Alert', params: { alert: action.payload.alert } }),
                state
            );
            break; 
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    console.log(nextState);
    return nextState || state;
};
