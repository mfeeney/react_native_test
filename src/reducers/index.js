import { combineReducers } from 'redux';
import DashboardReducer from './DashboardReducer';
import NavigationReducer from './NavigationReducer';
import AlertReducer from './AlertReducer';


export default combineReducers({
    nav: NavigationReducer,
    dashboard: DashboardReducer,
    alert: AlertReducer
});
