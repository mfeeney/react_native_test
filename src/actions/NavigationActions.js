import {
    NAV_DASHBOARD,
    NAV_AUDIO_ALERTS,
    NAV_STREAMING,
    NAV_SETTINGS,
    NAV_ALERT
} from './types';

export const navigateToDashboard = () => {
    return {
        type: NAV_DASHBOARD
    };
};

export const navigateToAudioAlerts = () => {
    return {
        type: NAV_AUDIO_ALERTS
    };
};

export const navigateToStreaming = () => {
    return {
        type: NAV_STREAMING
    };
};

export const navigateToSettings = () => {
    return {
        type: NAV_SETTINGS
    };
};

export const navigateToAlert = ({ alert }) => {    
    return {
        type: NAV_ALERT,
        payload: alert
    };
};

